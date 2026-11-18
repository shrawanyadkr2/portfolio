const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const ffmpeg = require('ffmpeg-static');
const input = 'C:/Users/shraw/.gemini/antigravity/brain/7eea0948-b2a9-46b1-b3d7-529a70252154/.user_uploaded/media_1794991200919_0cd6ca94.mp4';
const outputDir = path.resolve(__dirname, '../public');
const outputFile = path.join(outputDir, 'school_erp_demo.mp4');

console.log('Reading video info from:', input);
let info = '';
try {
  execSync(`"${ffmpeg}" -i "${input}"`, { stdio: 'pipe' });
} catch (e) {
  info = e.stderr ? e.stderr.toString() : '';
}

console.log('--- Info ---');
const durationMatch = info.match(/Duration: (\d{2}):(\d{2}):(\d{2}\.\d+)/);
if (durationMatch) {
  const hours = parseFloat(durationMatch[1]);
  const mins = parseFloat(durationMatch[2]);
  const secs = parseFloat(durationMatch[3]);
  const totalSeconds = hours * 3600 + mins * 60 + secs;
  console.log(`Duration string: ${durationMatch[0]}`);
  console.log(`Total duration in seconds: ${totalSeconds}`);

  // User requested: "cut initial 3 sec and last 1 sec"
  const startTime = 3;
  const endTime = totalSeconds - 1;
  const duration = endTime - startTime;
  console.log(`Start time: ${startTime}s, End time: ${endTime}s, Trimmed Duration: ${duration}s`);

  // Web optimized x264 mp4, faststart, stripped audio
  const cmd = `"${ffmpeg}" -y -ss ${startTime} -to ${endTime} -i "${input}" -c:v libx264 -preset fast -crf 22 -pix_fmt yuv420p -movflags +faststart -an "${outputFile}"`;
  console.log('Running cmd:', cmd);
  execSync(cmd, { stdio: 'inherit' });
  console.log('Finished trimming! File created at:', outputFile);

  const stats = fs.statSync(outputFile);
  console.log(`Output file size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
} else {
  console.log('Could not find duration in info:');
  console.log(info);
}

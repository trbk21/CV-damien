import fs from 'fs';
const buf = fs.readFileSync('CV DAMIEN likendin.pdf');
const text = buf.toString('binary');
// Look for common LinkedIn strings
if (text.includes('Experience')) console.log('Found Experience');
if (text.includes('Education')) console.log('Found Education');
console.log(text.substring(0, 1000));

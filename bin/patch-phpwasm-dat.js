const fs = require('fs');
const file = 'node_modules/@php-wasm/web/shared/icudt74l.js';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  /import dataFilename from '\.\/icudt74l\.dat';/,
  "const dataFilename = new URL('./icudt74l.dat', import.meta.url).href;\nexport default dataFilename;"
);
fs.writeFileSync(file, content);
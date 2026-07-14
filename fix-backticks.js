const fs = require('fs'); 
const path = 'c:/Users/HP/ZCodeProject/project-future-forge/components/organizations'; 
const files = fs.readdirSync(path); 
for (const file of files) { 
  if (file.endsWith('.tsx')) { 
    const p = path + '/' + file; 
    let content = fs.readFileSync(p, 'utf8'); 
    let newContent = content.replace(/\\`/g, '`').replace(/\\\$/g, '$'); 
    if (content !== newContent) { 
      fs.writeFileSync(p, newContent); 
      console.log('Fixed ' + file); 
    } 
  } 
}


const fs = require('fs');
const path= require('path');

const dirPath= path.join(__dirname,'myFile');

for(i=0; i<4; i++){
    fs.writeFileSync(dirPath+"/file"+i+".txt", `Dekha ${i} khab to ye sil sile hue.`)
}

fs.readdir(dirPath,(err,files)=>{
    console.log(files);
})
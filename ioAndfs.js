const fs =require('fs');

const input = process.argv;

if(input[4]=='add'){
    fs.writeFileSync(input[2], input[3]);
}
else if(input[4]=='remove'){
    fs.unlinkSync(input[2], input[3]);
}
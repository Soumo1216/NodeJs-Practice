const path = require("path");


const filePath = path.join(`/Content`,`SubContent`,`test.txt`)


console.log(filePath);

const base = path.basename(filePath)

console.log(base);

const absolute = path.resolve(__dirname,`content`,`subcontent`,`test.txt`)

console.log(absolute);
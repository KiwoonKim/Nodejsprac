const fs = require("fs");
const data = []
const readfile = fs.createReadStream("./file.txt", {
//   highWaterMark: 8, // default 64kbytes
//   encoding: "utf-8",
}).on('data', (chunk) =>{
    data.push(chunk)
}).on('end', (data) => {
    console.log(data.join(''));
}).on('error', (error) => {
    console.log(error);
});

readfile.on("data", (chunk) => {
//   console.log(chunk);
data.push(chunk)
console.count("data");
});
readfile.on('end', () =>{
    console.log(data.join(''));
})
readfile.on("error", (error) => {
  console.log(error);
});

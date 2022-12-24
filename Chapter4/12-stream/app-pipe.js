const fs = require("fs");
const zlib = require("zlib");
const data = [];
const readfile = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");
const piping = readfile.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done!");
});

const http = require("http");
const server = http.createServer((req, res) => {
  fs.readFile("file.txt", (err, data) => {
    const readfile = fs.createReadStream("./file.txt");
    readfile.pipe(res);
  });
});
server.listen(3000);

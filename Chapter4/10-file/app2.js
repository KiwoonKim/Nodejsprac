const fs = require("fs").promises;

// read a file

fs.readFile("./text-new.txt", "utf-8")
  .then((data) => console.log(data))
  .catch(console.error);

// write a file
fs.writeFile("./file.txt", "Hellow? what?:)").catch(console.error);

//copy
fs.appendFile("./file.txt", "Hellow? :) Yo~!,kasjdiajdlaj")
.then(() => {
    fs.copyFile("./file.txt", "./file2.txt").catch(console.error);
  })
  .catch(console.error);

fs.mkdir('sub-folder').catch(console.error);

fs.readdir('./').then(console.log).catch(console.error)


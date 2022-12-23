const { parse } = require("path");
const path = require("path");

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'
// 운영체제별로 표기법이 다름.
console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

//dirname
console.log(path.dirname(__filename));
//extension
console.log(path.extname(__filename));

//const
const parsed = path.parse(__filename);
console.log(parsed);
console.log(parsed.name);

const str = path.format(parsed);
console.log(str);

//isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname));
console.log("isAbsolute?", path.isAbsolute("../"));
console.log("isAbsolute?", path.isAbsolute("/Users/../"));


//normalize
console.log(path.normalize('./folder/////////sub'));

//join 운영체제별로 경로 구분자가 다름으로 아래와 같이 쓰는게 좋음.
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

// const http2 = require('http2'); // https ->

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const name = "kiwkim";
const courses = [
    { name: "html" },
    { name: "CSS" },
    { name: "js" },
    { name: "Node" },
];
const server = http.createServer((req, res) => {
    console.log("incomming...");
    // console.log(req.headers);
    // console.log(req.url);
    // console.log(req.httpVersion);
    // console.log(req.method);
    const url = req.url;
    res.setHeader("Content-Type", "text/html");
    if (url === "/") {
        ejs.renderFile("./template/index.ejs", { name }).then((data) =>
        res.end(data)
        );
    } else if (url === "/courses") {
        res.write("hello");
        ejs.renderFile("./template/courses.ejs", { courses }).then((data) =>
            res.end(data)
        );
    } else {
        ejs.renderFile("./template/not-found.ejs", { name }).then((data) =>
            res.end(data)
        );
    }
});

server.listen(8080);

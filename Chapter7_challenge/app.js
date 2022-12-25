const path = require("path");
const fs = require("fs").promises;

// try {
//     const files = await fs.readdir("./");
//     for (const file of files)
//         console.log(file);

// } catch (err) {
//     console.error(err);
// }
function parse_file(file_name) {
    let extname = path.extname(file_name);
    if (extname === ".mp4" || extname === ".mov") {
        fs.rename(file_name, `./video/${file_name}`)
            .then(console.log)
            .catch(console.error);
    } else if (extname === ".png" || extname === ".aae") {
        fs.rename(file_name, `./captured/${file_name}`)
            .then(console.log)
            .catch(console.error);
    } else {
        if (is_duplicated(file_name)) {
            let origin_name = file_name.split("E");
            let origin = origin_name.join("");
            fs.rename(origin, `./duplicated/${origin}`)
                .then(console.log)
                .catch(console.error);
        }
    }
}

function is_duplicated(file_name) {
    let dup_name = [];
    dup_name = file_name.split("_");
    if (dup_name.length === 2) {
        if (dup_name[1][0] === "E") {
            return true;
        }
    }
    return false;
}
fs.readdir("./").then((file) => {
    let is_video = false;
    let is_captured = false;
    let is_dup = false;
    file.forEach((file) => {
        if (file === "video") is_video = true;
        else if (file === "is_captured") is_captured = true;
        else if (file === "is_duplicated") is_dup = true;
        
    });
    if (!is_video) {
        fs.mkdir("video").catch(console.error);
    }
    if (!is_captured) {
        fs.mkdir("captured").catch(console.error);
    }
    if (!is_dup) {
        fs.mkdir("duplicated").catch(console.error);
    }
});

// fs.rename('./test.js', './video/test.js', (error) =>{
//     console.log(error);
// })

fs.readdir("./").then((file) => {
    file.forEach((file) => {
        parse_file(file);
    });
});

// .mp4 .mov
// .png .aae
// .jpg

const path = require("path");
const os = require("os");
const fs = require("fs");

const folder = process.argv[2];
const workingDir = path.join(os.homedir(), "Pictures", folder);

if (!folder || !fs.existsSync(workingDir)) {
    console.error("Please enter folder name in Pictures");
    return;
}

//2.
const videoDir = path.join(workingDir, "video");
const capturedDir = path.join(workingDir, "captured");
const duplicatedDir = path.join(workingDir, "duplicated");
console.log(workingDir);

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

fs.promises.readdir(workingDir).then(process_files).catch(console.log);

function process_files(files) {
    files.forEach((file) => {
        if (isVideoFile(file)) {
            console.log("video", file);
            move(file, videoDir);
        } else if (isCapturedFile(file)) {
            console.log("captured", file);
            move(file, capturedDir);
        } else if (isDuplicatedFile(files, file)) {
            console.log("duplicated", file);
            move(file, duplicatedDir);
        }
    });
}

function isVideoFile(file) {
    const regExp = /(mp4|mov)$/gm;
    const match = file.match(regExp);
    console.log(match);
    return !!match;
}
function isCapturedFile(file) {
    const regExp = /(png|aae)$/gm;
    console.log(regExp);
    const match = file.match(regExp);
    console.log(match);
    return !!match;
}
function isDuplicatedFile(files, file) {
    if (!file.startsWith("IMG_") || file.startsWith("IMG_E")) {
        return false;
    }
    const edited = `IMG_E${file.split("_")[1]}`;
    const found = files.find((f) => f.includes(edited));

    return !!found;
    return true;
}

function move(file, targetDir) {
    const oldPath = path.join(workingDir, file);
    const newPath = path.join(targetDir, file);
    fs.promises.rename(oldPath, newPath).catch(console.error);
}

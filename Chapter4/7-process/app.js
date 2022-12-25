const process = require("process");
console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage);

setTimeout(() => {
    // 찐막
    console.log("setTimeout");
}, 0);
process.nextTick(() => {
    // 막
    console.log("nextTick");
});

for (let i = 0; i < 1e5; i++) {
    console.log("for loop");
}

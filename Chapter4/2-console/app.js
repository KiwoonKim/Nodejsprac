const { table } = require("console");

console.log("logging");

console.clear();

//log level. 위험도를 구분하여 알림.
console.log("log"); // 개발용
console.info("info"); // 중요한 정보에 대한 내용.
console.warn("warn"); // 경보
console.error("error"); // 에러. 사용자 에러, 시스템 에러,

// assert
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object

const student = { name: "kiwkim", age: 20 , company: {name: 'SWjg'}};
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

//measuring time
console.time('for loop')
for (let i = 0; i < 10; i++){
    i++;
}

//counting
function a(){
    console.count('a function')
}
a();
console.countReset('a function')
a();
console.timeEnd('for loop')

//trace
function f1(){
    f2()
}
function f2(){
    f3();
}
function f3(){
    console.log('f3')
    console.trace()
}
f1()
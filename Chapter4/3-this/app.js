function hello(){
    console.log(this);
}

hello()

class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction(){
        console.log('--------class---------')
        console.log(this)
        console.log(this === global)
    }
}

const a = new A(1);
a.memberFunction()

console.log('---- global scope ----')
console.log(this)
console.log(this === module.exports) // 브라우저에서 이상태의 this는 global을 가리킨다. 

const fs = require('fs');

console.log(global);
global.hello = () => {
    console.log('hello')
    console.log('hello2')
}
hello2 = () => console.log('hello3')
global.hello();
hello2();
hello3 = () => hello2
hello3()

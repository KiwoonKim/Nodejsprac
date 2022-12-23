const fs = require('fs');

// 3
// rename(...., callback(error, data)) ->  비동기적 콜백함수 발생시 (여기서는 에러가 발생하거나 데이터가 전달되면.)
// try{ renameSync(....) } catch(e) { } -> 블락. 끝날때까지 다음 줄로 넘어가지 않음. try... catch로 감싸주어야함,
// promises.rename().then().catch(0) 

// try ... catch 에러가 발생해도 프로그램이 죽지않고 catch(){}를 실행하고 계속 진행함.
// sync를 이용할 때는 try ... cat -> 사용하지 않는 것이 좋음.
try {
    fs.renameSync('./text.txt', './test-new.txt');
} catch (error) {
    console.error(error);
}

fs.rename('./test-new.txt', './text.txt', (error) =>{
    console.error(error);
});
console.log('hello')

fs.promises
    .rename('./text2.txt', './text-new.txt') //
    .then(()=> console.log('Done!'))
    .catch(console.error)
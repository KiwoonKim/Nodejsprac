let count = 0;
function increase() {
    count++;
}

function getCount(){
    return count;
}

module.exports.getCount = getCount;
// module.exports.increase = increase;
// module.exports 와 exports 가 전혀 다른 변수가 됨. 아래 선언 이전에는 module.exports와 exports는 같은 주소를 바라봄.
// 따라서 exports와 같은 변수명은 사용하지 않는 것이 바람직.
exports = {}
// module을 생략해도 됨. 하지만 이것은 처음에는 위의 코드와 같은 module을 가리키고 있어서 가능한 것.
exports.increase = increase; 
console.log(module)
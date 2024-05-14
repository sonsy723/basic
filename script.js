document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('.title').innerHTML = "제목아니다"
})

const sum = function(num1, num2) {
    console.log(num1 + num2);
}
console.log(sum(1, 3));

const isEvenOrOdd = function(num) {
    if(num % 2 === 0){
        console.log('짝수입니다.')
    } else {
        console.log('홀수입니다.')
    }
}
console.log(isEvenOrOdd(3));

const person = {
    '이름' : '병수',
    '나이' : 20
}
console.log(person);
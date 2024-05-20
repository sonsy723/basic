const val = document.querySelector('input').value;
const span = document.querySelector('span');

function 배달팁계산하기(){
    if(val < 10000){
        return 3000;
    } else if(val > 10000 && val < 30000){
        return 2000;
    }else if(val > 30000 && val < 50000){
        return 1000;
    } else {
        return 0;
    }
}

document.querySelector('.search').addEventListener('click', function(){
    span.innerHTML = 배달팁계산하기();
})

window.addEventListener('scroll', function(){
    console.log(this.scrollY) // 스크롤이 아래로 얼마나 내려갔는지 숫자로 알려줌
    if(scrollY > 100){
        this.document.querySelector('.up').style.display = 'block';
    } else {
        this.document.querySelector('.up').style.display = 'none';
    }
})

document.querySelector('.up').addEventListener('click', function() {
    window.scrollTo({left: 0, top: 0});
    
})

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('tab-content');
for(let i = 0; i < tabBtns.length; i++){
    tabBtns[i].addEventListener('mouseover', function() {
        tabContents[i].classList.add('show');
    })
    tabBtns[i].addEventListener('mouseout', function() {
        tabContents[i].classList.remove('show');
    })
}

setTimeout

// 1. 버튼 태그를 가져온다
// 2. 버튼 태그에 이벤트를 등록한다

// 이벤트가 발생하면

function 토글열닫() {
  document.querySelector(".modal").classList.toggle("show");
}

document.querySelector(".modal-btn").addEventListener("click", 토글열닫);

document.querySelector(".close-btn").addEventListener("click", 토글열닫);

function 경고메세지열닫(displayValue){
    document.querySelector('.경고메세지').style.display = displayValue;
}
document.querySelector('.login').addEventListener('click', function(){
    if(document.querySelector('.아이디').value === "" || document.querySelector('.비밀번호').value === ""){
        경고메세지열닫('block');
    }
});

document.querySelector('.경고창닫기').addEventListener('click', function(){
    경고메세지열닫('none'); 
});

let count = 0;
const btn = document.querySelector('.btn');
const resetBtn = document.querySelector('.reset-btn')
btn.addEventListener('click', function(){
    count = count + 1;
    btn.textContent = count;
    
})
resetBtn.addEventListener('click', function(){
    count = 0;
    btn.textContent = count;
})

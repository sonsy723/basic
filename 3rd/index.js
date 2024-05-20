// const sideBar = document.querySelector(".side-bar");
// const sideBarBtn = document.querySelector(".side-bar-btn");

// const toggleBtn = sideBarBtn.addEventListener("click", function () {
//   if (sideBar.classList.contains("active")) {
//     sideBar.classList.remove("active");
//     sideBarBtn.textContent = "열기";
//   } else {
//     sideBar.classList.add("active");
//     sideBarBtn.textContent = "닫기";
//   }
// });

const collapsible = document.querySelectorAll(".collapsible");
const content = document.querySelectorAll(".content");

for (let i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", () => {
    if (content[i].style.maxHeight) {
      // html에 있는지 없는지 체크 -> 없음
      collapsible[i].classList.remove("active");
      content[i].style.maxHeight = null;
    } else {
      collapsible[i].classList.add("active");
      content[i].style.maxHeight = content[i].scrollHeight + "px";
    }
  });
}

let products = [
    {
        brand: '챔피온',
        name: '이뿐 반팔티샤츄',
        price: '29,900',
    },
    {
        brand: '디스이즈네버뎃',
        name: '멋진 반팔티샤츄',
        price: '49,900',
    },
];

const productContainer = document.querySelector(".product-container");
products.forEach ((product) => {
    let html템플릿 = `<div class="products">
        <h3 class="brand">${product.brand}</h3>
        <h3 class="name">${product.name}</h3>
        </div>`;
    productContainer.insertAdjacentHTML('beforeend', html템플릿);
});

// ************ 베이직 과제 ************ //



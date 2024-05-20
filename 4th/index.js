const person = [
  {
    name: "철수",
    age: 19,
    sex: "남",
  },
  {
    name: "짱구",
    age: 20,
    sex: "남",
  },
  {
    name: "유리",
    age: 21,
    sex: "여",
  },
];
const first = document.querySelector(".first");
person.forEach((element) => {
  let personList = `<div>
        <h3>이름 : ${element.name}</h3>
        <p>나이 : ${element.age}</p>
        <p>성별 : ${element.sex}</p></div>`;
  first.insertAdjacentHTML("beforeend", personList);
});

const findGirl = person.find((element) => {
  return element.sex === "여";
});
console.log(findGirl);

const findBoy = person.filter((element) => {
  return element.sex === "남";
});
console.log(findBoy);

const tenYears = person.map((element) => {
  return {
    name: element.name,
    age: element.age + 10,
    sex: element.sex,
  };
});
console.log(tenYears);
console.log(person);

const newPerson = [...person];
newPerson.sort((a, b) => {
    return b.age - a.age;   // 내림차순 정렬
});
console.log(newPerson);
console.log(person);

const user = {
	이름: "병수",
	나이: 20,
	주소: "시골",
}
console.log(user.주소) // "시골"
const {이름, 나이, 주소} = user;
console.log(주소);

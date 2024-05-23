const user = {
	이름: "병수",
	나이: 20,
	주소: "시골",
}

localStorage.setItem('user', JSON.stringify(user));

const userParse = JSON.parse(localStorage.getItem('user'));

const newUser = {
    ...user,
    나이: 30
};

localStorage.setItem('user', JSON.stringify(newUser));
console.log(newUser);

localStorage.clear();

//  5강 과제  //
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))


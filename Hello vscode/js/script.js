let number = 5;
const leftDorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    name: "John",
    age: 25,
    isMarried: "Не женат"
};

let arr = ['one', 'two', 'three', 'four', 5, {obj}];
console.log(arr[5]);

//const vozrast = prompt("Укажите ваш возраст", "18");
//console.log(vozrast + 5);

// const answers = [];

// answers[0] = prompt("Как вас зовут?");
// answers[1] = prompt("Как ваша фамилия?");
// answers[2] = prompt("Сколько вам лет?");
// answers[3] = prompt("В каком городе вы живете?");

// document.write(answers);

// const category = '32';
// console.log('https//Izhevsk/S.Votkinskoe/' + category + '/' + '53');

// // const category = '32';
// console.log(`https//Izhevsk/S.Votkinskoe/${category}/53`);

const Privet = prompt('Введите ваше имя', '');
alert(`Привет, ${Privet}`);
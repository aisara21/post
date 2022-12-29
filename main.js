// let name = "Aisara"
//age = 18
//balance = 23.5
//test = false
//x = 10
//y = 5

//console.log(x + y);
//console.log(x - y);
//console.log(x * y);
//console.log(x / y);
//console.log(x % y);
//console.log(x ** y);

// console.log(5 == "5");
// console.log(5 === 5);
// console.log(5 , 4);
// console.log(5 <= 5);
// console.log(5 != 5);

// let x= 20;
// let y= 25;
// let z= 60;

// if ( x > y && x > z) {
//     console.log("x больше");
// }
// else if ( y > x && y > z) {
//     console.log("y больше");
// }
// else if ( z > x && z > y) {
//     console.log("z больше")
// }

// let x = +prompt("Введите число x:");
// alert("x= " + x);
// let y = +prompt("Введите число y:");
// alert("y= " + y);
// let z = +prompt("Введите число z:");
// alert("z= " + z);

// if (x > y && x > z) {
//     console.log("x больше");
// }
// else if (y > x && y > z) {
//     console.log("y больше");
// }
// else if ( x == y && x == z && z == y) {
//     console.log("error");
// }
// else {
//     console.log("z больше");
// }

// if (x < y && x < z) {
//     console.log("x меньше");
// }
// else if (y < x && y < z) {
//     console.log("y меньше");
// }
// else if ( x == y && x == z && z == y) {
//     console.log("error");
// }
// else {
//     console.log("z меньше");
// }

// let name1 = prompt("Введите имя: ");

// function name(String) {
//     if (String.length <= 3) {
//         name1 = prompt("Вы неккоректно ввели имя, введите еще раз: ");
//         return name(name1);
//     }
//     else {
//         alert("Отлично!\nваше имя: " + name1)
//     }
// }
// name(name1);

// let age = +prompt("Введите возраст: ");

// function age_checker(Number) {
//     if (Number > 14 && Number < 60) {
//         alert("Отлично!");
//     }
//     else {
//         age = +prompt("Вы должны быть старше 14 и младше 60, попробуйте еще раз: ");
//         age_checker(age);
//     }
// }
// age_checker(age);


// let student = prompt("Вы студент? (да или нет): ");

// function student_cheker(String) {
//     if (String == "да") {
//         alert("Супер!");
//     }
//     else {
//         student = prompt("Повторите еще раз (да или нет): ");
//         student_cheker(student);
//     }
// }
// student_cheker(student);


// let hello = document.querySelector('#hello');

// hello.addEventListener('click', sayHello);
// function sayHello() {
//     alert("Welcome");
// }

// let bye = document.querySelector('#bye');

// bye.addEventListener('click', sayBye);
// function sayBye() {
//     alert("Bye");
// }

// let hiAgain = document.querySelector('#hiAgain');
// hiAgain.addEventListener('click', sayhiAgain);
// function sayhiAgain() {
//     alert("hiAgain");
// }

let sendBut = document.querySelector('#send');
let postsBlock = document.querySelector('.posts');

sendBut.addEventListener('click', createPost);

function createPost(){
    let name = document.querySelector('#Введите имя').value;
    if (name ==0){
        alert("Перед тем как оставить комментарий введите свое имя")
    }

    let text = document.querySelector('#textPost').value;
    let newPost = document.createElement('spain');
    newPost.textContent = text;
    postsBlock.append(newPost);
}


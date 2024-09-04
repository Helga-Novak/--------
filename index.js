// console.log('Hello world!')

// const num2 = 13
// console.log(num2)

// let number = 4;
// let string = 'hello'
// let nu = null
// let array = ['1', 1]
// let und

// console.log(typeof number)
// console.log(typeof string)
// console.log(typeof nu)
// console.log(typeof array)
// console.log(typeof und)

// string = 8
// string2 = 8
// console.log(String(string) + String(string2))
// console.log(+ string + + string2)

// let num = 8
// if(num > 2){
//     console.log('больше двух')
// } else{
//     console.log('меньше двух')
// }

// alert("Your'e on site")
// confirm("Are you on site?")
// prompt("Enter a count")

// let where = confirm("Are you here?")
// console.log(where)

// let num = prompt("Введите число")
// if(num>0){
//     console.log("Вы ввели какое-то число")
// } else{
//     console.log("Вы ничего не ввели")
// }

// let num = 8
// num > 10 ? console.log("num") : console.log("ошибка")


// let button = document.querySelector('.block')
// button.innerHTML = 'Текст поменялся'
/* button.textContent = 'Текст' 
innerHTML = textContent
*/

// let button = document.querySelector('.block')
// console.log(button.title)

// let count = 0
// let input = document.querySelector('input')
// console.log(input.value)

// let count = 0
// let input = document.querySelector('input')
// function echo(){
//     count++
//     input.value = count
// }

// let count = 0
// let input = document.querySelector('input')
// input.addEventListener('click', ()=>{
//     count++
//     input.value = count
// })

/* let surname = prompt('Введите фамилию')
let name = prompt('Введите имя')
let lastname = prompt('Введите отчество')

console.log(surname)
console.log(name)
console.log(lastname)

let isTrue = confirm('Верно ли ваше ФИО?')
isTrue ? console.log(isTrue) : 'ошибка'
*/

/* console.log()
console.info('привет')
console.error('ошибка')
console.warn('предупреждение')
*/

/* 'use strict'
let num = 13
console.log(num)
*/

/* let num = 13
let str = 'hello'
let bull = true
let und = undefined
let array = ['1', 3, 6]
*/

// Number
// parseFloat
// parseInt
// String

// let num = console.log(Math.min(3, 2, 9))

// for
// while
// do while
// foreach

// for(let i = 0; i < 5; I++){
//     console.log(i)
// }

// let num = 0
// while(num < 5){
//     console.log(num)
//     num++
// }

// let num1 = 0 
// do{
//     console.log(num1)
//     num1++
// }
// while(num1 < 5)

// let arr = [1, 2, 3, 4, 5]
// arr.forEach(function(item){
//     console.log(item)
// })

// let arr = [1, 2, 3, 4, 5]
// for(let element of arr){
//     console.log(element)
// }

// let arr = {
//     1: 'a',
//     2: 'b',
//     3: 'c'
// }
// for(let key in arr){
//     console.log(key + ':' + arr[key])
// }


/* function echo(name){
    return 'Hello ' + name
}

console.log(echo('Albert'))
*/


/*const echo = function(name){
    console.log('Hello ' + name)
}

echo('Albert')
*/


/* const echo = (name) =>{
    console.log('Hello ' + name)
}
echo('Albert')
*/

/* let num = 8
function echo(){
    let num2 = 9
    console.log(num2)
}
num2 = 10
echo()
*/

// let div = document.createElement('div')
// div.innerHTML = 'hello'
// document.body.appendChild(div)

// function echo(elem){
//     console.log(elem.value)
// }

// let block = document.querySelector('#block')
// block.style.backgroundColor = 'gray'
// block.style.color = 'white'

// let block = document.querySelector('#block')
// block.style.cssText = 'background-color: #000; color: #fff'
// block.style.background = 'gray'

// let block = document.querySelector('#block')
// block.classList.add('block')
// block.classList.remove('block')
// block.classList.toggle('block')
// let result = block.classList.contains('block')
// console.log(result)





/*1
let num1 = prompt('Введите первое число')
let num2 = prompt('Введите второе число')
function numbers(num1, num2){
    return num1 * num2
}
alert(numbers(num1, num2))
*/

/*2
let name = prompt('Введите имя')
let surname = prompt('Введите фамилию')
let age = prompt('Введите возраст')
function data(name, surname, age){
    return 'Привет ' + name + ' ' + surname + ' с возрастом ' + age + ' лет'
}
alert(data(name, surname, age))
*/

/*3
let pol = prompt('Введите ваш пол: М/Ж')
function identity(pol){
    if(pol == 'М'){
        return 'Ваш пол мужской'
    }
    else if(pol == 'Ж'){
        return 'Ваш пол женский'
    }
    else return 'Ваш пол неопределен'
}
alert(identity(pol))
*/

/*4
let day = prompt('Введите число от 1 до 7')
function week(day) {
    switch (day) {
        case '1':
            alert('Сегодня понедельник')
            break
        case '2':
            alert('Сегодня вторник')
            break
        case '3':
            alert('Сегодня среда')
            break
        case '4':
            alert('Сегодня четверг')
            break
        case '5':
            alert('Сегодня пятница')
            break
        case '6':
            alert('Сегодня суббота')
            break
        case '7':
            alert('Сегодня воскресенье')
            break
        default:
            alert('Нет такого дня недели')
            break
    }
}
week(day)
*/

/*5
for (let i = 1; i < 101; i++) {
    if (i >= 1 && i <= 17) {
        document.write(i + " ребенок<br>");
    }
    else if (i > 17 && i < 30) {
        document.write(i + " молодой<br>");
    }
    else if (i >= 30 && i < 55) {
        document.write(i + " зрелый<br>");
    }
    else {
        document.write(i + " старый<br>");
    }
}
*/

/*6
function person(name, surname, age) {
    fio(name, surname, age);
    return name + " имеет возраст " + age + " и он зрелый";
}
alert(person(name, surname, age));
*/

/*8
let input = document.getElementById('emailInput')
let button = document.getElementById('emailButton')
button.addEventListener('click', () => {
    input.value = 'test@email.ru'
})
*/


/*9
document.getElementById('textButton').addEventListener('click', ()=>{
    let input = document.getElementById('textInput').value
    if(input.trim() == ''){
        alert('Вы ничего не ввели в поле')
    }
    else {
        alert('Вы ввели: ' + input);
    }
})
*/

/*10
let input = document.getElementById('input')
let blockButton = document.getElementById('blockButton')
let unblockButton = document.getElementById('unblockButton')

blockButton.addEventListener('click', ()=>{
    input.disabled = false
})
unblockButton.addEventListener('click', ()=>{
    input.disabled = true
})
*/

/*
let square = document.getElementById('square')
let toggleButton = document.getElementById('toggleButton')

toggleButton.addEventListener('click', ()=>{
    if(square.style.display === 'block'){
        square.style.display = 'none'
        toggleButton.textContent = 'Показать квадрат'
    }
    else{
        square.style.display = 'block'
        toggleButton.textContent = 'Скрыть квадрат'
    }
})
*/

//12
let square2 = document.getElementById('square2');

square2.addEventListener('mouseenter', () => {
    square2.style.backgroundColor = 'green'; // Цвет при наведении
});

square2.addEventListener('mouseleave', () => {
    square2.style.backgroundColor = 'red'; // Цвет при уводе курсора
});

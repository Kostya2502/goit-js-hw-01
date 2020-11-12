let credits = 23500;
let pricePerDroid = 3000;
let input;
let totalPrice = pricePerDroid * input;


input = prompt('Какое кол-во дроидов Вы хотите приобрести?')

if (input === null || input != Number(input) || Number(input) === 0) {
    console.log('Отменено пользователем либо введено некорректное число!');
} else {
    console.log(`Общая сумма заказа составляет ${totalPrice} кредитоа.`);
}

totalPrice = totalPrice < credits ? 
console.log(`Вы купили ${input} дроидов, на счету осталось ${credits - totalPrice} кредитов.`) 
: console.log('Недостаточно средств на счету!');


// Решение №_2

const orderPieces = 4;
const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces*pricePerDroid;
let balanceCredit = credits - totalPrice; 
let message;


if (orderPieces === null) {
       message = CANCELED_BY_USER;
       } 
else if (totalPrice <= 23580) {
       message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
      } 
else if (totalPrice > 23580) {
    message = ACCESS_DENIED;
    }
     
console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
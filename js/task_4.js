let credits = 23500;
let pricePerDroid = 3000;
let totalPrice;
let input;

input = prompt('Какое кол-во дроидов Вы хотите приобрести?')

if (input === null || input != Number(input) || Number(input) === 0) {
    console.log('Отменено пользователем либо введено некорректное число!');
} else {
    console.log(`Общая сумма заказа составляет ${totalPrice = pricePerDroid * input} кредитоа.`);
}

totalPrice = totalPrice < credits ? 
console.log(`Вы купили ${input} дроидов, на счету осталось ${credits - totalPrice} кредитов.`) 
: console.log('Недостаточно средств на счету!');
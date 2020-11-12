let cost;
let input = prompt('Введите, пожалуйста, страну доставки : ');

let lowerInput = input.toLowerCase();

switch (lowerInput) {
    case 'китай':
        cost = 100;
        break;
    
    case 'чили':
        cost = 250;
        break;
    
    case 'австралия':
        cost = 170;
        break;
    
    case 'индия':
        cost = 80;
        break;
    
    case 'ямайка':
        cost = 120;
        break;
    
    default:
        alert('В вашей стране доставка не доступна');
}

    if (cost > 0) {
console.log(`Доставка в ${input} будет стоить ${cost} кредитов`);}


// Решение №_2

const countryName = "Китай";
const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
  // Write code under this line
    case CHINA:
      price = 100;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    case INDIA:
      price = 80;
      break;  
    case JAMAICA:
      price = 120;
      break; 
  }
}
if (price > 0 && countryName !== null) { 
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
  } else if (price === 0 && countryName !== null) {
  message = NO_DELIVERY;
} else if (countryName === null) {
  message = CANCELED_BY_USER;
}

console.log(message);

/*если countryName равно "КитаЙ"
то значение message будет равно
'Доставка в Китай будет стоить 100 кредитов'
если countryName равно null
то значение message будет равно
'Отменено пользователем!'
если countryName равно "Чили"
то значение message будет равно
'В выбранную страну доставка недоступна.'*/
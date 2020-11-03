let cost;
let input = prompt('Введите, пожалуйста, страну доставки : ');

input = input.toLowerCase();

switch (input) {
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








// if (input === null) {
//     console.log('Отменено пользователем')
// } else {
//     input = input.toLowerCase();
// }
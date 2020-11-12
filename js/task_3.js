const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let input;

input = prompt('Пожалуйста, введите пароль администратора');

if (input === null) {
    message = 'Отменено пользователем!'
} else if (input === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!'
} else {message = 'Доступ запрещен, неверный пароль!'}

alert(message);


// Решение №_2

const userPassword = 'jqueryismyjam';
const ADMIN_PASSWORD = 'jqueryismyjam';
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;


if (userPassword === null) {
  message = CANCELED_BY_USER;
} else if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else if (userPassword !== ADMIN_PASSWORD) {
   message = ACCESS_DENIED;
}

console.log(message);

// //если userPassword равно 'jqueryismyjam' 
// // то значение message будет равно
// // 'Добро пожаловать!'

// //если userPassword равно  null 
// // то значение message будет равно  
// // 'Отменено пользователем!'

// //если userPassword равно '123' 
// // то значение message будет равно
// // 'Доступ запрещен, неверный пароль!'
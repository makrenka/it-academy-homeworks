var last_name = prompt('Введите вашу фамилию');
var first_name = prompt('Введите ваше имя');
var patronymic = prompt('Введите ваше отчество');
var age = prompt('Ваш возраст');
var b = Number(age);
var gender = confirm('Ваш пол - мужской?');

alert('ваше ФИО:' + last_name + first_name + patronymic);
alert('ваш возраст в годах:' + age);
alert('ваш возраст в днях:' + age * 365);
alert('через 5 лет вам будет:' + (b + 5));
alert('ваш пол:' + gender);

// if (age < 62) {
//     alert('вы на пенсии:' + 'нет');
// }
// else
//     alert('вы на пенсии:' + 'да');

var penny = (age<62)?'вы на пенсии:нет':'вы на пенсии:да';
alert(penny);

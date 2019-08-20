var money = +prompt('Ваш бюджет на месяц?');
var time = +prompt('Введите дату в формате YYYY-MM-DD');

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

var costs = prompt("Введите обязательную статью расходов в этом месяце");
appData.expenses[costs] = +prompt('Во сколько это обойдется?');

var total =  Math.round( (appData.budget - appData.expenses[costs]) / 30 ) ; 
alert("Бюджет на 1 день:" + total );


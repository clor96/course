var money = +prompt('Ваш бюджет на месяц?');
var time =   prompt('Введите дату в формате YYYY-MM-DD');

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for (var i = 0; i < 1; i++){
var a =  prompt("Введите обязательную статью расходов в этом месяце"),
    b = +prompt('Во сколько это обойдется?');
  if ( (typeof(a) === "string") && (a != "") && (b != "") && (a.length < 50 ) && (a !== null) && (b !== null) )
    appData.expenses[a] = b; 
        else
    i--;
}


appData.perDay =  Math.round( (appData.budget - appData.expenses[a]) / 30 ) ; 

alert("Бюджет на 1 день:" + appData.perDay );


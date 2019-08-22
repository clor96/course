var money,
  time,
  a,
  b;

function start() {
  money = +prompt('Ваш бюджет на месяц?');
  time = prompt('Введите дату в формате YYYY-MM-DD');

  while (money == "" || money == null || isNaN(money)) {
    money = +prompt('Ваш бюджет на месяц?');
  }
}

function chooseExpenses() {
  do {
    a = prompt("Введите обязательную статью расходов в этом месяце");
    b = +prompt('Во сколько это обойдется?');
  } while (isFinite(a) || (a == "") || (b == "") || (a.length > 50) || (a == null) && (b == null));
  appData.expenses[a] = b;
}

function detectDayBudget() {
  appData.perDay = Math.round((appData.budget - appData.expenses[a]) / 30);
  alert("Бюджет на 1 день:" + appData.perDay);
}

function chooseOptExpenses() {
  for (var i = 1; i <= 3; i++) {
    appData.optionalExpenses[i] = prompt('Ваши не обязательные расходы');
  }
}

function checkSavings(){
  if ( appData.savings == true ){
    var save = +prompt('сколько у вас сбережений, если они у вас есть?'),
        percent = +prompt('под какой процент?');
    
    appData.monthIncome = save/100/12*percent;
    alert("Столько приходит в месяц: " + appData.monthIncome);
  }
}

var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};

start();
chooseExpenses();
detectDayBudget();
chooseOptExpenses();
checkSavings();

console.log(appData);
let momey, time, opEx;

function start(){
    money = +prompt ("Ваш бюджет на месяц?");
    time = prompt ("Введите дату в формате YYYY-MM-DD");
     
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?");
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце");
            let b = prompt("Во сколько обойдется?");
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
                && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            }
            else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed(1);
        alert("Ваш дневной бюджет = " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay <100){
            alert("Минималный уровень достатка");
        } else if(appData.moneyPerDay >100 && appData.moneyPerDay <2000){
            alert("Средний уровень достатка");
        } else if (appData.moneyPerDay >2000){
            alert("Высокий уровень достатка"); 
        } else{
            alert("Произошла ошибка");
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++){
            opEx = +prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = opEx;
            console.log(appData.optionalExpenses);
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
                appData.monthIncome = save/100/12*percent;
                alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        appData.income = items.split(", ");
        if(items == "" || items == null) {
            prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        } else{
            alert("Произошла ошибка");
        }
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.forEach(function(item, i, income) {
            i++;
            alert("Способы доп. заработка: " + i  + ": " + item);
        });
    }
};
function Bulkhead () {
    for (let key in appData) {
        console.log("Наша программа включает в себя данные:" + key + "и " + appData[key]);
    }
}
Bulkhead ();
"use strict"
/*const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
   document.documentElement.classList.toggle('menu-open');
});

*/

//Домашня робота
//Задача №1
//Що потрапить в консоль?
/*let someVar = 0;
++someVar;
if (someVar) {
	console.log(someVar);
}
*/
//відповідь
//В консоль потрапить 1 тому,що змінній someVar додали інкримент і булеве його значення буде true


//Задача №2
//За допомогою циклу FOR виведіть в консоль 10 рядків:
//Пункт №1
//Пункт №2
//і т.д.
for(let i = 0; i < 10; ++i){
   console.log(`Пункт №${i + 1}`);
}
//відповідь
// за допомогую циклу виконала 10 пунктів, 
//що і виводиться в консольт за допомогою синтаксису виразу (`Пункт №${i + 1}`)

//==============================================================================================

/*Задача №3
Що потрапить в консоль ?*/
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log(`000`);
}
//відповідь
//1.спочатку перевести оператор множення і ділення,потім оператор порівняння 
//if (40 <= 10 || 15 < 5 && 10 <= "10" || 20 === "20") 
//if (false || false && true || false) 
//2. наступною дією буде виконання оператора &&
//if (false || false || false) 
//3. і так після оператора порівняння в консоль нічого не потрапить і буде false

//=======================================================================================
/*Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку 
*/

function divisionResult(a, b) {
	const result = a / b;
	//Спочатку визначити тип та чи можливо обчислити, перевірка з суворим === чи можна поділити на 0
	if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b) || b === 0) {
		 console.log ("Обчислення, які не можливо виконати");
	} else {
		console.log (`Результат ділення: ${result}`) ;
	}	
}

// Виклики функції з різними значеннями
divisionResult();
divisionResult(10, 2);
divisionResult(5, 0);
divisionResult("abc", 2);
divisionResult(8, "show");
divisionResult(15);
divisionResult(25, 5);
divisionResult(64, 8);

//======================================================================
/*Задача №5
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
*/
let someArray = [10, "Kate", "hallo", "array", true];
someArray.forEach(value =>{
	if (value === 10){
		console.log(value);
	}
});
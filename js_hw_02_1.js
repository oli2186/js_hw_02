'number' + 23 + 32
'number2332'
// это конкатинация соответственно всё выражение у нас станет стринговым

41 + 1 + 'number'
'411number'
// это конкатинация соответственно всё выражение у нас станет стринговым

null + 1
1
// вернёт нам значение 1 потому что ноль+1 будет числовое значение, а именно 1

'five' + + 'two'
fiveNaN
// операнд + пытается преобразовать вторую строку в число но это невозможно, соответственно он возвращает значение NaN, после этого происходит конкатинация и мы получаем fiveNaN

2 && 7
7
// вернул значение 7, так как оба значения было true, соответственно вернулось последнее значение

+'40' + +'2';
42
// операторы + преобразуют оба стринга в числа, а третий оператор + производит сложение, в результате мы получаем число 42

'10' - 5 === 6;
false
// здесь стринговое значение минусуется числом, что не соответствует 6, по этому логическое false

true + false
1
// здесь логические один + ноль, что соответствует 1

'4px' - 3
NaN
// стринговое значение не является числом

'2' + 3 **2;
29
// первое происходит выполнение возведения в степень 3 во вторую, в результате мы получили 9, дальше произошла конкатинация, в результате мы получили стринговое значение 29

12 / '6'
2
// 6 преобразуется в число, соответственно 12 деленное на 6 выходит 2

23+32+'number'
65number
// сложение двух операндов даёт нам 65, а конкатинация даёт 65number

'10' + (5 === 6);
// для начала мы производим операцию в скобках, 5 строго равно 6, что является false, далее происходит конкатинация и мы получаем 10false

'number' + 15 + 3;
number153
// здесь у нас происходит конкатинация

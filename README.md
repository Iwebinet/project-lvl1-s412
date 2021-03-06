# Brain Games

[![Maintainability](https://api.codeclimate.com/v1/badges/ac85becec5d2442b142c/maintainability)](https://codeclimate.com/github/Iwebinet/project-lvl1-s412/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ac85becec5d2442b142c/test_coverage)](https://codeclimate.com/github/Iwebinet/project-lvl1-s412/test_coverage)
[![Build Status](https://travis-ci.org/Iwebinet/project-lvl1-s412.svg?branch=master)](https://travis-ci.org/Iwebinet/project-lvl1-s412)

## Описание
Набор консольных игр-викторин, где игроку предлагается ответить на три вопроса. Ответив на все правильно, игрок побеждает. Ошибка в ответе на любой вопрос завершает игру. 

#### Пример игры brain-prime

[игра brain-prime](https://asciinema.org/a/dWRxok5PQMIxNqQpmkz3hBcZv)

## Установка
```
npm install project-lvl1-vi -g
```
## Список игр:

### brain-even
запуск игры:
```
brain-even
```
Игроку нужно ответить "yes" если число чётное и "no" если нет.
```
Question: 15
Your answer: no
Correct!
```


### brain-calc
запуск игры:
```
brain-calc
```
Игрок должен вычислить результат выражения?
```
Question: 4 + 10
Your answer: 14
Correct!
```
### brain-gcd
запуск игры:
```
brain-gcd
```
Игроку предлагается найти наибольший общий делитель двух чисел.
```
Question: 25 50
Your answer: 25
Correct!
```

### brain-balance
запуск игры:
```
brain-balance
```
Игроку нужно "сбалансировать" число. При балансировке числа "большие" цифры отдают излишки "меньшим" так, чтобы в итоге число стало сбалансированным. В случае с числом 123 цифра 3 должна отдать единицу цифре 1, и в итоге получим число 222.
Порядок цифр в сбалансированном числе – по возрастанию. Например, вместо 322 и 232 нужно указывать 223.
```
Question: 215
Your answer: 233
Correct!
```
### brain-progression
запуск игры:
```
brain-progression
```
Игроку предлагается вычислить пропущенное число прогрессии
```
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
```
### brain-prime
запуск игры:
```
brain-prime
```
Игрок должен определить, является ли число простым.
```
Question: 7
Your answer: yes
Correct!

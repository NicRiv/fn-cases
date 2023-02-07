# fn-cases

A simple way to test your JavaScript functions.

## Installation
```
npm i fn-cases
```

## Easy to use!
Test your expected output

```javascript
const fnCases = require('fn-cases')

const passed = (parameter) => parameter * 2

fnCases([
    [passed(2), 4]
])
```
Expected output

![Expected output: passed](/screenshots/passed.png)

```javascript
const fail = (parameter) => parameter + 1

fnCases([
    [fail(1), 3],
    [fail(2), 3],
    [fail(4), 6]
])
```
Expected output

![expected output: fail](/screenshots/fail.png)

```javascript
const even = (n) => n % 2 === 0

const boolean = fnCases([
    [even(2), true],
    [even(6), true]
], true)

if (boolean) return console.log('Test passed, continue the program...')
```
Expected output

![expected output: boolean](/screenshots/boolean.png)
// 2520 - самое маленькое число, которое делится без остатка на все числа 
// от 1 до 10.
// Какое самое маленькое число делится нацело на все числа от 1 до 20?

const leastMultiple = (start, end) => {
    for (let i = 1;;i++) {
        let res = false
        for (let x = start; x <= end; x++) {
            if (i%x === 0) {
                res = true;
            } else {
                res = false;
                break;
            }
        }
        if (res === true) {
            return i
        }
    }
}
console.log(leastMultiple(1, 20))
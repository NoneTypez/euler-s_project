const palindrom = (sCount, fCount) => {
    let nums = [];
    for (let x = 1; String(x).length <= fCount; x++) {
        for (let y = 1; String(y).length <= sCount; y++) {
            let num = x*y;
            let strNum = String(num)
            let leng = String(num).length;
            if (leng%2 ===0) {
                let fPart = strNum.slice(0, leng/2);
                let sPart = strNum.slice(leng / 2).split("").reverse().join("");
                if (fPart === sPart) {
                    nums.push(num)
                }
            }
        }
    }
    return Math.max(...nums)
}

console.log(palindrom(3, 3))
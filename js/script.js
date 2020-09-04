function age() {
    let myAge = 598057200000;
    let time = Date.now();
    let resultAge = time - myAge;
    resultAge = resultAge / 86400;
    resultAge = resultAge / 365000;
    resultAge = Math.floor(resultAge);
    document.getElementById('age').innerHTML = resultAge;
}

age();
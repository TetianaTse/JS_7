function getLength(text) {
    let num;
    do {
        num = parseInt(prompt(text));
    } while (isNaN(num) || num <= 0);
    return num; 
}

function mainArr() {
    let mainArr = [];
    let lengthOfMainArr = getLength('Введите длину основного массива:');

    for (let i = 0; i < lengthOfMainArr; i++) {
        let lengthOfInnerArr = getLength('Введите длину ' + (i + 1) + ' внутреннего массива:');
        mainArr.push([]);

        for (let j = 0; j < lengthOfInnerArr; j++) {
            let value = parseInt(prompt('Введите значение ' + (j + 1) + ':'));
            mainArr[i].push(value);
        }
    }
    console.log(mainArr);
}
mainArr();

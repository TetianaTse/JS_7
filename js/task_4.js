function deleteSymbol(yourString, symbols) {
    yourString = Array.from(prompt('Введите любое слово или предложение:'));
    symbols = [];

    let amount = parseInt(prompt('Сколько букв вы хотите удалить?'));
    let index = 0;
    
    for (let i = 0; i < amount; i++) {
        let letter = prompt('Введите ' + (i + 1) + ' букву:');
        symbols.push(letter);
        index = yourString.indexOf(symbols[i]);
        while (index !== -1) {
            yourString.splice(index,1);
            index = yourString.indexOf(symbols[i], index);
          }
    }
    console.log(symbols);
    console.log(yourString.join(''));
}
deleteSymbol();
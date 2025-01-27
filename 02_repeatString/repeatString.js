const repeatString = function(text, iterator) {
    let newString = '';

    if(iterator < 0) {
        return 'ERROR';
    };

    for(let i = 1; i <= iterator; i++) {
        newString += text;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;

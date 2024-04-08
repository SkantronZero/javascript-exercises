const palindromes = function (inString) {
    inString = inString.replace(/[^A-Za-z0-9-]/g,'');
    inString = inString.toLowerCase();
    console.log(inString);
    let outString = inString.split('').reverse().join('');
    console.log(outString);
    if (inString == outString){
        return true;
    }
    else {
        return false;
    }
};


palindromes('ZZZZ car, a man, a maracaz.');
// Do not edit below this line
module.exports = palindromes;

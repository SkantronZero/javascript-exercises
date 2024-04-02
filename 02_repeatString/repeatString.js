const repeatString = function(string, x) {
    let output = '';
    try{
        if(x<0) throw "ERROR";
        for(i=0; i<x; i++){
        output += string;
        }
    }
    catch(err){
        return 'ERROR';
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;

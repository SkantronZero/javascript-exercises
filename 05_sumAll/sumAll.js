

function sumUp(low, high){
    let sum = 0;
    for(let i = high;i >= low;i--){
        sum +=i
        //console.log(`i = ${i}, and sum = ${sum}`);
    }
    return sum;

}

const sumAll = function() {
    
    let args = Array.from(arguments);
    if(args[0] > args[1]){
        args.reverse();
    }

    if((typeof(args[0]) !== 'number') || (typeof(args[1]) !== 'number')){
        ///console.log(typeof(args[0]));
        return "ERROR";
    }
    
    let lownum = parseInt(args.splice(0,1));
    let highnum = parseInt(args);

    if(lownum < 0 || highnum < 0){
        return "ERROR";
    }
    return sumUp(lownum, highnum);

};

// sumAll(1, 'dog');

// Do not edit below this line
module.exports = sumAll;

const fibonacci = function(x) {

    if(typeof(x) == 'string'){
        x = parseInt(x);
    }
    

    if(x < 0){
        return 'OOPS';
    }

    if(x == 1 || x == 0){
        return x;
    }
    else {
        let fibArr = [1,1,2];
        for(i = 2; i < x; i++){
            // console.log((fibArr[i]+fibArr[i-1]));
            fibArr.push((fibArr[i]+fibArr[i-1]));

        }
        console.log(fibArr[x-1]);
        return (fibArr[x-1]);
    }

};

fibonacci(6);

// Do not edit below this line
module.exports = fibonacci;

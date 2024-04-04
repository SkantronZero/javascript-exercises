const leapYears = function() {
    let args = Array.from(arguments);
    let entry = parseInt(args[0]);

    if(entry%4==0){
        if(entry%100==0){

            if(entry%400==0){
                return true;
            }
            else{
                return false;
            }
        }
        else if(entry%100!=0){
            return true;
        }
    }
    else{
        return false;
    }

    // return entry % 4 === 0 && (entry % 100 !== 0 || entry % 400 === 0);

};

// Do not edit below this line
module.exports = leapYears;

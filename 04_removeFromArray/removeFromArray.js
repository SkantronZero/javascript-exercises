const removeFromArray = function() {
    console.log(arguments);
    const args = Array.from(arguments);
    console.log(args);
    let inArr = args.splice(0,1).flat();
    console.log(inArr);
    console.log(args);
    for(x=0;x<args.length;x++){
        let removeArr = args[x];
        let i = 0;
        while (i < inArr.length) {
            if (inArr[i] === removeArr) {
            inArr.splice(i, 1);
            } else {
            ++i;
            }
    }
}
  console.log(inArr);
  return inArr;
};

// Do not edit below this line
module.exports = removeFromArray;

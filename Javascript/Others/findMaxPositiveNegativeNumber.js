function findMaxPositiveNegativeNumber(A) {
    let maximumValue = findMaxFromGivenArray(A);
    
    if(maximumValue > 0){
        while(A.length != 0){
            if(A.indexOf(-maximumValue) !== -1){
                return maximumValue
            } else {
                A = A.filter(x => x != maximumValue);
                maximumValue = findMaxFromGivenArray(A)
            }   
        }
    }
    return 0;
}

function findMaxFromGivenArray(A){
    return Math.max(...A);
}

console.log(findMaxPositiveNegativeNumber([1,-1,10,9,2]))//returns 1

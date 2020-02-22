function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    for(let i = 1; i <= N; i++){
        if(i !== N)
            process.stdout.write('L\n')
        else{
            for(let j = 1; j <=N; j++)
            {
                process.stdout.write('L')   
            }
        }
    }
}

console.log(solution(4));
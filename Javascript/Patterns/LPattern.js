function LPattern(N) {
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

console.log(LPattern(4));

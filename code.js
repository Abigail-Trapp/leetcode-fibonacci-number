var fib = function(n) {
    let f1 = 0
    let f2 = 1
        if(n<2){
            return n
        }
        for(let i=2;i<=n;i++){
            f2 = f1+f2
            f1 = f2-f1
        }
        return f2
    };
    // console.log(fib(0))
    // console.log(fib(1))
    // console.log(fib(2))
    // console.log(fib(3))
    // console.log(fib(4))
    // console.log(fib(6))
    // console.log(fib(7))
    // console.log(fib(8))
    // console.log(fib(9))
    document.write(`${fib(0)},
                    ${fib(1)},
                    ${fib(2)},
                    ${fib(3)},
                    ${fib(4)},
                    ${fib(5)},
                    ${fib(6)},
                    ${fib(7)},
                    ${fib(8)},
                    ${fib(9)}`)
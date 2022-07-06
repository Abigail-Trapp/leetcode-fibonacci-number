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
    console.log(fib(0))
    console.log(fib(1))
    console.log(fib(2))
    console.log(fib(3))
    console.log(fib(4))
    console.log(fib(6))
    console.log(fib(7))
    console.log(fib(8))
    console.log(fib(9))
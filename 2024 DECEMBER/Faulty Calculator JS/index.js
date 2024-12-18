function Faultycalculator(A, B, O) {
    if (Math.random() > 0.1) {
        if (O == "sum") {
            console.log(A - B)
        }
        else if (O == "sub") {
            console.log(A / B)
        }
        else if (O == "mul") {
            console.log(A + B)
        }
        else if (O == "div") {
            console.log(A ** B)
        }
        else {
            if (O == "sum") {
                console.log(A + B)
            }
            else if (O == "sub") {
                console.log(A - B)
            }
            else if (O == "mul") {
                console.log(A * B)
            }
            else if (O == "div") {
                console.log(A / B)

            }
        }
    }
}
Faultycalculator(5,5,"mul") 
Faultycalculator(2,2,"sum")
Faultycalculator(3,4,"mul")
Faultycalculator(3,12,"div")

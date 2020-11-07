// declare a function that takes three numbers as arguments and returns the sum of the squares of the two larger numbers

twoLargeSquared = (x, y, z) => { 
    
    larger = (a, b) => a > b ? a : b;
    square = (c) => c * c;
    twoLarge = (d, e, f) => {
        if (x > y && x > z) {
            (x * x) + (y > z ? y * y : z * z)
        } else if (x > y && z > x) {
            
        }
    }
    return (
        x > y ? 
        square(larger(x, z)) + square(larger(y, z)) :
        square(larger(y, z)) + square(larger(x, z))
    );

}
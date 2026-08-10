
// i=0 
// *
// **
// ***
// i= 4 j = 0,1,2,3,
// i= 5 j = 0,1,2,3,4
// i= 6 j = 0,1,2,3,4,5

class StarPring{
    star(n){
        let star = "";
        for (let i = 0; i < n; i++) {
           for (let j = 0; j < i; j++) {
                star = star + "*";
           }
         console.log(star);
        }
    }
}

const result = new StarPring();
result.star(7);

// find odd and even number 15
// find the average value from the given array
<<<<<<< HEAD
// it is more confusing to find the average value from the given array.

// again data is gone
=======

// it is conflict with the previous code snippet, so I will provide a new implementation for finding odd and even numbers and calculating the average value from a given array.
>>>>>>> fbfd9561210a9ad52878f432bc062fb0ee3452d2

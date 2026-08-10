
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

// i want to find the average value from the given array
// let arr = [1,2,3,4,5,6,7,8,9,10];

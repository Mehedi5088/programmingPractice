// array = [10,55,2,4,19,68,0,14,24]
// Find max value from the given Array

// dhori max = 10
// max value ki array er first value thke boro : max > arra[0]
// max will not change ,
// else : max vlaue will be the array value.
// max value ki array er second value thke boro naki soto max > arra[1]
// max value ki array er second value thke boro naki soto max > arra[2]
// loop increment i++

class FindMaxValue{
    maxValue(){
        let price = [10,55,2,4,19,68,0,14,24];
        let max = "0";
        for (let i = 0; i < price.length; i++) {
           if (max < price[i]) {
            max = price[i];
           }
        }
        return max;

    }
}

const response = new FindMaxValue();
console.log(response.maxValue());


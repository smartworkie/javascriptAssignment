//Task 1
const calculateArea =(length, width)=>{
    return area = length * width;
}

//Task 2
const reverseString = (string)=> {
    return string.split('').reverse().join('');
}

//Task 3
const isEven =(number) =>{
   if (number%2===0){
    return true;
}
else{
    return false;
}S
}

//Test Case 
const answer = console.log(calculateArea(4,5));
console.log(calculateArea(10.2,7));
console.log(calculateArea(0.23, 2.97));
console.log(reverseString('silver'))
console.log(reverseString('bundesliga'))
const reverseStringAns = console.log(reverseString('Pity'));
console.log(isEven(21))
console.log(isEven(26))
console.log(isEven(35))
console.log(isEven(1000))
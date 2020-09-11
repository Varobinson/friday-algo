// 1) Write a JavaScript function to get the greatest common divisor(gcd) of two integers.
// Sample Input: 12, 144; 
// Sample Output: 12    
// Sample Input: 95, 35; 
// Sample Output: 5  


// function commonDiv(int1, int2){
//     const int1Div = [];
//     const int2Div = [];

//     for(let i = 0; i < int1; i++)
//         if(int1 % i === 0){
//             int1Div.push(i)
//         }
//     for(let i = 0; i < int2; i++)
//         if(int2 % i === 0){
//             int2Div.push(i)
//         }
//     console.log(int1Div)
//     console.log(int2Div)
//         let biggest = 0;
//     for (let i = 0; i < int1Div.length;i++){
//         for(let j = 0; j < int2Div.length;j++){
//             if (int1Div[i] === int2Div[j]){
//                 if (int1Div[i] > biggest){
//                     biggest = int1Div[i]
//                 }
//             }
//         }
//     } console.log(biggest)
        
// }
// commonDiv(10, 16)


// 2) Write a Program for grading students    A = 90 - 100, B = 80 - 89, C = 70 - 79, D = 60 - 69, F = 0 - 59    Bonus points for returning emoji's representing grades!
//     Sample Input:    85    
//     Sample Output:    
//     Grade is B 朗    
//     Sample Input:    62    
//     Sample Output:    
//     Grade is D 

// function grades(score){
//     if(score <= 100 && score >=90){
//         console.log('A')
//     }
//     if(score <= 89 && score >=80){
//         console.log('B')
//     }
//     if(score <= 79 && score >=70){
//         console.log('C')
//     }
//     if(score <= 69 && score >=60){
//         console.log('D')
//     }
//     if(score <= 59){
//         console.log('F')
//     }
// }

// grades(78)


// 3) Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
// Sample Input: 2016   
// Sample Output: true   
// Sample Input: 1754   
// Sample Output: false    
//  ----------------------------------


// function findBday(year){
//     if (year % 4 === 0 && year > 1752){
//         console.log('It\'s a leap year')
//     } else{
//         console.log('It\'s not a leap year')
//     }
// }

// findBday(1956)




// 5) Given an integer, n, perform the following conditional actions:
//  If n is odd, print Weird   
//  If n is even and in the inclusive range of 2 to 5, print Not Weird   
//  If n  is even and in the inclusive range of 6 to 20, print Weird   
//  If n is even and greater than 20, print Not Weird   print whether or not n is weird.
//  Sample Input: n = 3; 
//  Sample Output: "WEIRD"   
//  Sample Input: n = 22; 
//  Sample Output: "NOT WEIRD"   
//  ----------------------------------

// function fizz(n){
//     if(n % 2 === 0){
//         buzz(n)
//     }
//     else{
//         console.log('Weird')
//     }

// function buzz(w){
//     if(w <= 5 && w >= 2 || w >20){
//         console.log('Not Weird')

//     }else{
//         console.log('Weird')
//     }
// }}
// fizz(4)

// 6) Check to see if a word is a palindrome
// (if you reverse a word and it is the same word   
//     Sample Input: mom   
//     Sample Output: true   
//     Sample Input: racecar   
//     Sample Output: true   
//      ----------------------------------

// function pal(str){
//     let rstring = str.split('').reverse().join('')
//     if(rstring === str){
//         console.log(true)
//     }else{
//         console.log(false)
//     }

// }
// pal('spot')

// 7) We are provided a positive integer num.
// Can you write a method to repeatedly add all 
// of its digits until the result     
// has only one digit ? 
// Sample Input: 49   
// Sample Output: 4   
// Sample Input: 438   
// Sample Output: 6     
// ----------------------------------

function add(num){
    let strNum = num.toString()
    let sString =(strNum.split(''))
    for(let i = 0; i < sString.length; i++){
        console.log(parseInt(sString[0]) + parseInt(sString[i]))
    }

}
add(56)
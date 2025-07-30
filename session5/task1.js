// task1

 let a = 5;
 let b = 10;
[a,b]=[b,a]
console.log("a: "+a+" ,b: "+b)

// task2
 let numbers = [4, 9, 2, 7, 5];
 let maxn=Math.max(numbers)
console.log("the maximam num : "+maxn)

// task3
let str = "JavaScript is awesome";
let count=0
for(i in str){
    if(i in ['a','o','i','u','e']){
        count++
    }
}
console.log("count of vowel : "+count)

// task4
let num=17
let isprime=true
for(let i=2;i<num;i++){
if(num%i==0){
    isprime=false;break
}}
console.log(num+" is prime: "+isprime)

// task5
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"



// task6
let nums = [1, 2, 3, 4, 5, 6];
let sum=0
for(i in num){
    if (i%2==0){
        sum=sum+i
    }
}
console.log("the sum ="+sum)

// task7
 let arr = [1, 2, 3, 2, 4, 1, 5];
let newArr=[new Set(arr)]
console.log(newArr)

// task9
function factorial(n) {
    let frac=1
for(let i=1;i<=n;i++){
    frac=frac*i

}
return frac
}

// task10
 let car = { brand: "Toyota", model: "Corolla", year: 2020, color: "blue" };
for(let i in car){
    console.log(i+":"+car[i])
}
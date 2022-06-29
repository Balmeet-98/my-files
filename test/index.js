/*console.log("honey");
//creating array
const cars=['audi','bmw','xuv','thar'];
console.log(cars);
//find the length
console.log(cars.length);
//accessing by index
console.log(cars[0]);
//modify by index
cars[0]='swift';
console.log(cars[0]);
//multi dimension
const random = ['tree', 795, [0, 1, 2]];
console.log(random[2][1]);
//finding items in an array
console.log(cars.indexOf('thar'));
console.log(cars.indexOf('maruti'));
//adding items
cars.push('alto');
cars.push('tata','kia');
console.log(cars);
cars.unshift('baleno');
console.log(cars);
//removing items
cars.pop();
console.log(cars);
cars.shift();
console.log(cars);
const index=cars.indexOf('xuv');
if(index!==-1){
    cars.splice(index,2);
}
console.log(cars);
//accessing every item
for(const car of cars){
    console.log(car);
}
//map()

function double(num){
    return num *2;
}
const num=[5,7,1,6,2];
const doubled=num.map(double);
console.log(doubled);
//filter()
function check(num){
    return num>=6;
}
const filtered=num.filter(check);
console.log(filtered);
//reduce
function sumOfArray(sum,num){
    return sum+num;
}
const reduced=num.reduce(sumOfArray);
console.log(reduced);
//converting btwn string and arrays
const data='manchester,london,leeds,liverpool,birmingham';
const cities=data.split(',');
console.log(cities);
console.log(cars.toString());
console.log(cars.join('.'));
//sorting
const a=[5,7,55,74,1,99];
console.log(a.sort(function(a,b){return a-b}));
console.log(a.sort(function(a,b){return b-a}));
//slice method
console.log(cars.slice(0,2));
const str='banana,mango,apple,orange';
//length

console.log(str.length);
//slice
console.log(str.slice(7,12));
//substring
console.log(str.substring(7,12));
//replace
console.log(str.replace('mango','kiwi'));
//upper amd lowercase
console.log(str.toUpperCase());
console.log(str.toLowerCase());
//concat
console.log(str.concat(",","peach"));
//char At
console.log(str.charAt(7));
//ternary operator
function test(c){
    return c>15 ?"c is greater than 15":"c is less than 15";
}
console.log(test(14));
let a=100;
let b=(a==100)?(a>50)?"a is greater than 50":"a is less than 50":"cond not true";
console.log(b);
//if else
if(a==100){
    if(a>50){
     console.log("a is greater than 50");
    }else{
        console.log("a is less than 50");
    }
}
else{
    console.log("cond. not true");
}*/
/*
//for Each
function myfunc(e){
    console.log(e);
}
let b=[8,7,5,1,4];
console.log(b.forEach(myfunc));
let d=new Date();
console.log(d);
let c =Date.now();
console.log(c);
//error handling
try{
    aalert("hello");
}
catch(e){
    console.log(e.message);
}
//throw
let a=50;
try{
       throw "a is less than 60";
}
catch(e){
    console.log("error thrown");
}
//finally
try{
    throw "a is less than 60";
}
catch(e){
    console.log("error thrown");
}
finally{
    console.log("finally block");
}
//events
function hi(){
    alert("honey");
}
//event listener
let btn=document.getElementById("btn");
btn.addEventListener("click",clck);
function clck(){
    console.log("clicked");
}
//functions
function myFunc(num1,num2,num3){
    console.log(num1+num2+num3);
}
myFunc(10,20,30);*/
//event propogation
// document.getElementById("grand").addEventListener("click",function(){alert("you clicked on grand")},true);
// document.getElementById("parent").addEventListener("click",function(){alert("you clicked on parent")},false);
// document.getElementById("child").addEventListener("click",function(){alert("you clicked on child")},true);
// //data types
// let a=null;
// let b=undefined;
// console.log(a===b);
// console.log(a==b);
// console.log(typeof(a));
// console.log(typeof(b));
// console.log("honey"==="Honey");
// console.log("honey"=="Honey");
// console.log(5+"honey");
// console.log("honey"+5);
// console.log("honey"+"singh");
// console.log("5"+"5");
// console.log("5"+5);
// console.log(5+"5");
// console.log(5+5);
// console.log(5-"honey");
// console.log("honey"-5);
// console.log("honey"-"singh");
// console.log("5"-"5");
// console.log("5"-5);
// console.log(5-5);
// console.log(typeof(NaN));
//func scope
// var num1=20;
// var num2=10;
// var Name="Honey";
// function add(){
//     return num1 + num2;
// }
// console.log(add());
// function info(){
//     var num3=50;
//     var num4=30;
//     function show(){
//         return num1+num2+num3+num4+" and name:"+Name;
//     }
//     return show();
// }
// console.log(info());
//arrow func
// let myFunc=a=>a+5;
// console.log(myFunc(5));
// let myFunc1=(a,b)=>{
//     let c=20;
//     return a+b+c;
// }
// console.log(myFunc1(10,20));
// let myFunc2=(a,b,...arr)=>{
//     console.log(a);
//     console.log(b);
//     console.log(arr);
//     console.log(arr.length);
//     return a+b+arr[2]
// }
// console.log(myFunc2(1,2,3,4,5,6,7,8,9));
// let numberStore = [0, 1, 2];
// let newNumber = 12;
// numberStore = [...numberStore, newNumber];
// console.log(numberStore);
// let myFunc=(...arr)=>{
//     console.log(arr.length);
//     console.log(arr);
//     console.log(...arr)
//     return arr[1]+arr[2]
// }
// let num=[2,5,6,7,4,1,5,2,9];
// let result=myFunc(...num);
// console.log(result);
// //default parameter
// let myFunc1=(a=6,b=6)=>{
//     return a+b;
// }
// console.log(myFunc1());
//destructing
// const contact={
//     name:"Honey",
//     fName:"Balmeet Singh",
//     age:23
// }
// const {name,fName,age}=contact;
// console.log(fName);
// console.log(age);
//diff arrow and normal
// let user = {
// 	a: "GFG",
// 	gfg1:() => {
// 		console.log("hello " + this.a); // no 'this' binding here
// 	},
// 	gfg2:function(){	
// 		console.log("Welcome to " + this.a); // 'this' binding works here
// 	}
// };
// user.gfg1();
// user.gfg2();
// let x = function(...b){
// 	console.log(arguments);
// };
// x (1,2,3);

// const arr1 =[1,5,2,7,3];
// const arr2 = [...arr1];
// arr2.push(10);
// console.log(arr1,arr2);
// var promise = new Promise(function(resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "geeksforgeeks";
//     if(x === y) {
//         resolve();
//     } else {
//         reject();
//     }
//     });
    
//     promise.
//         then(function () {
//             console.log('Success, You are a GEEK');
//         }).
//         catch(function () {
//             console.log('Some error has occurred');
//         });
// var promise = new Promise(function(resolve, reject) {
//     reject('hello')
// })

// promise
// 	.then(function(s) {
// 		console.log(s);
// 	}, function(e) {
// 		console.log(e);
// 	})
// a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(()=> {
//     reject('Promise resolved')}, 4000); 
// });
// async function promise(){
//     return setTimeout(()=> {
//         console.log('Promise resolved')}
//         , 4000); 
// }
// // async function
// async function asyncFunc() {

//     // wait until the promise resolves 
//     let result = await promise(); 
//     console.log("Honey");
//     console.log(result);
//     console.log('hello');
// }

// // calling the async function
// console.log("before func call");
// asyncFunc();
// console.log("after func call");

// let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/1");
//       fetchRes
//       .then(res =>res.json())
//       .then(d => {console.log(d)})


//
var a=10;
{
    var b=20;
    console.log(a);
}
console.log(b);
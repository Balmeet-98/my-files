//Q-3
// let arr=[4,8,7,13,12];
// let reduced=arr.reduce((sum,num)=>{
//     return sum+num;
// })
// console.log(reduced);

//Q-2
// let arr=[4,10,5,7,6,18];
// let res=arr.fill(45,1,4);
// console.log(res);

//Q-4
// let arr=[1,2,2,3,4,5,6,6,7,8,8,8];
// let res=arr.filter(()=>{

// })
// console.log(res);

//Q-19
// let str="one,two,three,four,five";
// let res=str.split(",");
// console.log(res);

//Q-36
// let arr=[1,3,5,7,9,10];
// let newArr=arr.reverse();
// console.log(newArr);
// let doubled=newArr.map((a)=>{
//     return a*2
// })
// console.log(doubled);

//Q-11
// let arr=[1,2,3,4,5,6,7,8,9];
// arr.splice(-3);
// console.log(arr);

//Q-7
// let arr=[23,0,"gfg",true,false,NaN,12,"hi",undefined,[],""];
// let filtered=arr.filter((a)=>{
//    return a;
// })
// console.log(filtered);

//Q28
// var a=3;
// var b=a++;
// var c=++a;
// console.log(a,b,c);

//Q23
// const arr=[
//     [
//         [
//             {
//                 name:"sid",
//                 age:23,
//                 info:[{
//                     course:"b. tech",
//                     place:"solan",
//                     companyDetails:[{
//                         name:"expandimo",
//                         place:"mohali"
//                     }]
//                 }]
//             }
//         ]
//     ]
// ]
// for(let a of arr){
//     for(let b of a){
//         for(let c of b){
//             console.log(c.info[0].companyDetails[0].place);
//             }
//         }
//     }

//Q-14
// const num=[1,2,3,4,5,6];
// num.splice(0);
// console.log(num);

//Q-25
// let str="full stack tutorial";
// let arr=str.split("");
// let res=arr.reverse().join("");
// console.log(res);

//Q-29
// function func1(){
//     return {
//         name:"full stack tutorial"
//     }
// }
// console.log(func1());
// function func2(){
//     return {
//         name:"full stack tutorial"
//     }
// }
// console.log(func2());

//Q-32
// let arr=[1,5,8,[9,10,24,20,[39,48],89],105,99];
// let res=arr.flat(2);
// console.log(res);

//Q-38
// function func(){
//     a=10;
//     let b=50;
// }
// func();
// console.log(a);

//Q-37
// console.log(x);
// let x=5;
// console.log(x);

//Q-34
// const promise=new promise(res=>res(2));
// promise.then(v=>{
//     console.log(v);
//     return v*2;
// })
// .then(v=>{
//     console.log(v);
//     return v*2;
// })
// .finally(v=>{
//     console.log(v);
//     return v*2;
// })
// .then(v=>{
//     console.log(v);
// })

//Q-18
// var obj={
//     newton:"gravity",
//     albert:"energy",
//     edison:"buld",
//     tesla:"ac"
// };
// // let arr=Object.keys(obj);
// // let res=arr.forEach((a)=>{
// //       console.log(a);
// // })
// for(let a in obj){
//     console.log(a);
// }

//Q-10
// const arr=[1,2,3,4,5];
// // let res=arr.filter((a)=>{
// //     return a>1;
// // })
// // console.log(res);
// let res=arr.slice(1);
// console.log(res);

//Q-33
// console.log("a");
// function logIn(email,password){
//     setTimeout(()=>{
//         return {
//             usertoken:"randomID"
//         }
//     },3000);
// }
// const token=logIn("abc@gmail.com","1234");
// console.log(token);
// console.log("c");

//Q-39
// let students=[
//     {id:"001",name:"anish",sports:"cricket"},
//     {id:"002",name:"smriti",sports:"basketball"},
//     {id:"003",name:"rahul",sports:"cricket"},
//     {id:"004",name:"bakul",sports:"basketball"},
//     {id:"005",name:"nikita",sports:"hockey"},
// ]
// let filtered=students.filter((a)=>{
//       return a.sports=="basketball"
// })
// let loop=filtered.forEach((b)=>{
//     console.log(b.name);
// })

//Q-27
// const number=undefined+11;
// if(number===NaN){
//     console.log("nan");
// }
// else if(number===11){
//     console.log("11");
// }
// else{
//     console.log("other");
// }

//Q-4
// let arr=[1,2,2,3,4,5,6,6,7,8,8,8];
// let res=[...new Set(arr)]
// console.log(res);

//Q-6
// let arr = [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15],
//   ];
//   console.log(arr);

//Q-8
// let arr = [93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60];
// let sorted=arr.sort((a,b)=>b-a);
// let res=sorted.slice(0,3)
// console.log(res);

//Q-9
// const arr1 = [10, 20, 30, 40, 50];
// const arr2 = [10, 20, 34, 32, 11];
// let arr=[...arr1].concat(arr2);
// let res=[...new Set(arr)]
// console.log(res);

//Q-16
// var arr1 = [54, 71, 58, 95, 20];
// var arr2 = [71, 51, 54, 33, 80];
// let arr=[...arr1].concat(arr2);
// let res=arr.map((a)=>{
//     return a.filter((b)=>{
//         return b
//     })
// })
// console.log(res);

//Q-20
// let arr = [
//     { name: "Geeks", id: 10 },
//     { name: "GeeksForGeeks", id: 10 },
//     { name: "Geeks", id: 20 },
//     { name: "Geeks", id: 10 },
//   ];
//   let loop=arr.map((a)=>{
//       console.log(a);
//       return a;
//   })
//   let res=[...new Map(loop)]
//   console.log(res);

//Q-31
// const parentArray = [
//     [
//       {
//         key: 123,
//         value: "India",
//       },
//       {
//         key: 124,
//         value: "USA",
//       },
//       {
//         key: 125,
//         value: "Japan",
//       },
//       {
//         key: 126,
//         value: "Denmark",
//       },
//       {
//         key: 127,
//         value: "Austria",
//       },
//     ],
//     [
//       {
//         key: 124,
//         value: "Kenya",
//       },
//       {
//         key: 126,
//         value: "UK",
//       },
//       {
//         key: 123,
//         value: "Germany",
//       },
//       {
//         key: 127,
//         value: "Spain",
//       },
//       {
//         key: 125,
//         value: "Portugal",
//       },
//     ],
//   ];
//   let res=parentArray.reduce((a,b)=>{
//        b.map((c)=>{
//        !a[c.key]?a[c.key]=[c.value]:a[c.key].push(c.value);
//        })
//      return a;
//   },{})
// console.log(res);
//Q-12
// let a = [1, 2, 3, 4];
// let b = ["ram", "shyam", "sita", "gita"];
// let obj1=Object.assign({},a);
// let obj2=Object.assign({},b);
// console.log(obj2);
// for(let c in obj1){
//     console.log(c);
// }
// console.log(Object.entries(a));

//Q-17
// var arr = [
//     {
//       a: 10,
//       b: 25,
//     },
//     {
//       a: 30,
//       b: 5,
//     },
//     {
//       a: 20,
//       b: 15,
//     },
//     {
//       a: 50,
//       b: 35,
//     },
//     {
//       a: 40,
//       b: 45,
//     },
//   ];
//   let arr1=arr.map((a)=>{
//       return a.a;
//   })
//   let arr2=arr.map((a)=>{
//     return a.b;
// })
// let myArr=arr1.concat(arr2);
// console.log(Math.max(...myArr));

//Q-13
// let arr1 = [1, 2, 3, 4, 5, 77, 876, 453];
// let arr2 = [1, 2, 45, 4, 231, 453];
// let filtered=arr1.filter((a)=>{
//     return arr2.includes(a);
// })
// console.log(filtered);

//Q-15
// var myInt = 235345;
// let str=myInt.toString().split("");
// console.log(str);

//Q-16
// var arr1 = [54, 71, 58, 95, 20];
// var arr2 = [71, 51, 54, 33, 80];
// let filtered1=arr1.filter((a)=>{
//     return !arr2.includes(a);
// })
// let filtered2=arr2.filter((a)=>{
//     return !arr1.includes(a);
// })
// let arr=filtered1.concat(filtered2);
// console.log(arr);

//Q-35
// const employee = {
//     firstName: "Marko",
//     lastName: "Polo",
//     position: "Software Developer",
//     yearHired: 2017
//   };
//   let {firstName,lastName,position,yearHired}=employee;
//   console.log(firstName);

//Q-22
// let str = "thequickbrownfoxjumpsoverthelazydog";
// let str1 = "o";
// let arr=str.split("");
// let filtered=arr.filter((a)=>{
//     return a == str1;
// })
// console.log(filtered.length);

//Q-40
// var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// let reduced=pets.reduce((a,b)=>{
//     !a[b]?a[b]=1:a[b]++;
//     return a;
// },{})
// console.log(reduced);

//Q-21
// let str = "thequickbrownfoxjumpsoverthelazydog";
// let arr=str.split("").sort();
// console.log(arr);
// let reduced=arr.reduce((a,b)=>{
//     !a[b]?a[b]=1:a[b]++;
//   return a;  
// },{})
// console.log(reduced);

//Q-5
// let arr = [
//     {
//       employeeName: "Ram",
//       employeeId: 23,
//     },
//     {
//       employeeName: "Shyam",
//       employeeId: 24,
//     },
//     {
//       employeeName: "Ram",
//       employeeId: 21,
//     },
//     {
//       employeeName: "Ram",
//       employeeId: 25,
//     },
//     {
//       employeeName: "Kisan",
//       employeeId: 22,
//     },
//     {
//       employeeName: "Shyam",
//       employeeId: 20,
//     },
//   ];
//   let emp=arr.map((a)=>{
//       return a.employeeName;
//   })
//   let reduced=emp.reduce((a,b)=>{
//       !a[b]?a[b]=1:a[b]++;
//       return a;
//   },{});
//   console.log(reduced);

  //Q-6
//   let arr = [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15],
//   ];
//   let reduced=arr.reduce((a,b)=>{
//       a[b[0]]=b[1];
//       return a;
//   },{});
//   console.log(reduced);

//Q-12
// let a = [1, 2, 3, 4];
// let b = ["ram", "shyam", "sita", "gita"];
// let reduced=a.reduce((c,d,i)=>{
//     //c[a[d]]=b[d];
//     c[d]=b[i];
//     // c[a[i]]=b[i];
//     return c;
// },{})
// console.log(reduced);

//Q-1
// let arr=[4,8,7,13,12];
// for(let i=0;i<arr.length;i++){
//     let temp=arr[i];
//     arr[i]=arr[i+1];
//     arr[i+1]=temp;
//     i++
// }
// console.log(arr);

//Q-30
// function fact(num){
//     let factor=1;
//     for(let i=1;i<=num;i++){
//         factor=factor*i;
//     }
//     return factor
// }
// console.log(fact(4));

//Q-20
// let arr = [
//     { name: "Geeks", id: 10 },
//     { name: "GeeksForGeeks", id: 10 },
//     { name: "Geeks", id: 20 },
//     { name: "Geeks", id: 10 },
//   ];
//   let reduced=arr.reduce((a,b)=>{
//       if(a.filter((c)=>{
//           return c.name===b.name
//       }).length==0){
//           a.push(b)
//       }
//       return a;
//   },[])
//   console.log(reduced);

//Q-24
// let targetArray = [10, 20, 30, 40, 50, 34, 32, 11];
// function find(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=1;j<=arr.length;j++){
//         if(arr[i]+arr[j]==90){
//             console.log(`index1:${arr[i]},index2:${arr[j]}`);
//         }
//         }

//     }
// }
// find(targetArray);
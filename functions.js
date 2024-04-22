 
// // // // // // // // //  let radius=6
// // // // // // // // //  const pi=3.14
// // // // // // // // //  let area

// // // // // // // // //  area= pi*radius*radius

// // // // // // // // //  console.log(area)

// // // // // // // // //  let data=8
// // // // // // // // //  let sum
// // // // // // // // //  let user="sharath"

// // // // // // // // //  sum=8*225
// // // // // // // // //  console.log(typeof sum);
// // // // // // // // //  console.log(typeof user);

// // // // // // // // //  let s=5
// // // // // // // // //  let square=s*s
// // // // // // // // //  console.log(square);

// // // // // // // // //  let x=-5/0
// // // // // // // // //  console.log(Number.MAX_VALUE);

// // // // // // // // //  let first="sharath"
// // // // // // // // //  let last=" chintakindi"
// // // // // // // // //  console.log(first+last);

// // // // // // // // //  let user_name="sharath \"chintakindi\""
// // // // // // // // //  console.log(user_name);

// // // // // // // // // user_name="sharath \nchintakindi"
// // // // // // // // //  console.log(user_name);

// // // // // // // // //  user_name="sharath \tchintakindi"
// // // // // // // // //  console.log(user_name)

// // // // // // // // //  user_name="sharath \vchintakindi"
// // // // // // // // //  console.log(user_name)

// // // // // // // // //  let bol=10>=10
// // // // // // // // //  console.log(typeof bol);

// // // // // // // // //  let num1 =String(6)
// // // // // // // // //  console.log(num1,typeof num1);

 
// // // // // // // // //  let num2 =Number("220")
// // // // // // // // //  console.log(num2,typeof num2);

// // // // // // // // // let y=111111;
// // // // // // // // // let z=3;
// // // // // // // // // let result=y+z;
// // // // // // // // // console.log(`addition of ${y} ${z} is ${result}`);
// // // // // // // // // console.log(`my Name is
// // // // // // // // // Sharath
// // // // // // // // // Chintakindi`);

// // // // // // // // // Nested loop

// // // // // // // // for(i=1;i<10;i++)
// // // // // // // //  {
// // // // // // // //     console.log("sharath");

// // // // // // // //     for(j=1;j<=5;j++)
// // // // // // // //     console.log("chintakindi");
        
// // // // // // // //         for(k=1;k<=20;k++)
// // // // // // // //         console.log("sai"); 
// // // // // // // //  }

// // // // // // // //  Objects

// // // // // // // // let userName={first_name:"Sharath",last_name:"Chintakindi"};

// // // // // // // // console.log(userName.first_name);
// // // // // // // // console.log(userName["last_name"]);

// // // // // // //  userName={first_name:"Sharath",last_name:"Chintakindi",
// // // // // // //     education:{btech:"EEE",
// // // // // // //                 year:2018,
// // // // // // //                 year2:2020}
// // // // // // //             };
// // // // // // // for(let key in userName.education)
// // // // // // // {
// // // // // // //     console.log(key,userName.education[key]);
// // // // // // // }
// // // // // // // // delete (userName.education.year2);
// // // // // // // // console.log(userName.education.year);
// // // // // // // // console.log(userName.education?.btech.lengt h)

// // // // // // // functions

// // // // // // function gret()
// // // // // // {
// // // // // //     console.log("Hello World");
// // // // // // }
// // // // // // gret();

// // // // // // // using return

// // // // // // function f(user){
// // // // // //     return `sharath ${user}`
// // // // // // }
// // // // // // let user="chintakindi";
// // // // // // let name=f(user);
// // // // // // console.log(name);

// // // // // // function expression

// // // // // let add=function(num1,num2)
// // // // // {
// // // // //   return num1 + num2;  
// // // // // }

// // // // // let result = add(5,6);
// // // // // console.log(result);

// // // // // function arrow
 
// // // // // let user1=(user) =>{
// // // // //     console.log("Hello" + user);
// // // // // }

// // // // // user1("sharath");

// // // // // let user= () => "sharath";
// // // // // let user1=user();
// // // // // console.log(user1);

// // // // // methods in JS

// // // // // let laptop={
// // // // //     cpu:"19",
// // // // //     ram:200,
// // // // //     brand:"Macbook",

// // // // //     Creating a method
// // // // //     greet:function(){
// // // // //         console.log("Hello");
// // // // //     }
// // // // // }
// // // // // laptop.greet();
// // // // // console.log(laptop.cpu);

// // // // // This keyword

// // // // // let laptop1={
// // // // //     cpu:"i9",
// // // // //     ram:"200gb",
// // // // //     brand:"lenevo",

// // // // //     // creating a function

// // // // //         config: function(){
// // // // //             console.log(this.cpu);
// // // // //         }
// // // // // }

// // // // // laptop1.config();

// // // // var car="car1";
// // // // console.log(car);
// // // // var car="car2";
// // // // console.log(car);

// // // function sum(x,y)
// // // {
// // //     total=x+y;
// // //     return total;
// // // }

// // // var o= sum(20,50);
// // // console.log(o);

// // // console.log(`Hello world \t sharath`);

// // // console.log("sharath\'s chintakindi");
// // // console.log("sharath \"Sharath\" welcomes you");

// // // var car=["lambo","BMW","Ford"];
// // // for (var i=0;i<3;i++){
// // // console.log(car[i]);
// // // }

// // // var laptops=["HP","LENVO","DELL"];
// // // laptops.length=4;
// // // laptops.push("Macbook");
// // // laptops[4]="realme";
// // // laptops.forEach(myfun);
// // // function myfun(elements){
// // //     console.log(elements);
// // // }
// // // // console.log(laptops.toString());


// // // var colors=["blue","green","red"]
// // // colors.length=5;
// // // colors[3]="yellow";
// // // colors.forEach(col);
// // // function col(elements){
// // //     console.log(elements);
// // // }
// // // console.log(colors.toString());

// // var car={
// //     car_1:"s",
// //     wi:2,
// //     brand:"hhh",

// //     car_2:"d",
// //     wi:5,
// //     brand:"gg",

// //     wheel: function()
// //     {
// //         console.log(car2.brand);
// //     }

// // }
// // car.wheel();

// function cars(model,exchange,brand){
//     this.model=model;
//     this.exchange=exchange;
//     this.brand=brand;

//     this.func=function()
//     {
//         console.write("For wheel");
//     }

// }

// var car1=new cars("audi")

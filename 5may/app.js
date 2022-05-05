// // alert("Hello world !")

// var text = "Lorem ipsum dolor sit amet !";
// console.log(text.indexOf("ipsum")) // 6
// console.log(text.indexOf("sit")) // 18 
// console.log(text.indexOf("Sit")) // -1 

// // Last Index Of
// console.log(text.indexOf("i")) // 6
// console.log(text.lastIndexOf("i")) // 19

// // Search
// console.log(text.search("dolor")); // 12
// console.log(text.search("Dolor")); // -1 

// // Includes
// console.log(text.includes("orem")) // true
// console.log(text.includes("mero")) // false

// // Startswith | EndsWith
// console.log(text.startsWith("lorem")) // false 
// console.log(text.startsWith("Lorem")) // true 

// console.log(text.endsWith("!"));     // true
// console.log(text.endsWith("amet !"));// true

// // -------------------------------------------------------------------------------
// var text2 = 'Textleri - Stringleri yeni tek dirnagda da cut dirnagda da yaza bilirik';
// var herf = 'a';
// var herf2 = "b";

// // Text2 nin uzunlugu
// console.log(text2.length);// 71 

// // Escape characters - qacis simvollari nedir
// var text3 = "Salam Dunya 'Necesen ?'";
// var text5 = 'Salam dunya \'Necesen ?\' ';
// var text6 = 'Salam Dunya "Necesen ?"'; 

// ------------------------------------------

// var box = document.getElementById('box');
// box.innerHTML = "<mark>Elyane</mark>"; 


// var qutu = document.querySelector('.box');
// qutu.innerHTML = "<hr>Salam DUnya<hr>";


// qutu.style.color = "#fff";
// qutu.style.background =  "green";
// qutu.style.fontSize = "44px";
// qutu.style.paddingTop = "100px";
// qutu.style.marginTop="100px";

// ------------------------------------------
// // Str Slice nedir ?
// var sliceNedir = "Lorem ipsum dolor sit amet !";

// console.log(sliceNedir.slice(1,3));

// // Substring nedir ?
// var substringNedir = "Lorem ipsum dolor sit amet !";

// console.log(substringNedir.substring(1,4));

// // Substr nedir ?
//  var substrNedir = "Salam DUnya Netersen ?";
// console.log(substrNedir.substr(1,3));


// ------------------------------------------

// let name = "Elyane";
// let surname = "Mehiyeva";

// console.log(name + " " + surname)
// ------------------------------------------
// let result;
// let a = 10; b = 15; c=20;

// result = a+b+c;
// result = c-a;
// result = a*b;
// result = c/a;
// result = a++;

// console.log(result);
// console.log(a)
// ------------------------------------------

// for (let i = 0; i < 5; i++) {
//    console.log(i)
// }


// for (var j = 0; j < 5; j++) {
//     console.log(a)
// }
// ------------------------------------------

// for (let i = 0; i < 5; i++) {
//     //    let k = 300;
//     var k = 300;
//     console.log(i + k)
// }


// console.log("var k = " + k)
// ------------------------------------------ 
// Cut ededlerin cemi
// function Sum (nums){
//     let total = 0;
//     for(let i=0; i<nums.length; i++){
//         if(nums[i]%2==0){
//             total+=nums[i];
//         }
//     }
//     return total;
// }
// console.log(Sum([2,3,4,5,6])); 
// Tek ededlerin cemi
// function Sum(nums){
//     let total = 0;
//     for( let i = 0; i< nums.length; i++){
//         if(nums[i] %2 != 0){
//             total+=nums[i];
//         }
//     }
//     return total;
// }
// console.log(Sum([2,3,4,5,6])); 

// function Sum(nums){
//         let sum = 0;
//         for( let i = 0; i< nums.length; i++){          
//              sum+=nums[i];
//         }
//         return sum;
//     }
//         console.log(Sum([2,3,4,5,6])); 
 
// function Repeat (word,count=1){
//     let newstr = "";
//     for(let i = 0; i<count; i++){
//         newstr+=word;
//     }
//     return newstr;
// }
// console.log(Repeat("Ha!",2))

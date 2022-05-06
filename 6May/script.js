let courseName = "Code Academy";

let result;

result = courseName.toLowerCase(); //code academy
result = courseName.toUpperCase(); // CODE ACADEMY
result = courseName.length; //12
result = courseName[0]; // C
result = courseName.slice(0, 4); // Code
result = courseName.substring(0, 4); // Code
result = courseName.replace("Academy", "Course") // Code Course
result = courseName.split(" ").length; // 2

if (courseName.indexOf("Code") > -1) {
    console.log("var")
} else {
    console.log("yoxdur")
}

console.log(result);

// let students = ["Nermin", "Aynur", "Fatime", "Jale", "Aliye"];

// let results;
// results = students.toString();
// results = students.join(" ");
// // results = students.pop();
// // results = students.shift();
// results = students.push("Dilare");
// results = students.unshift("Nigar");
// console.log(students)
// console.log(results);


let brand1= ["mazda","opel"];
let brand2= ["mercedes","toyota"];
results = brand1.concat(brand2)
results = brand1.splice(0,1,"bmw","audi");

console.log(results);
// console.log(students)
console.log(brand1)


let nums = [20,12,65,41,8,20];

function Filter(num,check){
    let newNum = [];
    num.forEach(el=>{
        if(check(el)){
            newNum.push(el)
        }
    })

    return newNum;
}

let filteredNum = nums.filter(x=>x>20)

console.log(nums)
console.log(filteredNum)


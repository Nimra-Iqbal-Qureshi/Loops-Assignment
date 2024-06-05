// ***********************************LOOPS ASSIGNMENTS*****************************************************

// ***********************************1. Creating a Lesson Plan(Using for loop )****************************
// Step 1: Create an empty array
let myWork:{name:string,status:boolean}[]=[];

// Step 2: Use a loop to create lessons
for (let i = 1; i <=10; i++) {
    let lesson={
        name:`Lesson # ${i}`,
        status:i % 1 === 0 ?true:false
    
    }
    // Step 3: Add the lesson to the array
    myWork.push(lesson)
}
// Step 4: Print the result
console.log(myWork);
// *************************************************************************************************************
// *****************************3. Counter Incrementer (Using do while loop )**********************************

// Step 1: Set the starting counter to "0"
let myCounter:number=0;

//Step 2: Create a varable, step, to increase your counter by 
let steps:number=10

// Step 3: Add do...while loop
do {
    console.log(myCounter);
    myCounter+=steps
    
    // 4. Continue to loop until the counter is equal to or more than 100
} while (myCounter <=100);
// ***********************************************************************************************************
// **********************************4.Exploring Objects with for...in Loop***********************************

// Step 1: Create a simple object with three items
let myObj:{[key:string]:string}={
item1:"orange🍊",
item2:"cherry🍒",
item3:"grapes🍇"
};

// Step 2: Use a for...in loop to get properties' names and values from the object
for (const fruits in myObj) {
    console.log(`${fruits} ${myObj[fruits]}`);  
};
// ************************************************************************************************************
//********************************* */ 5.Exploring Arrays with Loops(Using loop )******************************
// Step 1: Create an empty array
let myArray:number[]=[];

// Step 2: Run a loop 10 times, adding a new incrementing value to the arrayfor

for (let i = 1; i <=10; i++) {
    myArray.push(i)  
};

// Step 3: Log the array into the console:
console.log(myArray);

// Step 4: Use the for loop to iterate through the array
for (let i = 0; i < myArray.length; i++) {
    console.log(`Index ${i}:Values ${myArray[i]} `);
}

// Use the for...of loop to output the value into the console from the array:

for (const value of myArray){
console.log(`Value: ${value}`);
}
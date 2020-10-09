/*        JS EXERCISES
        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"*/
let x= "John";
let y= "Doe";
console.log(x+ " <> "+ y);

       // 22) Create an object with properties such name, surname, email
    let person ={
        name: "Simona",
        surname: "Cossai",
        email: "cossaisimona@gmail.com"
    }
       //  24) Create an array with 10 strings in it
    let myArray =["apple", "banana", "mango", "grapes", "kiwi", "watermalon", "lemon", "strawberry", "cherry", "pear"];

       // 25) Print in the console every string in the previous array
       for(let i=0; i<myArray.length; i++){
           console.log("My "+[i]+ " favourite fruit is "+ myArray[i]);
       }

       // 26) Create an array with 100 random numbers in it
       let randomNumbers=[];
       for(let i=1; i<100; i++){
           let random= Math.round(Math.random()*1000);
           randomNumbers.push(random);
       }
console.log(randomNumbers)

       // 27) Wrote a function to get the MAX and the MIN from the previously created array
       let min = Math.min.apply(Math, randomNumbers)   
       let max =Math.max.apply(Math, randomNumbers)
       console.log(min, max) 
      //  28) Create an array of arrays, in which every array has 10 random numbers
      var matrix = [];
      for(var i=0; i<3; i++) {
          matrix[i] = [];
          for(var j=0; j<10; j++) {
              matrix[i][j] = Math.round(Math.random()*10);
          }
      }

       // 29) Create a function that gets 2 arrays and returns the longest one
const getBiggerArray=()=>{
    let Array1= [];
    let Array2= [];
    for(let i=0; i<10; i++){
        let random= Math.round(Math.random()*10);
        Array1.push(random);
    }
    for(let i=0; i<15; i++){
        let random= Math.round(Math.random()*10);
        Array2.push(random);
    }

    if(Array1.length<Array2.length){
        return ("array 2: " +Array2)
    }else{
        return ("array 1: "+ Array1)
    }
}
//console.log(getBiggerArray())

      // 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
      const getBiggerSum=()=>{
        let Array1= [];
        let Array2= [];
        let sum1;
        let sum2;
        for(let i=0; i<10; i++){
            let random1= Math.round(Math.random()*10);
            Array1.push(random1);
            sum1=+random1;           
        }
        for(let i=0; i<10; i++){
            let random2= Math.round(Math.random()*10);
            Array2.push(random2);
            sum2=+random2
        }
        console.log(sum1, sum2)
        if(sum1>sum2){
            return ("array 1: " +Array1)
        }else{
            return ("array 2: "+ Array2)
        }
    }
    console.log(getBiggerSum());
    
       // DOM 
       // 31) Get element with ID "container" from the page
    let containerElement = document.querySelector("#container");

       // 32) Get every "td" from the page

       
       // 33) Create a cycle that prints the text inside every td of the page
       // 34) Write a function to change the heading of the page
       // 35) Write a function to add an extra row to the table
       // 36) Write a function to add the class "test" to each row in the table
      //  37) Write a function to add a red background to every link in the page
       // 38) Console log "Page loaded" when the page is correctly loaded
       // 39) Write a function to add new items to a UL
       // 40) Write a function to empty a list
       //EXTRA 
       // 41) Add an eventListener to alert when the mouse is over a link, displaying the URL
       // 42) Add a button to hide every image on the page
        //43) Add a button to hide and show the table from the page
       // 44) Write a function to sum every number inside the TD (if the content is numeric)
       // 45) Delete the last letter from the title each time the user clicks on it
       // 46) Change a single TD background color when the user clicks on it
      //  47) Add a button DELETE, on click it should delete a random TD from the page
       // 48) Add a pink border to a cell when the mouse is over it
       // 49) Write a function to add a table with 4 rows and 3 columns programmatically
       // 50) Write a function to remove the table from the page
    

/*        JS EXERCISES
        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"*/
let x= "John";
let y= "Doe";
//console.log(x+ " <> "+ y);

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
           //console.log("My "+[i]+ " favourite fruit is "+ myArray[i]);
       }

       // 26) Create an array with 100 random numbers in it
       let randomNumbers=[];
       for(let i=1; i<100; i++){
           let random= Math.round(Math.random()*1000);
           randomNumbers.push(random);
       }
//console.log(randomNumbers)

       // 27) Wrote a function to get the MAX and the MIN from the previously created array
       let min = Math.min.apply(Math, randomNumbers)   
       let max =Math.max.apply(Math, randomNumbers)
      // console.log(min, max) 
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
    //console.log(getBiggerSum());
    
       // DOM 
       // 31) Get element with ID "container" from the page
    let containerElement = document.querySelector("#container");
       // 32) Get every "td" from the page
let tdArray=[];
tdArray = document.querySelectorAll("td");
console.log(tdArray)

       // 33) Create a cycle that prints the text inside every td of the page
    for(i=0; i<tdArray.length; i++){
       // console.log(tdArray[i].innerHTML);
    }

       // 34) Write a function to change the heading of the page
       const changeHeading =(string)=>{
            let heading = document.querySelector("h1");
            heading.innerText= string;
       }

       // 35) Write a function to add an extra row to the table
       const addRow =()=>{
           let row = document.createElement("tr");
           let table=document.querySelector("table");
        table.appendChild(row);
       }

       // 36) Write a function to add the class "test" to each row in the table

       const addClass =()=>{
           let rows=[];
            rows= document.querySelectorAll("tr");
            for(let i=0; i<rows.length; i++){
                rows[i].classList.add("test");
            }
       }
      //  37) Write a function to add a red background to every link in the page
       const addRedBackground=()=>{
        let links=[];
        links = document.querySelectorAll("a");
        for(i=0; i<links.length; i++){
            links[i].style.backgroundColor="red";
        }
       }
       // 38) Console log "Page loaded" when the page is correctly loaded
       window.onload= function (){
        console.log("page loaded");
       }
           
       // 39) Write a function to add new items to a UL
       const addNewItem=(string)=>{
           let ulList = document.querySelector("ul");
           let liElement= document.createElement("li");
            liElement.innerText = string;
            ulList.appendChild(liElement);
       }
       // 40) Write a function to empty a list

       const clearList =()=>{
           let ulList = document.querySelector("ul");
           ulList.remove();
       }
       //EXTRA 
       // 41) Add an eventListener to alert when the mouse is over a link, displaying the URL
      
    
    showAlert=()=>{
        let links =[];
        links = document.querySelectorAll("a");
        for(i=0; i<links.length; i++){
        alert(links[i].href);
    } 
links.addEventListener("onmouseover", showAlert)
links.addEventListener("onmouseover", () => { showAlert}, false);
}

       // 42) Add a button to hide every image on the page

       let hideButton =()=>{
           let images=[];
           images= document.querySelectorAll("img");
           console.log(images)
           for(let i=0; i<images.length; i++){
            if(images[i].classList.value==="tableImages"){
                images[i].classList.add("hide");
               }else{
                images[i].classList.remove("hide");
            }
    }
  }
        //43) Add a button to hide and show the table from the page
        let hideTable =()=>{
            let table= document.querySelector("table");
            
             if(table.classList.value==="tableElement"){
                 table.classList.add("hide");
                }else{
                 table.classList.remove("hide");
             }
     }
   
       // 44) Write a function to sum every number inside the TD (if the content is numeric)

    // 45) Delete the last letter from the title each time the user clicks on it
    let heading = document.querySelector("h1");
    let newheading;
    const removeLastLetter=()=>{
    newheading = heading.innerText.slice(0, -1);
    heading.innerText= newheading;
}


// 46) Change a single TD background color when the user clicks on it

      //  47) Add a button DELETE, on click it should delete a random TD from the page
        const deleteTd=()=>{
            let tdElements = [];
            tdElements= document.querySelectorAll("td");
            var item = tdElements[Math.floor(Math.random() * tdElements.length)];
            item.remove()
        }

       // 48) Add a pink border to a cell when the mouse is over it
       // 49) Write a function to add a table with 4 rows and 3 columns programmatically
       const addRowandCells=()=>{
        let body = document.querySelector('body')
        let table = document.createElement('table')
        for(let x=0; x<4; x++){
          let row = document.createElement('tr')
          for(let y=0; y<3; y++){
            let cell = document.createElement('td')
            cell.innerText = y
            row.appendChild(cell)
          }
          table.appendChild(row)
        }
        body.appendChild(table)
       }

     
       // 50) Write a function to remove the table from the page
   let deleteTable =()=>{
            let table= document.querySelector("table");      
           table.remove()
     }
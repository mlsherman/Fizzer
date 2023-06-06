// get values from the user. We need to get the fizz value and the buzz value.
function getValues() {

    // get the user valeus from the page
    let fizzNum = document.getElementById("fizzNum").value
    let buzzNum = document.getElementById("buzzNum").value
    // parse for numbers
    fizzNum = parseInt(fizzNum)
    buzzNum = parseInt(buzzNum)
    // check that the numbers are integers
    if (Number.isInteger(fizzNum) && Number.isInteger(buzzNum)) {

    // we call fizzBuzz
        let fbArray = fizzBuzz(fizzNum, buzzNum);
    // call displayData and write the values to the screen
        displayData(fbArray);
    }else {
        alert("You must enter an integer!")
    }
    
}

function fizzBuzz(fizzNum, buzzNum){
    
    // initialize an array
    let returnArray = []

    // loop from 1 to 100
    for (let i = 1; i<= 100; i++) {
        
        if (i % fizzNum == 0 && i % buzzNum == 0 )
        {
         returnArray.push("FizzBuzz")
        }
        else if ( i % fizzNum == 0 ) 
        {
          returnArray.push("Fizz")
        }
        else if ( i % buzzNum == 0 ) 
        {
          returnArray.push("Buzz")
        }
        else
        {
          returnArray.push(i)
        } 
    }

    return returnArray;
}

function displayData(fbArray) {

    // get the table body element from the page
    let tableBody = document.getElementById("results");

    // get the template row
    let templateRow = document.getElementById("fbTemplate");

    // clear the table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index+= 5) {
        
        let tableRow = document.importNode(templateRow.content, true)

        // grab just the tds and put into an array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[index])
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index+1])
        rowCols[1].textContent = fbArray[index+1];

        rowCols[2].classList.add(fbArray[index+2])
        rowCols[2].textContent = fbArray[index+2];

        rowCols[3].classList.add(fbArray[index+3])
        rowCols[3].textContent = fbArray[index+3];

        rowCols[4].classList.add(fbArray[index+4])
        rowCols[4].textContent = fbArray[index+4];

        tableBody.appendChild(tableRow);
    }
    // add all the rows to the table. 

}
 function calculateArea() { 
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
           alert( `The area of circle with radius ${radius} is ${((22/7)*radius*radius).toFixed(2)}`)
}
calculateArea();

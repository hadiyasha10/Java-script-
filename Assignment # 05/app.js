//Q1 Write a program that take two numbers and add them in a new variable. Show the result in your browser?
//SUM
//let num1 = 3;
//let num2 = 5;
//let sum = num1+num2
//document.write(`Sum of ${num1} and ${num2} is ${sum}`)


//Q2Repeat task1 for subtraction, multiplication, division & modulus?
//SUBTRACTION
//let num3 = 3;
//let num4 = 5;
//let subtraction = num3-num4
//document.write(`Difference of ${num3} and ${num4} is ${subtraction}`)

//MULTIPLICATION
//let num5 = 3;
//let num6 = 5;
//let multiplication = num5*num6
//document.write(`Product of ${num5} and ${num6} is ${multiplication}`)

//Division
//let num7 = 3;
//let num8 = 5;
//let division = num7/num8
//document.write(`Division of ${num7} and ${num8} is ${division}`)

//Modulus
//let num9 = 3;
//let num10 = 5;
//let modulus = num9%num10
//document.write(`Modulus of ${num9} and ${num10} is ${modulus}`)


//Q3 Do the following using JS Mathematic Expressions?
//a. Declare a variable.
//b. Show the value of variable in your browser like “Value after variable declaration is: ??”
//let number 
//document.write(`Value after variable declaration is ${number}`)

//c. Initialize the variable with some number.
//d. Show the value of variable in your browser like “Initial value: 5”
//let number = 5
//document.write(`Initial value: ${number}`)

//e. Increment the variable.
//f. Show the value of variable in your browser like “Value after increment is: 6”
//let number = 5
//number++;
//document.write(`Value after increment is: ${number}`)

//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value after addition is: 13”
//let number = 5
//number = number + 8
//document.write(`Value after addition is: ${number}`)

//i. Decrement the variable.
//j. Show the value of variable in your browser like “Value after decrement is: 12”
//let number = 13 
//number--;
//document.write(`Value after decrement is: ${number}`)

//k. Show the remainder after dividing the variable’s value by 3
//l. Output : “The remainder is : 0”
//let number = 12 
//let remainder = number%3
//document.write(`The remainder is: ${remainder}`)


//Q4 Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie?
//let ticketPrice = 600
//let totalCost = ticketPrice * 5
//document.write(`Total cost to buy 5 tickets to a movie is ${totalCost} PKR`)


//Q5 Write a script to display multiplication table of any number in your browser.
//let num = prompt()
//document.write(`<h3>Table of ${num}</h3>`);
//for (let i = 1; i <= 10; i++) {
  //    document.write(`${num} x ${i} = ${num * i} <br>`);
//    }


//Q6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//let celsius = 25;
//let fahrenheit = (celsius * 9/5) + 32;
//document.write(`${celsius}°C is ${fahrenheit}°F <br>`);

//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.
//let fahrenheitTemp = 70;
//let celsiusTemp = (fahrenheitTemp - 32) * 5/9;
//document.write(`${fahrenheitTemp}°F is ${celsiusTemp.toFixed(2)}°C`);


//Q7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
//let priceItem1 = 650
//let quantityItem1 = 3
//let priceItem2 = 100
//let quantityItem2 = 7
//let shippingCharges = 100
//let totalCost = 2750
//document.write(`<h1>Shopping Cart</h1> <br> <br>`)
//document.write(`Price of item 1 is ${priceItem1} <br>
//    Quantity of item 1 is ${quantityItem1} <br>
//    Price of item 2 is ${priceItem2} <br>
//    Quantity of item 2 is ${quantityItem2} <br> <br> `)
//document.write(`Total cost of your order is ${totalCost}`)


//Q8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser?
//let totalMarks = 980
//let obtainedMarks = 804
//let percentage = totalMarks / obtainedMarks * 100
//document.write(`<h1>Marks Sheet </h1> <br> <br>`)
//document.write(`Total marks: ${totalMarks} <br> `)
//document.write(`Marks obtained: ${obtainedMarks} <br>`)
//document.write(`Percentage: ${percentage}`)


//Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
//let totalCurrencyInPKR = (10 * 104.80) + (25 * 28);
//document.write(`<h1>Currency In PKR </h1>`)
//document.write(`Total currency in PKR: ${totalCurrencyInPKR}`)


//Q10. Write a program to initialize a variable with some number and do arithmetic in following sequence.Perform all calculations in a single expression
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//let num = 10
//let result = ((num + 5) * 10) / 2;
//document.write(`The result is: ${result}`);


//Q11. The Age Calculator: Forgot how old someone is? Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored values.
//let currentYear = 2025
//let  birthYear = 2005
//let  age = 20
//document.write(`<h1>Age Calculator</h1> <br>`)
//document.write(`Current Year: ${currentYear} <br>
//    Birth Year: ${birthYear} <br>
//    Your Age: ${age}`)


//Q12. The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius.
//let radius = 20
//let pi = 3.142
//let circumference = 2*pi*radius
//let area = pi*radius*radius
//document.write(`<h1>The Geometrizer </h1> <br>`)
//document.write(`Radius of a circle: ${radius} <br>`)
//document.write(`The circumference is: ${circumference} <br>`)
//document.write(`The area is: ${area}`)


//Q13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of your life.
//let snack = "chocolate chip"
//let age = 15
//let maximumAge = 65
//let perDay = 3
//let totalSnack = 150
//document.write(`<h1>The Lifetime Supply Calculator</h1> <br>`)
//document.write(`Favourite Snack: ${snack} <br>
//    Current age: ${age} <br>
//    Estimated Maximum Age: ${maximumAge} <br>
//    Amount of snacks per day: ${perDay} <br>
//    You will need ${totalSnack} ${snack} to last you until the ripe old age of ${maximumAge}`)

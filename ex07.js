// IndexOf Exercise
// Instructions: Create an array of at least five different fruits as strings. Write code to find the index of the fruit "banana".




const handleFindFruit = (array, fruit) => array.indexOf(fruit) === -1 ? "Not Exist" :  array.indexOf(fruit);


console.log(handleFindFruit(["Tomato", "Orange", "Strawberry", "Banana", "Apple"], "Banana"))
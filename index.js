function fetchData() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      console.log(`Latitude: ${lat}, Longitude: ${long}`);
      resolve([lat, long]);
    });
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((e) => console.error(e));





async function fetchData() {
  try {
    const result = await fetch("https://dummyjson.com/todos");
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();






class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const sqr = new Rectangle(10, 10);
console.log(sqr.area); // 100

// Inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");






function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = generateSequence();

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3





let originalString = "Hello, World!";

let slicedString = originalString.slice(0, 5); // Output: Hello

let splitArray = originalString.split(', '); // Output: ['Hello', 'World!']

let replacedString = originalString.replace('World', 'Universe'); // Output: Hello, Universe!

let indexOfComma = originalString.indexOf(','); // Output: 5

let includesWorld = originalString.includes('World'); // Output: true

console.log("Original String:", originalString);
console.log("Sliced String:", slicedString);
console.log("Split Array:", splitArray);
console.log("Replaced String:", replacedString);
console.log("Index of Comma:", indexOfComma);
console.log("Includes 'World':", includesWorld);



let originalArray = [1, 2, 3, 4, 5];

let mappedArray = originalArray.map(x => x * 2); // Creates a new array with each element doubled

let filteredArray = originalArray.filter(x => x % 2 === 0); // Creates a new array with only even numbers

originalArray.forEach(element => console.log(element));

let sum = originalArray.reduce((acc, current) => acc + current, 0); // sum of all elements

let splicedArray = originalArray.splice(2, 2); // Removes 2 elements starting from index 2

let slicedArray = originalArray.slice(1, 3); // Creates a new array with elements from index 1 to 2

let reversedArray = originalArray.reverse(); // Reverses the array

console.log("Original Array:", originalArray);
console.log("Mapped Array:", mappedArray);
console.log("Filtered Array:", filteredArray);
console.log("Sum of Array:", sum);
console.log("Spliced Array:", splicedArray);
console.log("Sliced Array:", slicedArray);
console.log("Reversed Array:", reversedArray);


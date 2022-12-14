const response = await fetch("https://jsonplaceholder.typicode.com/users");

const people = await response.json();

console.log(people);

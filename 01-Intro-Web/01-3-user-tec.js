const users = [
  { name: "Carlos", tecnologies: ["HTML", "CSS"] },
  { name: "Jasmine", tecnologies: ["JavaScript", "CSS"] },
  { name: "Tuane", tecnologies: ["HTML", "Node.js"] }
];

users.forEach((user) => console.log(`${user.name} trabalha com ${user.tecnologies}`))
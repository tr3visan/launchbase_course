const users = [
  { name: "Carlos", tecnologies: ["HTML", "CSS"] },
  { name: "Jasmine", tecnologies: ["JavaScript", "CSS"] },
  { name: "Tuane", tecnologies: ["HTML", "Node.js"] }
];

for (let i = 0; i < users.length; i++) {
  const userWorkCSS = checkUserWork(users[i]);
  if (userWorkCSS) {
    console.log(`O usuário ${users[i].name} trabalha com CSS`);
  }
}

function checkUserWork(usuario) {
  let tec = usuario.tecnologies, verify = null
  for (let i=0; i < tec.length; i++) {
    if (tec[i] == 'CSS') {
      verify = true
    } else {
      verify = false
    }
  }
  return verify
}



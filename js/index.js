// Global Variable 
const task = document.getElementById('task');

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let html = ``;

for(let i = 0; i < alphabet.length; i++){
    let content = alphabet[i];
    html = html + `<li>${content}</li>`;
    console.log(i);
}

console.log(html);

task.innerHTML = html;



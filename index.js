const p1 = document.getElementById("p1");
const h2list = document.getElementsByClassName ("subtitle");

const element1 = document.querySelector("#p1");
const element2 = document.querySelector(".subtitle");

const textInput = document.getElementById("username-input");

console.log(p1);
console.log(document);
console.log(h2list);
console.log(textInput);

p1.textContent = "texto dinamico";

textInput.addEventListener("input",(e) => {
    p1.textContent = e.target.value;
});
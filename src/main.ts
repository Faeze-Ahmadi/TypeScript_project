import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");
app!.innerHTML = `<h1 class="bg-pink-600">hello from vite!</h1>`;

const h1 = document.createElement("h1");
h1.classList.add("bg-pink-600");

const span = document.createElement("span");
span.innerHTML = "hello vite";

h1.appendChild(span);

app?.appendChild(h1);

const input = document.createElement("input");
input.classList.add("bg-red-600")

function myFunction() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", "Hello World!");
  document.body.appendChild(x);
}

myFunction()

var x = document.createElement("INPUT");
x.setAttribute("type", "text");

app?.appendChild(x);
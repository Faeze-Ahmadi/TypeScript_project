import "./style.css";
const app = document.querySelector<HTMLDivElement>("#app");

// app!.innerHTML = `<h1 class="bg-pink-600">hello from vite!</h1>`;

// const h1 = document.createElement("h1");
// h1.classList.add("bg-pink-600");

// const span = document.createElement("span");
// span.innerHTML = "hello vite";

// h1.appendChild(span);

// app?.appendChild(h1);

// const input = document.createElement("input");
// input.classList.add("bg-red-600")

// function myFunction() {
//   var x = document.createElement("INPUT");
//   x.setAttribute("type", "text");
//   x.setAttribute("value", "Hello World!");
//   document.body.appendChild(x);
// }

// myFunction()

// var x = document.createElement("INPUT");
// x.setAttribute("type", "text");

// app?.appendChild(x);

type BoxProps = {
  element: string;
  attr?: any;
  children?: string | string[] | Element | Element[];
};

const Box = (props: BoxProps) => {
  console.log(props.attr);
  const el = document.createElement(props.element);
  
  if (props.attr)
    Object.keys(props.attr).forEach((key: string) => {
      el[key] = props.attr[key];
  })

  if (!Array.isArray(props.children)) el.append(props.children!)
  else el.append(...props.children)
  return el
};

console.log(Box({element: "h1", children: "sakcvahk"}));
app!.append(Box({element: "h1", children: "mehdi malkami"}));
app!.append(Box({element: "mark", children: "faeze ahmadi"}));
app!.append(Box({element: "h1", children: ["faeze ahmadi", " ", "loves", " ", "mehdi malkami"]}));

app!.append(
  Box({
    element: "ul",
    attr: {
      className: "bg-red-700",
      id: "1000",
      style: "red",
    },
    children: [
      Box({element: "li", children: "1"}),
      Box({element: "li", children: "2"}),
      Box({element: "li", children: "3"})
    ]
  })
)

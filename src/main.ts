import "./style.css";
const app = document.querySelector<HTMLDivElement>("#app");


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

app!.append(
  Box({
    element: "img",
    attr: {
      className: "mt-32 w-10 h-10 bg-gray-200 rounded-full",
      src: "/src/img/images.jfif",
      id: "exampleWrapper",
      border: "red",
    },
    children: "name"
  })
)

app!.append(
  Box({
    element: "label",
    attr: {
      className: "mt-4 block mb-2 text-lg font-bold text-gray-900 dark:text-black",
      id: "name",
      border: "red",
    },
    children: "name"
  })
)

app!.append(
  Box({
    element: "input",
    attr: {
      className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      id: "email",
      border: "red",
    },
    children: "input1"
  })
)

app!.append(
  Box({
    element: "label",
    attr: {
      className: "mt-4 block mb-2 text-lg font-bold text-gray-900 dark:text-black",
      id: "phone_number",
      border: "red",
    },
    children: "phone number"
  })
)
app!.append(
  Box({
    element: "input",
    attr: {
      className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      id: "password",
      border: "red",
    },
    children: "input2"
  })
)

app!.append(
  Box({
    element: "div",
    attr: {
      className: "flex gap-36 mt-4",
      id: "radios",
    },
    children: [
      Box({
        element: "input",
        attr: {
          className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300",
          type: "radio",
          id: "SIM"
        },
        children: "SIM"
      }),
      Box({
        element: "input",
        attr: {
          className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300",
          type: "radio",
          id: "Device"
        },
        children: "Device"
      })
    ]
  })
)

app!.append(
  Box({
    element: "button",
    attr: {
      className: "bg-gray-500 rounded py-2 px-16 mt-4",
      id: "add_button",
    },
    children: "add contact"
  })
)

app!.append(
  Box({
    element: "button",
    attr: {
      className: "bg-gray-500 rounded py-2 px-16 mt-4",
      id: "show_button",
    },
    children: "show contact"
  })
)

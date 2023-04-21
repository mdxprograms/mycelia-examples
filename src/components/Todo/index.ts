import { dom } from "@wallerbuilt/mycelia";

const { div, span, input, label } = dom;

const Todo = (value: string) =>
  div({}, [
    span({}, value),
    label({}, [input({ type: "checkbox" }, ""), span({}, "Complete?")]),
  ]);

export default Todo;

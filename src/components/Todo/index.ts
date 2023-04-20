import { dom } from "@wallerbuilt/mycelia";

const { div } = dom;

const Todo = (value: string) => div({}, value);

export default Todo;

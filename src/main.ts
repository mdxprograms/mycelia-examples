import { dom, mount } from "@wallerbuilt/mycelia";

import { onAddTodo, onTodoError, onTodoInput } from "./events";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const appSelector = "#app";

const { div } = dom;

// Todo item handlers
onTodoInput(console.log);

onAddTodo(() => {
  TodoList.appendChild(Todo(TodoInput.value));
  TodoInput.value = "";
});

onTodoError(() => console.error("Must be more than 3 characters in length"));

// App setup
const App = () => div({}, [TodoInput, TodoList]);

mount(App(), appSelector);

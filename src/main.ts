import { dom, mount } from "@wallerbuilt/mycelia";
import {
  InputDownEvent,
  InputUpEvent,
  handleTodoAdd,
  handleTodoError,
  handleTodoInput,
  onAddTodo,
  onTodoError,
  onTodoInput,
} from "./events";

const appSelector = "#app";

const { div, input } = dom;

const TodoInput = input({
  placeholder: "What needs done?",
  onkeydown: (e: InputDownEvent) => {
    if (e.key === "Enter") {
      handleTodoAdd({ title: e.target.value });
    }

    if (e.key === "Backspace") {
      if (e?.target?.value.length <= 3) {
        handleTodoError({
          hasError: true,
          msg: "must be more than 3 characters",
        });
      }
    }
  },
  onkeyup: (e: InputUpEvent) => {
    handleTodoInput({ title: e?.target?.value });
  },
}) as HTMLInputElement;

onTodoInput(console.log);

onAddTodo(() => {
  TodoInput.value = "";
});

onTodoError(console.error);

const App = () => div({}, TodoInput);

mount(App(), appSelector);

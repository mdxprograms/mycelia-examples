import { dom } from "@wallerbuilt/mycelia";
import {
  handleTodoAdd,
  handleTodoError,
  handleTodoInput,
  InputDownEvent,
  InputUpEvent,
} from "../../events";

const { input } = dom;

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

export default TodoInput;

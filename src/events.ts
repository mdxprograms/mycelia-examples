import { Emitter } from "@wallerbuilt/mycelia";

const emit = new Emitter();

enum Events {
  Input = "todo:input",
  Add = "todo:added",
  Complete = "todo:completed",
  Error = "todo:error",
}

export type InputDownEvent = KeyboardEvent & { target: HTMLInputElement };

export type InputUpEvent = InputEvent & { target: HTMLInputElement };

// Event listeners
export const onTodoInput = emit.on(Events.Input);
export const onAddTodo = emit.on(Events.Add);
export const onCompleteTodo = emit.on(Events.Complete);
export const onTodoError = emit.on(Events.Error);

// Event dispatchers
export const handleTodoInput = emit.dispatch(Events.Input);
export const handleTodoAdd = emit.dispatch(Events.Add);
export const handleTodoComplete = emit.dispatch(Events.Complete);
export const handleTodoError = emit.dispatch(Events.Error);

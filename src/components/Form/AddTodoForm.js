import "./AddTodoForm.scss"
import CloseButton from "../Button/CloseButton";

export default function TodoForm() {
  const formDiv = document.createElement("div");
  formDiv.classList.add("add-todo-form", "flex", "flex-col", "gap-2");
  const form = `
    <form class="todo-form flex flex-col gap-3">
      <input type="text" class="title rounded pl-1" placeholder="Title" required>
      <input type="text" class="category rounded pl-1" placeholder="Category">
      <input type="date" class="date rounded pl-1" placeholder="Date">
      <label for="priority">Priority</label>
      <select id="priority" name="priority">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <textarea type="text" class="details rounded pl-1" placeholder="Details"></textarea>
      <button class="submit-button rounded-full ml-auto mr-auto p-2 shadow-md" type="submit">Add Todo</button>
    </form>
  `
  formDiv.innerHTML = form;
  formDiv.prepend(CloseButton())
  return formDiv;
}

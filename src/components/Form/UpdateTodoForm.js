import "./UpdateTodoForm.scss"
import UpdateButton from "../Button/UpdateButton"
import CloseButton from "../Button/CloseButton";

export default function UpdateTodoForm(id, title = "", category = "", dueDate, details = "") {
  const updateTodoForm = document.createElement("div");
  updateTodoForm.classList.add("update-todo-form", "flex", "flex-col", "gap-2", "shadow-md");
  updateTodoForm.dataset.id = id;

  const form = `
    <form class="todo-form flex flex-col gap-3">
      <input type="text" class="update-title rounded pl-1" placeholder="${title}" >
      <input type="text" class="update-category rounded pl-1" placeholder="${category}">
      <input type="date" class="update-date rounded pl-1" placeholder="${dueDate}">
      <label for="priority">Priority</label>
      <select id="update-priority" name="priority">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <textarea type="text" class="update-details rounded pl-1" placeholder="${details}"></textarea>
    </form>
  `
  updateTodoForm.innerHTML = form;
  updateTodoForm.prepend(CloseButton())
  updateTodoForm.append(UpdateButton())
  return updateTodoForm;
}

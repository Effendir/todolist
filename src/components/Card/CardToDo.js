import "./CardToDo.scss"
import DeleteButton from "../Button/DeleteButton"
import ZoomButton from "../Button/ZoomButton"

export default function CardToDo(id, title, category, dueDate, priority, details, checklist) {
  const todoCard = document.createElement("div");
  todoCard.classList.add("todo-card", "rounded", "p-3", "shadow-md");
  todoCard.dataset.id = id;

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title", "lg:font-medium");
  cardTitle.innerText = title;

  const cardCategory = document.createElement("p");
  cardCategory.classList.add("card-category");
  cardCategory.innerText = category;

  const cardDueDate = document.createElement("p");
  cardDueDate.classList.add("card-due-date");
  cardDueDate.innerText = dueDate;

  const cardPriority = document.createElement("p");
  cardPriority.classList.add("card-priority");
  cardPriority.innerText = "priority :";
  const priorityLight = document.createElement("div")
  priorityLight.classList.add("rounded-full", "w-5", "h-5")
  switch (priority) {
    case "Low":
      priorityLight.classList.add("bg-green-500", "justify-self-center");
      priorityLight.setAttribute("data-value", "Low");
      break;

    case "Medium":
      priorityLight.classList.add("bg-yellow-500", "justify-self-center");
      priorityLight.setAttribute("data-value", "Medium");
      break;

    case "High":
      priorityLight.classList.add("bg-red-500", "justify-self-center");
      priorityLight.setAttribute("data-value", "High");
  }

  const cardDetails = document.createElement("p");
  cardDetails.classList.add("card-details");
  cardDetails.innerText = details;

  const cardChecklist = document.createElement("div");
  cardChecklist.classList.add("card-checklist");
  switch (checklist) {
    case "done":
      cardChecklist.classList.add("checked");
      cardChecklist.setAttribute("data-value", "Done");
      cardChecklist.innerHTML = `<i class="fa-regular fa-circle-check" style="color: #7895b2;"></i>`
      break;

    case "not done":
      cardChecklist.classList.add("unchecked");
      cardChecklist.setAttribute("data-value", "Not done");
      cardChecklist.innerHTML = `<i class="fa-regular fa-circle" style="color: #7895b2;"></i>`
      break;
  }

  todoCard.appendChild(cardChecklist);
  todoCard.appendChild(cardTitle);
  todoCard.appendChild(priorityLight);
  todoCard.appendChild(cardCategory);
  todoCard.appendChild(cardDueDate);
  todoCard.appendChild(cardDetails);
  todoCard.appendChild(ZoomButton())
  todoCard.appendChild(DeleteButton())

  return todoCard;
}

import Header from '../Header/Header';
import Container from '../Container/Container';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import TodoList from '../Todo/TodoList';
import CardToDo from '../Card/CardToDo';
import AddTodoForm from "../Form/AddTodoForm";
import UpdateTodoForm from '../Form/UpdateTodoForm';

const List = new TodoList();
let filterKey = "priority"

const todoObject = {
  title: "Buy Beans",
  category: "Food",
  dueDate: "2024-09-26",
  priority: "Low",
  details: "and catnip",
  checklist: "not done"
}

const todoObject2 = {
  title: "Moving out of basement",
  category: "House",
  dueDate: "2024-07-12",
  priority: "High",
  details: "forever",
  checklist: "done"
}

const todoObject3 = {
  title: "Drawing mustaches on vegetables",
  category: "Leisure",
  dueDate: "2024-10-31",
  priority: "Medium",
  details: "with a marker",
  checklist: "not done"
}

if (!localStorage.getItem("todoList")) {
  List.addTodo(todoObject);
  List.addTodo(todoObject2);
  List.addTodo(todoObject3);
}

export default class UI {
  initialize() {
    this.loadFromLocalStorage();
    Header("Todo List");
    Container();
    Sidebar();
    Main();
    Footer();
    this.displayTodoCards(filterKey);
    document.querySelector("body").appendChild(AddTodoForm());
    const addButton = document.querySelector(".add-button");
    const closeAddTodoForm = document.querySelector(".add-todo-form .close-button");
    addButton.addEventListener("click", this.toggleAddTodoForm);
    closeAddTodoForm.addEventListener("click", this.toggleAddTodoForm);
    document.querySelector("body").appendChild(UpdateTodoForm());
    const closeUpdateTodoForm = document.querySelector(".update-todo-form .close-button");
    closeUpdateTodoForm.addEventListener("click", this.toggleUpdateTodoForm);
    this.addTodo();
    this.sortTodos();
  }

  loadFromLocalStorage() {
    const storedTodos = localStorage.getItem("todoList");
    if (storedTodos) {
      const todos = JSON.parse(storedTodos);
      todos.forEach(todo => List.addTodo(todo));
    }
  }

  saveToLocalStorage() {
    const todos = List.getList();
    localStorage.setItem("todoList", JSON.stringify(todos));
  }

  displayTodoCards(filter, category = "") {
    document.querySelector(".main").innerHTML = "";
    let cards = List.getList();
    switch (filter) {
      case "all":
        break;
      case "category":
        cards = cards.filter(obj => obj.category === category);
        break;
      case "date":
        cards = cards.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
        break;
      case "priority":
        const priorityOrder = {
          "High": 1,
          "Medium": 2,
          "Low": 3
        };
        cards = cards.sort((a, b) => {
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
        break;
      case "checklist":
        cards = cards.sort((a, b) => a.checklist.localeCompare(b.checklist));
        break;
    }
    cards.forEach(element => {
      document.querySelector(".main").appendChild(CardToDo(element.id, element.title, element.category, element.dueDate, element.priority, element.details, element.checklist));
    });
    this.removeTodo();
    this.zoomOnTodo();
    this.checkTodo();
    this.groupTodos();
  }

  sortTodos() {
    const sortDate = document.querySelector(".sort-by-date");
    sortDate.addEventListener("click", (e) => {
      filterKey = "date";
      this.displayTodoCards(filterKey);
    })
    const sortCheck = document.querySelector(".sort-by-check");
    sortCheck.addEventListener("click", (e) => {
      filterKey = "checklist";
      this.displayTodoCards(filterKey);
    })
    const sortPriority = document.querySelector(".sort-by-priority");
    sortPriority.addEventListener("click", (e) => {
      filterKey = "priority";
      this.displayTodoCards(filterKey);
    })
  }

  groupTodos() {
    let session = this;
    let todos = List.getList();
    todos = [...new Set(todos.map(todo => todo.category))];
    let categories = document.querySelector(".categories");
    categories.innerHTML = `<h2 class="lg:text-xl lg:m-3">Categories</h2>`;
    todos.forEach(todo => {
      let button = document.createElement("button");
      let sanitizedCategory = todo.replace(/\s+/g, '-');
      button.classList.add(`group-${sanitizedCategory}`, "m-2", "pr-1", "pl-1", "rounded");
      button.setAttribute("data-category", todo);
      button.innerText = todo;
      button.addEventListener("click", (e) => {
        filterKey = "category";
        const selectedCategory = button.getAttribute("data-category");
        session.displayTodoCards(filterKey, selectedCategory);
      });
      categories.appendChild(button);
    });
    const showAll = document.createElement("button");
    showAll.classList.add("show-all", "m-2", "pr-1", "pl-1", "rounded");
    showAll.innerText = "All";
    showAll.addEventListener("click", (e) => {
      filterKey = "all";
      this.displayTodoCards(filterKey);
    });
    categories.appendChild(showAll);
  }


  toggleAddTodoForm() {
    const form = document.querySelector(".add-todo-form");
    form.classList.contains("visible") ? form.classList.remove("visible") : form.classList.add("visible");
  }

  toggleUpdateTodoForm(todoData) {
    const form = document.querySelector(".update-todo-form");
    const updateButton = document.querySelector(".update-button");
    const newUpdateTodoHandler = () => this.updateTodo(todoData);
    updateButton.removeEventListener("click", this.currentUpdateHandler);
    this.currentUpdateHandler = newUpdateTodoHandler;
    if (form.classList.contains("visible")) {
      form.classList.remove("visible");
    } else {
      form.classList.add("visible");
      updateButton.addEventListener("click", this.currentUpdateHandler);
    }
  }


  addTodo() {
    const instance = this;
    const addTodoForm = document.querySelector(".todo-form");
    const prioritySelect = document.querySelector("#priority")
    addTodoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const todo = {
        title: document.querySelector(".title").value,
        category: document.querySelector(".category").value || "Unsorted",
        dueDate: document.querySelector(".date").value,
        priority: prioritySelect.options[prioritySelect.selectedIndex].text,
        details: document.querySelector(".details").value,
      }
      List.addTodo(todo);
      instance.saveToLocalStorage();

      addTodoForm.reset();
      instance.toggleAddTodoForm();
      instance.displayTodoCards(filterKey);
    });
  }

  zoomOnTodo() {
    const zoomButtons = document.querySelectorAll(".zoom-button");
    zoomButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const TodoId = parseInt(button.parentElement.dataset.id);
        const todoData = List.getList().filter(todo => todo.id === TodoId)[0]
        document.querySelector(".update-title").value = todoData.title;
        document.querySelector(".update-category").value = todoData.category;
        document.querySelector(".update-date").value = todoData.dueDate;
        const prioritySelect = document.querySelector("#update-priority");
        prioritySelect.value = todoData.priority;
        document.querySelector(".update-details").value = todoData.details;
        this.toggleUpdateTodoForm(todoData);
      });
    });
  }

  checkTodo() {
    const checkButtons = document.querySelectorAll(".card-checklist");
    checkButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const TodoId = parseInt(button.parentElement.dataset.id);
        if (button.classList.contains("checked")) {
          const todoData = List.getList().filter(todo => todo.id === TodoId)[0]
          todoData.checklist = "not done";
          List.updateTodo(TodoId, todoData);
        } else if (button.classList.contains("unchecked")) {
          const todoData = List.getList().filter(todo => todo.id === TodoId)[0]
          todoData.checklist = "done";
          List.updateTodo(TodoId, todoData);
        }
        this.saveToLocalStorage();
        this.displayTodoCards(filterKey);
      });
    });
  }

  updateTodo(todoData) {
    const newTodoData = todoData;
    newTodoData.title = document.querySelector(".update-title").value;
    newTodoData.category = document.querySelector(".update-category").value;
    newTodoData.dueDate = document.querySelector(".update-date").value;
    const prioritySelect = document.querySelector("#update-priority");
    newTodoData.priority = prioritySelect.value;
    newTodoData.details = document.querySelector(".update-details").value;
    List.updateTodo(newTodoData.id, newTodoData);
    this.saveToLocalStorage();
    this.displayTodoCards(filterKey);
    this.toggleUpdateTodoForm(newTodoData);
  }

  removeTodo() {
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          const TodoId = parseInt(button.parentElement.dataset.id);
          List.removeTodo(TodoId);
          this.saveToLocalStorage();
          this.displayTodoCards(filterKey);
        });
    });
  }
}

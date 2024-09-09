import Todo from "./Todo";

export default class TodoList {
  constructor() {
    this.list = [];
    this.id = 0;
  }

  getList() {
    return this.list;
  }

  addTodo(todo) {
    const todoItem = new Todo(todo.title, todo.category, todo.dueDate, todo.priority, todo.details, todo.checklist, this.id);
    this.list.push(todoItem);
    this.id += 1;
  }

  removeTodo(id) {
    this.list = this.list.filter(todo => todo.id != id)
  }

  updateTodo(id, updatedTodo) {
    this.list = this.list.map(todo => {
      if (todo.id === id) {
        return updatedTodo;
      } else {
        return todo
      }
    })
  }
}

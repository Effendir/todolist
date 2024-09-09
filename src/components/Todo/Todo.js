export default class Todo {
  constructor(title, category, dueDate, priority = "low", details, checklist = "not done", id) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.dueDate = dueDate;
    this.priority = priority;
    this.details = details;
    this.checklist = checklist;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setCategory(category) {
    this.category = category;
  }

  getCategory() {
    return this.category;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }

  setDetails(details) {
    this.details = details;
  }

  getDetails() {
    return this.details;
  }

  setChecklist(checklist) {
    this.checklist = checklist;
  }

  getChecklist() {
    return this.checklist;
  }
}

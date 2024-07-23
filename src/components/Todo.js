export default class Todo {
  constructor(title, description, dueDate = "No date", priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
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

  setNotes(notes) {
    this.notes = notes;
  }

  getNotes() {
    return this.notes;
  }

  setChecklist(checklist) {
    this.checklist = checklist;
  }

  getChecklist() {
    return this.checklist;
  }
}

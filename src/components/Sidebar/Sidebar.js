import './Sidebar.scss';
import AddButton from "../Button/AddButton";

export default function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar", "lg:flex-auto", "lg:w-1/6", "flex", "flex-col", "lg:justify-between", "p-2");

  const categories = document.createElement("div");
  categories.classList.add("categories");
  const categoriesTitle = document.createElement("h2");
  categoriesTitle.classList.add("lg:text-xl", "lg:m-3");
  categoriesTitle.innerText = "Categories";
  categories.appendChild(categoriesTitle);

  const sortBy = document.createElement("div");
  sortBy.classList.add("sort-by");
  const sortByTitle = document.createElement("h2");
  sortByTitle.classList.add("lg:text-xl", "lg:m-3");
  sortByTitle.innerText = "Sort By";
  sortBy.appendChild(sortByTitle);

  const sortByAll = document.createElement("button");
  sortByAll.classList.add("sort-by-all", "m-2", "pr-1", "pl-1", "rounded");
  sortByAll.innerText = "All"
  sortBy.appendChild(sortByAll);

  const sortByDate = document.createElement("button");
  sortByDate.classList.add("sort-by-date", "m-2", "pr-1", "pl-1", "rounded");
  sortByDate.innerText = "Date"
  sortBy.appendChild(sortByDate);

  const sortByCheck = document.createElement("button");
  sortByCheck.classList.add("sort-by-check", "m-2", "pr-1", "pl-1", "rounded");
  sortByCheck.innerText = "Status"
  sortBy.appendChild(sortByCheck);

  const sortByPriority = document.createElement("button");
  sortByPriority.classList.add("sort-by-priority", "m-2", "pr-1", "pl-1", "rounded");
  sortByPriority.innerText = "Priority"
  sortBy.appendChild(sortByPriority);

  sidebar.appendChild(categories);
  sidebar.appendChild(sortBy);
  sidebar.appendChild(AddButton());

  document.querySelector(".container").appendChild(sidebar)
}

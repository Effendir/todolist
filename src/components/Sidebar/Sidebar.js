import './Sidebar.css';

function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  const p = document.createElement("p");
  p.innerText = "I am sidebar";
  sidebar.appendChild(p);

  document.querySelector(".container").appendChild(sidebar);
}

export default createSidebar;

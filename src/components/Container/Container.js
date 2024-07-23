import './Container.css';

function createContainer() {
  const container = document.createElement("div")
  container.classList.add("container");

  document.body.appendChild(container);
}

export default createContainer;

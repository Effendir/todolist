import './Container.scss';

export default function createContainer() {
  const container = document.createElement("div")
  container.classList.add("container");

  document.body.appendChild(container);
}

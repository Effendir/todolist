import './Main.css';

function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");
  const p = document.createElement("p");
  p.innerText = "I am main content";
  main.appendChild(p);

  document.querySelector(".container").appendChild(main);
}

export default createMain;

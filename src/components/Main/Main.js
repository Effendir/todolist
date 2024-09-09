import './Main.scss';

export default function createMain() {
  const main = document.createElement("div");
  main.classList.add("main", "flex-auto", "lg:w-5/6", "p-2", "flex", "flex-col", "gap-2");

  document.querySelector(".container").appendChild(main);
}

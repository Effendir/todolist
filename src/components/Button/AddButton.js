import './AddButton.scss';

export default function AddButton() {
  const button = document.createElement("div");
  const text = document.createElement("span");
  text.innerText = "+";
  text.classList.add("text-4xl")
  button.appendChild(text);
  button.classList.add("add-button", "rounded-full", "w-10", "h-10", "justify-self-end", "self-end", "shadow-md")

  return button
}

import './AddButton.scss';

export default function AddButton() {
  const button = document.createElement("div");
  const text = document.createElement("span");
  text.innerText = "+";
  text.classList.add("text-2xl")
  button.appendChild(text);
  button.classList.add("add-button", "rounded-full", "w-8", "h-8", "justify-self-end", "self-end", "shadow-md")

  return button
}

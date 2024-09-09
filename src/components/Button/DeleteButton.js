import './DeleteButton.scss';

export default function DeleteButton() {
  const button = document.createElement("div");
  const text = document.createElement("span");
  text.innerText = "+";
  text.classList.add("text-3xl")
  button.appendChild(text);
  button.classList.add("delete-button", "rounded-full", "w-7", "h-7", "justify-self-end", "shadow-md", "rotate-45")

  return button
}

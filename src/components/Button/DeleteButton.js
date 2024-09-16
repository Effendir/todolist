import './DeleteButton.scss';

export default function DeleteButton() {
  const button = document.createElement("button");
  button.innerText = "✕";
  button.classList.add("delete-button", "rounded-full", "w-7", "h-7", "justify-self-end", "shadow-md")

  return button
}

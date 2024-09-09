import './CloseButton.scss';

export default function CloseButton() {
  const button = document.createElement("div");
  const text = document.createElement("span");
  text.innerText = "+";
  text.classList.add("text-xl")
  button.appendChild(text);
  button.classList.add("close-button", "rounded-full", "w-5", "h-5", "shadow-md", "rotate-45", "self-center")

  return button
}

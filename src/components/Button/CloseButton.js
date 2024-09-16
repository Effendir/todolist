import './CloseButton.scss';

export default function CloseButton() {
  const button = document.createElement("button");
  button.innerText = "✕";
  button.classList.add("close-button", "rounded-full", "w-5", "h-5", "shadow-md", "self-center")

  return button
}

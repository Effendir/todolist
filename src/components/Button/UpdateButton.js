import './UpdateButton.scss';

export default function UpdateButton() {
  const update = document.createElement("div");
  update.classList.add("update-button", "rounded-full", "w-7", "h-7", "shadow-md", "self-center")
  update.innerHTML = `<i class="fa-solid fa-pen style" "color: #7895b2;"></i>`

  return update
}

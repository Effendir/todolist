import './ZoomButton.scss';

export default function DeleteButton() {
  const zoom = document.createElement("div");
  zoom.classList.add("zoom-button", "rounded-full", "w-7", "h-7", "shadow-md", "justify-self-end")
  zoom.innerHTML = `<i class="fa-solid fa-magnifying-glass" style="color: #7895b2;"></i>`

  return zoom
}

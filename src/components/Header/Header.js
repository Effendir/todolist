import './Header.scss';

export default function createHeader(sitetitle) {
  const header = document.createElement("header");
  header.classList.add("content-center", "justify-center", "flex", "p-3")
  const h1 = document.createElement("h1");
  h1.classList.add("lg:text-3xl", "font-bold")
  const title = sitetitle;
  h1.append(title);
  header.append(h1);

  document.body.appendChild(header);
}

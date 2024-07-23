import './Header.css';

function createHeader() {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const title = "Todo List";
  h1.append(title);
  header.append(h1);

  document.body.appendChild(header);
}

export default createHeader;

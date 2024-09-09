import _ from 'lodash';
import './style.scss';
import UI from "./components/UI/UI"
const siteUI = new UI()

document.addEventListener('DOMContentLoaded', () => {
  fontAwesome();
  siteUI.initialize();
});

function fontAwesome() {
  let script = document.createElement("script");
  script.src = "https://kit.fontawesome.com/c41c28ac80.js";
  document.body.appendChild(script);
}

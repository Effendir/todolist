import _ from 'lodash';
import './style.css';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

document.addEventListener('DOMContentLoaded', () => {
  Header();
  Container();
  Sidebar();
  Main();
  Footer();
  fontAwesome();
});

function fontAwesome() {
  let script = document.createElement("script");
  script.src = "https://kit.fontawesome.com/c41c28ac80.js";
  document.body.appendChild(script);
}

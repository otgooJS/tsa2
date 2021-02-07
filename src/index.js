import _ from "lodash";
import "./style.css";
import "./scss/main.scss";
import Icon from "./icon.png";
import printMe from "./print.js";

function h1Text() {
  var x = document.createElement("H1");
  var t = document.createTextNode("Welcome to My Homepage");
  x.appendChild(t);
  x.classList.add("h1-style");
  document.body.appendChild(x); //text-iig hevlej bn
}
function componentH1() {
  const element = document.createElement("div");
  const btn1 = document.createElement("button");

  btn1.innerHTML = "Click me and create a H1 element with some text!";
  btn1.onclick = h1Text;
  element.appendChild(btn1); //ene bhgyi bol button maani garch irehgui bn

  return element; //ene bhgyi bol type error blj bn
}

document.body.appendChild(componentH1());

function component() {
  const element = document.createElement("div");
  const btn1 = document.createElement("button");
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hi33", "webpack"], " ");
  element.classList.add("hello");

  btn1.innerHTML = "Click me and check the console!";
  btn1.onclick = printMe;
  element.appendChild(btn1);

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

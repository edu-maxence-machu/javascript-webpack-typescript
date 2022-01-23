import "../src/style.css";
import "./styles/scss/main.scss";
import webpackgif from "./assets/images/webpack.gif";
import { Footer } from "./footer";
import { Header } from "./header";

const fetch = fetch("https://api.github.com/users/webpack/repos");

console.log("Main index.js is here and reloaded ");

let header = new Header();
let firstHeading = header.getFirstHeading();
console.log(firstHeading);

let footer = new Footer();
let footerText = footer.getFooterText();
console.log(footerText);

document.getElementById("webpack-gif").setAttribute("src", webpackgif);

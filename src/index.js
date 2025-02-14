import "./css/modern-reset.css";
import "./css/styles.css";
import header from "./header";
import home from "./home";
import menu from "./menu";

import ramen from "./assets/images/ramen2.jpg";
import plate from "./assets/images/plate.jpg";

const content = document.getElementById("content");

const menuOne = {
    title: "MAIN MENU",
    description: "A variety of dishes made with fresh produce from local independent retailers and specialities direct from Japan.",
    link: "https://www.fakelink.com",
    img1: ramen,
    img2: plate,
}

const menus = [menuOne];

header();
// /home();
menu(content, menus);

import "./css/modern-reset.css";
import "./css/styles.css";
import headerModule from "./headerModule";
import homeModule from "./homeModule";
import menuModule from "./menuModule";
import reservationsModule from "./reservationsModule";
import eventsModule from "./eventsModule";


const navParent = document.querySelector(".header");
const contentParent = document.getElementById("content");


const homeInstance = homeModule(contentParent);
const menuInstance = menuModule(contentParent);
const reservationsInstance = reservationsModule(contentParent);
const eventsInstance = eventsModule(contentParent);
const headerInstance = headerModule(navParent, homeInstance, menuInstance, reservationsInstance, eventsInstance);

headerInstance.render();
homeInstance.render();


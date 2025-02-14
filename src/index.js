import "./css/modern-reset.css";
import "./css/styles.css";
import home from "./home";
import header from "./header";
import menu from "./menu";
import reservations from "./reservations";

const homeInstance = home();

header(homeInstance, menu, reservations);

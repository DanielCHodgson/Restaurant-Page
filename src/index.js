import "./css/modern-reset.css";
import "./css/styles.css";
import homeModule from "./homeModule";
import headerModule from "./headerModule";
import menuModule from "./menuModule";
import reservationsModule from "./reservationsModule";

const homeInstance = homeModule();

headerModule(homeInstance, menuModule, reservationsModule);

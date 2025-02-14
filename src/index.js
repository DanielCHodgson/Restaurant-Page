import "./css/modern-reset.css";
import "./css/styles.css";
import homeModule from "./homeModule";
import headerModule from "./headerModule";

const homeInstance = homeModule();

headerModule(homeInstance);

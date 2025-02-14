import logo from "./assets/images/logo.png";
import eventsModule from "./eventsModule.js";
import homeModule from "./homeModule.js";
import menu from "./menuModule.js";
import reservationsModule from "./reservationsModule.js";

export default function headerModule(homeInstance) {

    const header = document.querySelector(".header");
    const nav = header.querySelector(".nav");
    const tabs = [];
    const content = document.getElementById("content");

    function renderHeading() {
        const fragment = document.createDocumentFragment();

        const logoWrapper = document.createElement("div");
        logoWrapper.classList.add("logo-wrapper");

        const logoImg = document.createElement("img");
        logoImg.id = "logo";
        logoImg.src = logo;
        logoWrapper.append(logoImg);

        const heading = document.createElement("h1");
        heading.textContent = "饗宴";
        logoWrapper.append(heading);

        fragment.append(logoWrapper);
        header.prepend(fragment);
    }


    function renderNav() {
        const buttonNames = ["MENUS", "RESERVATIONS", "EVENTS"];

        for (let i = 0; i < 3; i++) {
            const button = document.createElement("button");
            button.classList.add("tab");
            button.dataset.tabId = i;
            button.textContent = buttonNames[i];
            nav.appendChild(button);
            tabs.push(button);
        }
    }

    function clearContent() {
        if (content.firstChild)
            content.firstChild.remove();
    }

    function handleTabClick(event) {

        if (content.querySelector("#carousel")) {
            homeInstance.stopBanner();
        }

        const tab = event.currentTarget;

        switch (tab.dataset.tabId) {
            case "0":
                clearContent();
                menu();
                break;
            case "1":
                clearContent();
                reservationsModule(content);
                break;
            case "2":
                clearContent();
                eventsModule();
                break;

        }
    }

    function handleHomeClick() {
        clearContent();
        homeInstance = homeModule();
    }

    function render() {
        renderHeading();
        renderNav();
    }


    function bindEvents() {
        tabs.forEach(tab => tab.addEventListener("click", handleTabClick));
        header.querySelector(".logo-wrapper").addEventListener("click", handleHomeClick);
    }


    const getNav = () => nav;

    render();
    bindEvents()

}
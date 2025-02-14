import logo from "./assets/images/logo.png";
import home from "./homeModule.js";


export default function headerModule(homeInstance, menu, reservations) {

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
            console.log("yo")
            homeInstance.stopBanner();
        }

        const tab = event.currentTarget;

        switch (tab.dataset.tabId) {
            case "0":
                clearContent();
                menu();
                console.log("Menus")
                break;
            case "1":
                clearContent();
                reservations(content);
                console.log("reservations");
                break;
            case "2":
                clearContent();
                console.log("Events");
                break;

        }
    }

    function handleHomeClick() {
        clearContent();
        homeInstance = home();
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
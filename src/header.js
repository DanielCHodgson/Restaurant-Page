import logo from "./assets/images/logo.png";

const header = () => {

    const header = document.querySelector(".header");
    const nav = header.querySelector(".nav");

    render();
    bindEvents();

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
        }
    }

    function handleTabClick(tab) {
       

    }

    function render() {

        renderHeading();
        renderNav();
    }


    function bindEvents() {
        //let tabs = nav.getElementsByClassName("tab");
        //tabs.array.forEach(tab => tab.addEventHandler("click", handleTabClick(tab))); 
    }

}

export default header;
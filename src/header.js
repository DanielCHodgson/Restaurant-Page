import logo from "./assets/images/logo.png";

const header = () => {

    const header = document.querySelector(".header");
    const nav = header.querySelector(".nav");


    render();


    function render() {

        const logoWrapper = document.createElement("div");
        logoWrapper.classList.add("logo-wrapper");
        const logoImg = document.createElement("img");
        logoImg.id = "logo";
        logoImg.src = logo;
        logoWrapper.append(logoImg);

        const heading = document.createElement("h1");
        heading.textContent = "饗宴";
        logoWrapper.append(heading);

        const buttonNames = ["MENUS", "RESERVATIONS", "EVENTS"];

        for (let i = 0; i < 3; i++) {
            const button = document.createElement("button");
            button.textContent = buttonNames[i];
            nav.appendChild(button);
        }

        header.prepend(logoWrapper);
    }

}

export default header;
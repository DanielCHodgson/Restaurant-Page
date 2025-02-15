import logo from "./assets/images/logo.png";

export default function parentNodeModule(parentNode, home, menus, reservations, events) {

    const navLinks = parentNode.querySelector(".nav");
    let currentTab = home;

    function renderHeading() {
        const fragment = document.createDocumentFragment();
        const logoWrapper = document.createElement("div");
        logoWrapper.classList.add("logo-wrapper");

        const logoImg = document.createElement("img");
        logoImg.id = "logo";
        logoImg.src = logo;
        logoWrapper.append(logoImg);

        const heading = document.createElement("h1");
        heading.textparentNode = "饗宴";
        logoWrapper.append(heading);

        fragment.append(logoWrapper);
        parentNode.prepend(fragment);
    }

    function renderNavLinks() {
        const buttonNames = ["MENUS", "RESERVATIONS", "EVENTS"];

        buttonNames.forEach((name, i) => {
            const button = document.createElement("button");
            button.classList.add("tab");
            button.dataset.tabId = i;
            button.textContent = name;
            navLinks.appendChild(button);
            button.addEventListener("click", handleTabClick);
        });
    }


    function handleTabClick(event) {

        switch (event.currentTarget.dataset.tabId) {
            case "0":
                switchToTab(currentTab, menus);
                break;
            case "1":
                switchToTab(currentTab, reservations);
                break;
            case "2":
                switchToTab(currentTab, events);
                break;
        }
    }

    function handleHomeClick() {
        switchToTab(currentTab, home);
    }

    function render() {
        renderHeading();
        renderNavLinks();
        parentNode.querySelector(".logo-wrapper").addEventListener("click", handleHomeClick);
    }

    function destroy() {
        parentNode.innerHTML = "";
    }

    function switchToTab(oldTab, newTab) {
        if (oldTab === newTab) return;
        oldTab?.destroy();
        currentTab = newTab;
        currentTab?.render();
    }

    return {
        render,
        destroy
    }

}

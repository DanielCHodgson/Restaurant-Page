import menuPlate from "./assets/images/menu-plate.jpg";
import ramen from "./assets/images/ramen2.jpg";
import plate from "./assets/images/plate.jpg";
import lunch1 from "./assets/images/lunch1.jpg";
import lunch2 from "./assets/images/lunch2.jpg";

export default function menuModule(parentNode) {

    const menuOne = {
        title: "MAIN MENU",
        description: "A variety of dishes made with fresh produce from local independent retailers and specialities direct from Japan.",
        link: "https://www.fakelink.com",
        img1: ramen,
        img2: plate,
    }

    const menuTwo = {
        title: "Lunch MENU",
        description: "Lighter choices made with the same fresh produce and specialities. Available 12pm-3pm",
        link: "https://www.fakelink.com",
        img1: lunch1,
        img2: lunch2,
    }

    const menuThree = {
        title: "Drinks MENU",
        description: "Browse our range of imported beers, spirits, doft drinks and more. A selection of hot drinks is also available.",
        link: "https://www.fakelink.com",
        img1: plate,
        img2: ramen,
    }

    const menus = [menuOne, menuTwo];

    function renderMenuItem(menu, menuList) {
        const fragment = document.createDocumentFragment();

        const tile = document.createElement("div");
        tile.classList.add("menu-item");

        tile.appendChild(createMenuImage(menu.img1));
        tile.appendChild(createMenuDetails(menu));
        tile.appendChild(createMenuImage(menu.img2));
        fragment.appendChild(tile);
        menuList.appendChild(fragment);
    }

    function renderMenuHeader(wrapper) {
        const container = document.createElement("div");
        container.classList.add("content-header")
        container.style.backgroundImage = `url('${menuPlate}')`;

        const header = document.createElement("h2");
        header.textContent = "MENUS";
        container.appendChild(header);
        wrapper.appendChild(container);
    }

    function createMenuImage(imgSrc) {
        const img = document.createElement("img");
        img.classList.add("menu-img");
        img.src = imgSrc;
        return img;
    }


    function createMenuDetails(menu) {
        const details = document.createElement("div");
        details.classList.add("menu-details");

        const title = document.createElement("h2");
        title.textContent = menu.title;
        details.appendChild(title);

        const description = document.createElement("p");
        description.textContent = menu.description;
        details.appendChild(description);

        const link = document.createElement("a");
        link.textContent = `VIEW MENU`;
        link.href = menu.link;
        details.appendChild(link);

        return details;
    }


    function render() {

        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        renderMenuHeader(wrapper);

        const menuList = document.createElement("div");
        menuList.id = "menu-list";
        wrapper.appendChild(menuList);
        menus.forEach(menu => renderMenuItem(menu, menuList));

        

        parentNode.appendChild(wrapper);
    }

    function destroy() {
        parentNode.innerHTML = "";
    }


    return {
        render,
        destroy
    }
};

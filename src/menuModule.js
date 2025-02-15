import fish from "./assets/images/fish.jpg";
import ramen from "./assets/images/ramen2.jpg";
import plate from "./assets/images/plate.jpg";

export default function menuModule(parentNode) {

    const menuOne = {
        title: "MAIN MENU",
        description: "A variety of dishes made with fresh produce from local independent retailers and specialities direct from Japan.",
        link: "https://www.fakelink.com",
        img1: ramen,
        img2: plate,
    }

    const menus = [menuOne];

    function RenderMenuItem(menu, menuList, wrapper) {
        const fragment = document.createDocumentFragment();

        const tile = document.createElement("div");
        tile.classList.add("menu-item");

        tile.appendChild(createMenuImage(menu.img1));
        tile.appendChild(createMenuDetails(menu));
        tile.appendChild(createMenuImage(menu.img2));
        fragment.appendChild(tile);
        menuList.appendChild(fragment);
        wrapper.appendChild(menuList);
    }

    function renderMenuHeader(wrapper) {
        const container = document.createElement("div");
        container.classList.add("content-header")
        container.style.backgroundImage = `url('${fish}')`;

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

        const menuList = document.createElement("div");
        menuList.id = "menu-list";

        renderMenuHeader(wrapper);
        menus.forEach(menu => RenderMenuItem(menu, menuList, wrapper));

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

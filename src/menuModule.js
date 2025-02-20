import menuPlate from "./assets/images/menu-plate.jpg";
import ramen from "./assets/images/ramen2.jpg";
import plate from "./assets/images/plate.jpg";
import lunch1 from "./assets/images/lunch1.jpg";
import lunch2 from "./assets/images/lunch2.jpg";
import beers from "./assets/images/beers.jpg";
import softDrinks from "./assets/images/soft-drinks.jpg";
import contentBannerModule from "./contentBannerModule";

export default function menuModule(parentNode) {

    const banner = contentBannerModule().generateBanner(menuPlate, "MENUS");

    const menuOne = {
        title: "MAIN MENU",
        description: "A variety of dishes made with fresh produce from local independent retailers and specialities direct from Japan.",
        link: "https://www.fakelink.com",
        img1: lunch1,
        img2: plate,
    }

    const menuTwo = {
        title: "Lunch MENU",
        description: "Lighter choices made with the same fresh produce and specialities. Available 12pm-3pm",
        link: "https://www.fakelink.com",
        img1: ramen,
        img2: lunch2,
    }

    const menuThree = {
        title: "Drinks MENU",
        description: "Browse our range of imported beers, spirits, soft drinks and more. A selection of hot drinks is also available.",
        link: "https://www.fakelink.com",
        img1: beers,
        img2: softDrinks,
    }

    const menus = [menuOne, menuTwo, menuThree];

    function createMenuItem(menu) {
        const tile = document.createElement("div");
        tile.classList.add("menu-item");

        tile.append(createMenuImage(menu.img1));
        tile.append(createMenuDetails(menu));
        tile.append(createMenuImage(menu.img2));

        return tile;
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

        const fragment = document.createDocumentFragment();
        fragment.append(banner);

        const menuList = document.createElement("div");
        menuList.id = "menu-list";

        const menuFragment = document.createDocumentFragment();
        menus.forEach(menu => menuFragment.append(createMenuItem(menu)));

        menuList.appendChild(menuFragment);

        fragment.append(menuList);
        wrapper.appendChild(fragment);
        parentNode.appendChild(wrapper);

        requestAnimationFrame(() => {
            wrapper.classList.add("show");
        });
    }


    function destroy() {
        parentNode.innerHTML = "";
    }

    return {
        render,
        destroy
    }
};

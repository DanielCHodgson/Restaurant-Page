import fish from "./assets/images/fish.jpg";
import ramen from "./assets/images/ramen2.jpg";
import plate from "./assets/images/plate.jpg";

const menu = () => {

    const parentNode = document.getElementById("content");

    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("wrapper");

    const menuList = document.createElement("div");
    menuList.id = "menu-list";


    const menuOne = {
        title: "MAIN MENU",
        description: "A variety of dishes made with fresh produce from local independent retailers and specialities direct from Japan.",
        link: "https://www.fakelink.com",
        img1: ramen,
        img2: plate,
    }
    
    const menus = [menuOne];
    

    function RenderMenuItem(menu) {
        const fragment = document.createDocumentFragment();

        const tile = document.createElement("div");
        tile.classList.add("menu-item");

        
        tile.appendChild(createMenuImage(menu.img1));
        tile.appendChild(createMenuDetails(menu));
        tile.appendChild(createMenuImage(menu.img2));
        fragment.appendChild(tile);
        menuList.appendChild(fragment);
        menuWrapper.appendChild(menuList);
    }

    function renderMenuHeader() {
        const container = document.createElement("div");
        container.classList.add("menu-header")
        container.style.backgroundImage = `url('${fish}')`;


        const header = document.createElement("h2");
        header.textContent = "MENUS";
        container.appendChild(header);
        menuWrapper.appendChild(container);
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

        const description =  document.createElement("p");
        description.textContent = menu.description;
        details.appendChild(description);

        const link = document.createElement("a");
        link.textContent = `VIEW MENU`;
        link.href = menu.link;
        details.appendChild(link);

        return details;
    }


    function render() {

        if (parentNode.firstChild) {
            parentNode.firstChild.remove();
        }
        renderMenuHeader();
        menus.forEach(menu => RenderMenuItem(menu));
        parentNode.appendChild(menuWrapper);
    }

    render();

    return {


    }
};

export default menu;
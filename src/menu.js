import fish from "./assets/images/fish.jpg";

const menu = (parentNode, menus) => {

    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("wrapper");

    const menuList = document.createElement("div");
    menuList.id = "menu-list";

    

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

        console.log(menu);

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
        renderMenuHeader();
        menus.forEach(menu => RenderMenuItem(menu));
        parentNode.appendChild(menuWrapper);
    }

    render();

    return {


    }
};

export default menu;
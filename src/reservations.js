import restaurant from "./assets/images/restaurant2.jpg";

const reservations = (parentNode) => {

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    parentNode.appendChild(wrapper);

    function renderHeader() {
        const container = document.createElement("div");
        container.classList.add("menu-header");
        container.style.backgroundImage = `url('${restaurant}')`;

        const header = document.createElement("h2");
        header.textContent = "RESERVATIONS";
        container.appendChild(header);
        wrapper.appendChild(container);
    }



    function renderCalendar() {

        const reservations = document.createElement("div");
        reservations.classList.add("reservations");

        const label = document.createElement("label");
        label.for = "date-input";
        label.textContent = "Choose a date:";

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.id = "date-input";
        dateInput.readOnly = true;
        dateInput.placeholder = "Select a Date";

        reservations.appendChild(label);
        reservations.appendChild(dateInput);
        wrapper.appendChild(reservations);
    }




    render()

    function render() {
        renderHeader();
        renderCalendar();
    }

};


export default reservations;
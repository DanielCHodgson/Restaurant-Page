import restaurant from "./assets/images/restaurant2.jpg";

export default function reservationsModule(parentNode) {

    function renderHeader(wrapper) {
        const container = document.createElement("div");
        container.classList.add("content-header");
        container.style.backgroundImage = `url('${restaurant}')`;

        const header = document.createElement("h2");
        header.textContent = "RESERVATIONS";
        container.appendChild(header);
        wrapper.appendChild(container);
    }

    function renderCalendar(wrapper) {
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


    function render() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        renderHeader(wrapper);
        renderCalendar(wrapper)
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

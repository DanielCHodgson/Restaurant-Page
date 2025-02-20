import restaurant from "./assets/images/restaurant2.jpg";
import contentBannerModule from "./contentBannerModule";

export default function reservationsModule(parentNode) {
    const banner = contentBannerModule().generateBanner(restaurant, "RESERVATIONS");

    function renderDatePicker(wrapper) {
        const fragment = document.createDocumentFragment();

        const reservations = document.createElement("div");
        reservations.classList.add("reservations");

        const dateEntry = document.createElement("div");
        dateEntry.classList.add("date-selector");

        const label = document.createElement("label");
        label.for = "date-input";
        label.textContent = "Choose a date:";
        dateEntry.appendChild(label);

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.id = "date-input";
        dateInput.readOnly = true;
        dateInput.placeholder = "Select a Date";
        dateEntry.appendChild(dateInput);

        const disclaimer = document.createElement("h2");
        disclaimer.textContent = "This page is ugly and unfinished!";

        reservations.appendChild(dateEntry);
        reservations.appendChild(disclaimer);

        fragment.appendChild(reservations);

        wrapper.appendChild(fragment);
    }

    function render() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        const fragment = document.createDocumentFragment();
        fragment.appendChild(banner);

        renderDatePicker(fragment);

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
    };
};

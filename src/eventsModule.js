import eventImg from "./assets/images/event.jpg"

export default function eventsModule(parentNode) {


    function renderEventsHeader(wrapper) {
        const container = document.createElement("div");
        container.classList.add("content-header")
        container.style.backgroundImage = `url('${eventImg}')`;

        const header = document.createElement("h2");
        header.textContent = "EVENTS";
        container.appendChild(header);
        wrapper.appendChild(container);
    }


    function render() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        renderEventsHeader(wrapper);
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

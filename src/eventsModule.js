export default function eventsModule() {

    const parentNode = document.getElementById("content");
    const eventsWrapper = document.createElement("div");
    eventsWrapper.classList.add("wrapper");
   

    function renderEventsHeader() {
        const container = document.createElement("div");
        container.classList.add("content-header")
        container.style.backgroundImage = `url('${event}')`;

        const header = document.createElement("h2");
        header.textContent = "EVENTS";
        container.appendChild(header);
        eventsWrapper.appendChild(container);
    }


    function render() {
        renderEventsHeader();
        parentNode.appendChild(eventsWrapper);
    }

    render();
};

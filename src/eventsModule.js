import eventImg from "./assets/images/event.jpg"
import sake from "./assets/images/sake.jpg"
import contentBannerModule from "./contentBannerModule";

export default function eventsModule(parentNode) {

    const banner = contentBannerModule().generateBanner(eventImg, "EVENTS");

     const eventOne = {
            title: "Taste Tokyo: FEAST's Sake Tasting Debut",
            date: "Mon 21st May",
            location: "FEAST restaurant",
            description: "Our first-ever sake tasting at FEAST, featuring five exclusive blends from the renowned brewery.",
            link: "https://www.fakelink.com",
            img: sake,
        }
    
    const events = [eventOne];


    function renderEventsSlug(wrapper){
        const slug = document.createElement("p");
        slug.classList.add("slug")
        slug.textContent="Discover a year-round lineup of exciting events, from high-energy DJ nights to serene sake tastings at sunset. Immerse yourself in unforgettable moments and the magic of Japan. Many events are hosted at our Sister bar—check the location when purchasing your tickets. Get ready to celebrate in style!";
        wrapper.appendChild(slug);
    }

    function renderUpcomingEvents(wrapper, events) {

        const heading = document.createElement("h2");
        heading.textContent = "UPCOMING EVENTS";
        heading.id = "events-header";
        wrapper.appendChild(heading);

        const eventList = document.createElement("div");
        eventList.id = "event-list";
        events.forEach(event => renderEventItem(event, eventList));

        wrapper.appendChild(eventList);
    }


    function renderEventItem(event, eventList) {
        const fragment = document.createDocumentFragment();

        const tile = document.createElement("div");
        tile.classList.add("event-item");

        tile.appendChild(createEventImage(event.img));
        tile.appendChild(createEventDetails(event));
        fragment.appendChild(tile);

        eventList.appendChild(fragment);
    }

    function createEventImage(imgSrc) {
        const img = document.createElement("img");
        img.classList.add("event-img");
        img.src = imgSrc;
        return img;
    }


    function createEventDetails(event) {
        const details = document.createElement("div");
        details.classList.add("event-details");

        const title = document.createElement("p");
        title.textContent = event.title;
        details.appendChild(title);

        const location = document.createElement("p");
        location.textContent = ` ${event.date} | ${event.location}`;
        details.appendChild(location);

        const description = document.createElement("p");
        description.textContent = event.description;
        details.appendChild(description);

        const link = document.createElement("button");
        link.textContent = "BUY TICKETS";
        link.href = event.link;
        details.appendChild(link);

        return details;
    }


    function render() {

        const fragment = document.createDocumentFragment();
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        fragment.appendChild(banner);
        renderEventsSlug(fragment);
        renderUpcomingEvents(fragment, events);
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

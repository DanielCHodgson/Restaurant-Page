import restaurant from "./assets/images/restaurant.jpg";
import ramen from "./assets/images/ramen2.jpg";
import plate from "./assets/images/plate.jpg";

export default function homeModule(parentNode) {
    let currentIndex = 1;
    let timer;
    let carousel;

    const backgrounds = [restaurant, ramen, plate];
    const phrases = [`
        <h2 class="subheading">Good food<br>
        <span class="sub-tag">美味しい料理</span><br>
        Good company<br>
        <span class="sub-tag">良い会社</span><br>
        Good times<br>
        <span class="sub-tag">いい時代だ</span>
    </h2>
    `, `
        <h2 class="subheading">Japanese<br>
        soul food<br>
        in the heart<br>
        of the city</h2>
    `, `
        <h2 class="subheading">Japanese<br>
        soul food<br>
        in the heart<br>
        of the city</h2>
    `];

    const callToActions = createCallToActions(phrases);

    function createCallToActions(phrases) {
        const elements = [];
        for (let i = 0; i < phrases.length; i++) {
            const callToAction = document.createElement("div");
            callToAction.classList.add("call-to-action");
            callToAction.innerHTML = phrases[i];
            elements.push(callToAction);
        }
        return elements;
    }

    function runBanner() {
        stopBanner();
        timer = setInterval(function () {

            const currentBgImage = document.querySelector('.banner-image');

            const newBgImage = document.createElement('div');
            newBgImage.classList.add('banner-image');
            newBgImage.style.backgroundImage = `url(${backgrounds[currentIndex]})`;

            const newCallToAction = callToActions[currentIndex];
            newBgImage.appendChild(newCallToAction);
            carousel.appendChild(newBgImage);

            //toggle class incrementally to fade images in and out smoothly
            setTimeout(() => newBgImage.classList.add("active"), 50);
            setTimeout(() => currentBgImage?.classList.remove("active"), 100);
            setTimeout(() => currentBgImage?.remove(), 2000);

            currentIndex++;
            if (currentIndex >= backgrounds.length) {
                currentIndex = 0;
            }
        }, 10000);
    }

    function renderInitialBanner() {
        const firstBgImage = document.createElement("div");
        firstBgImage.classList.add("banner-image", "active");
        firstBgImage.id = "first-banner";
        firstBgImage.style.backgroundImage = `url(${backgrounds[0]})`;
        firstBgImage.appendChild(callToActions[0]);
        carousel.appendChild(firstBgImage);
        parentNode.appendChild(carousel);
    }


    function stopBanner() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    function render() {
        carousel = document.createElement("div");
        carousel.id = "carousel";
        renderInitialBanner();
        runBanner();
    }

    function destroy() {
        stopBanner();
        parentNode.innerHTML = "";
    }


    return {
        render,
        destroy,
    };
};

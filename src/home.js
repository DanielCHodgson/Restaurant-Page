import restaurant from "./assets/images/restaurant.jpg";
import sushi from "./assets/images/ramen2.jpg";
import tonkatsu from "./assets/images/plate.jpg";

const home = () => {
    const content = document.getElementById("content");
    const backgrounds = [restaurant, sushi, tonkatsu];
    const callToActions = createCallToActions();
    let currentIndex = 1;
    let timer;

    function createCallToActions() {
        const callToActionOne = document.createElement("div");
        callToActionOne.classList.add("call-to-action");
        callToActionOne.innerHTML = `
            <h2 class="subheading">Good food<br>
                <span class="sub-tag">美味しい料理</span><br>
                Good company<br>
                <span class="sub-tag">良い会社</span><br>
                Good times<br>
                <span class="sub-tag">いい時代だ</span>
            </h2>`;

        const callToActionTwo = document.createElement("div");
        callToActionTwo.classList.add("call-to-action");
        callToActionTwo.innerHTML = `
            <h2 class="subheading">Japanese<br>
            soul food<br>
            in the heart<br>
            of the city</h2>
        `;

        const callToActionThree = document.createElement("div");
        callToActionThree.classList.add("call-to-action");
        callToActionThree.innerHTML = `
            <h2 class="subheading">Award-winning<br>
            menus all<br>
            year-round</h2>
        `;

        return [callToActionOne, callToActionTwo, callToActionThree];
    }

    function runBanner() {
        if (timer) clearInterval(timer);
        timer = setInterval(function () {

            const currentBgImage = document.querySelector('.banner-image');

            const newBgImage = document.createElement('div');
            newBgImage.classList.add('banner-image');
            newBgImage.style.backgroundImage = `url(${backgrounds[currentIndex]})`;

            const newCallToAction = callToActions[currentIndex];
            newBgImage.appendChild(newCallToAction);
            content.appendChild(newBgImage);


            setTimeout(() => {
                newBgImage.classList.add('active');
            }, 50);

            setTimeout(() => {
                currentBgImage && currentBgImage.classList.remove('active');
            }, 100);


            setTimeout(() => {
                currentBgImage.remove();
            }, 2000);


            currentIndex++;
            if (currentIndex >= backgrounds.length) {
                currentIndex = 0;
            }
        }, 10000);
    }

    function renderInitialBanner() {
        const newBgImage = document.createElement('div');
        newBgImage.classList.add('banner-image');
        newBgImage.id = "first-banner";
        newBgImage.style.backgroundImage = `url(${backgrounds[0]})`;
        newBgImage.appendChild(callToActions[0]);
        content.appendChild(newBgImage);
    }


    function render() {
        renderInitialBanner();
        runBanner();
    }

    render();

    return {};
};

export default home;
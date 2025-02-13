import restaurant from "./assets/images/restaurant.jpg";
import sushi from "./assets/images/sushi.jpg";
import tonkatsu from "./assets/images/tonkatsu.jpg";

const home = () => {
    const content = document.getElementById("content");
    const backgrounds = [restaurant, sushi, tonkatsu];
    const callToActions = createCallToActions();

    let currentIndex = 1;
    let timer;

    function createCallToActions() {
        const callToActionOne = document.createElement("div");
        callToActionOne.innerHTML = `
            <h2 class="subheading">Good food<br>
                <span class="sub-tag">美味しい料理</span><br>
                Good company<br>
                <span class="sub-tag">良い会社</span><br>
                Good times<br>
                <span class="sub-tag">いい時代だ</span>
            </h2>`;

        const callToActionTwo = document.createElement("div");
        callToActionTwo.innerHTML = `
            <h2>Japanese soul food in the heart of Kelham</h2>
        `;

        const callToActionThree = document.createElement("div");
        callToActionThree.innerHTML = `
            <h2>Award-winning menus all year-round</h2>
        `;

        return [callToActionOne, callToActionTwo, callToActionThree];
    }

    function runBanner(bannerWrapper) {
        if (timer) clearInterval(timer);

        timer = setInterval(function () {

            const currentCallToAction = bannerWrapper.querySelector('.subheading, h2');
            if (currentCallToAction) {
                currentCallToAction.remove();
            }

            const newCallToAction = callToActions[currentIndex];
            newCallToAction.classList.add('subheading'); 
            bannerWrapper.appendChild(newCallToAction);

            bannerWrapper.style.backgroundImage = `url(${backgrounds[currentIndex]})`;

            currentIndex++;
            if (currentIndex >= backgrounds.length) {
                currentIndex = 0;
            }
        }, 5000);  
    }

    function render() {
        const bannerWrapper = document.createElement("div");
        bannerWrapper.classList.add("banner-wrapper");

        bannerWrapper.style.backgroundImage = `url(${backgrounds[0]})`;
        bannerWrapper.appendChild(callToActions[0]);

        runBanner(bannerWrapper);
        content.append(bannerWrapper);
    }

    render();

    return {};
};

export default home;
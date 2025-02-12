import backdrop from "./assets/images/restaurant.jpg";

const home = () => {

    const content = document.getElementById("content");


    render();


    function render() {


        const bannerWrapper = document.createElement("div");
        bannerWrapper.classList.add("banner-wrapper")
        bannerWrapper.style.backgroundImage = `url(${backdrop})`

        const callToAction = document.createElement("div");
        callToAction.innerHTML = `
            <h2 class="subheading">Good food<br>
                <span class="sub-tag">美味しい料理</span><br>
                Good company<br>
                <span class="sub-tag">良い会社</span><br>
                Good times<br>
                <span class="sub-tag">いい時代だ</span>
            </h2>`;


        bannerWrapper.appendChild(callToAction);
        content.append(bannerWrapper);
    }

    /*

    function render() {

        const bannerWrapper = document.createElement("div");
        bannerWrapper.classList.add("banner-wrapper")
        bannerWrapper.style.backgroundImage = `url(${backdrop})`

        const subHeading1 = document.createElement("h2");
        subHeading1.classList.add("subheading");
        subHeading1.innerText = "GOOD FOOD,";

        const subHeadingTag1 = document.createElement("p");
        subHeadingTag1.textContent = "美味しい料理"
        subHeadingTag1.classList.add("sub-tag")

        const subHeading2 = document.createElement("h2");
        subHeading2.classList.add("subheading");
        subHeading2.innerText = "GOOD FOOD,";
        
        const subHeadingTag2 = document.createElement("p");
        subHeadingTag2.textContent = "良い会社"
        subHeadingTag2.classList.add("sub-tag")

        const subHeading3 = document.createElement("h2");
        subHeading3.classList.add("subheading");
        subHeading3.innerText = "GOOD FOOD,";

        const subHeadingTag3 = document.createElement("p");
        subHeadingTag3.textContent = "いい時代だ";
        subHeadingTag3.classList.add("sub-tag")

        bannerWrapper.appendChild(subHeading1);
        bannerWrapper.appendChild(subHeadingTag1)
        bannerWrapper.appendChild(subHeading2);
        bannerWrapper.appendChild(subHeadingTag2)
        bannerWrapper.appendChild(subHeading3);
        bannerWrapper.appendChild(subHeadingTag3)

        content.append(bannerWrapper);
    }

    */



    return {


    }

};

export default home;
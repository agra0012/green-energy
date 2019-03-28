// create resources
const resources = [
    {
        heading: "Windmill",
        path: "img/windmill.jpg",
        body: "Windmill converts wind energy into electricity. It can be installed on a small scale by home owners in their backyards or on theeir farm lands if the there is a lot of wind in the area. It harnests power from wind."
  },
    {
        heading: "Solar Energy",
        path: "img/solar-panel.jpg",
        body: "Solar panel is one of the most cheapest and easy source of energy. Solar panel can be installed at roof tops or in the homeyards, and they charge battries which works at night as well. It harnest energy from direct sunlight."
  },
    {
        heading: "Hydro Energy",
        path: "img/hydro.jpg",
        body: "Hydro power harnests the energy from the flow of water. It converts the  power from the current of water flow to electricity. It needs fast flow of water which are mostly available in rivers and seas."
  }
];


// getting refrences of active elements
const btns = document.querySelectorAll("button");
console.log(btns);
const currentContent = document.querySelector(".current-content");

// creating event-handler
function contentLoader(ev) {
    //    console.log("content loader works!");
    let eventTarget = ev.target.textContent;
    console.log(eventTarget);

    if (eventTarget === "Windmill") {
        console.log("match");
        currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].path}">
                                    <div><p>${resources[0].body}</p></div>
                                    </article>`;
    } else if (eventTarget === "Solar Energy") {
        console.log("match");
        currentContent.innerHTML = `<h2> ${resources[1].heading} </h2>
                                    <img src="${resources[1].path}">
                                    <p>${resources[1].body}</p>`;
    } else {
        console.log("match");
        currentContent.innerHTML = `<h2> ${resources[2].heading} </h2>                             <img src="${resources[2].path}">
                                    <p>${resources[2].body}</p>`;
    }
}

// registration event content
btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);

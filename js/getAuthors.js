function onLoad() {
    var paramId = window.location.href.split("?")[1].split("=")[1];
    return paramId;
}

var period = onLoad();

var url = "https://my-json-server.typicode.com/Soneech/PoemData/" + period;
var authorsList = document.querySelector(".authors-list");

var description = document.querySelector(".description");
setDescription(period);

function setDescription(period) {
    switch(period) {
        case "eighteenthCentury":
            description.textContent = "Поэты 18-го века";
            break;
        case "goldenPeriod":
            description.textContent = "Поэты Золотого века";
            break;
        case "silverPeriod":
            description.textContent = "Поэты Серебряного века";
            break;
        default:
            break;
    }
}

async function getPromise(url, callback) {
    let response = await fetch(url);
    let json = await response.json();
    callback(json);
}

getPromise(url, function(json) {
    for (let i = 0; i < json.length; i++) {
        let pElem = document.createElement("p");
        pElem.textContent = json[i].name;

        let aElem = document.createElement("a");
        aElem.classList.add("author");
        aElem.appendChild(pElem);

        let divElem = document.createElement("div");
        divElem.classList.add("author-block");
        divElem.appendChild(aElem);

        authorsList.appendChild(divElem);
        divElem.addEventListener('click', openPoemsPage.bind(null, period, json[i].id));
    }
});


function openPoemsPage(period, id) {
    window.location.href = "./poems.html?id=" + id + "&" + "period=" + period;
}

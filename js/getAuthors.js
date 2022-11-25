function onLoad() {
    var paramId = window.location.href.split("?")[1].split("=")[1];
    return paramId;
}

var period = onLoad();

var url = "https://api.jsonbin.io/v3/b/637fc8650e6a79321e54a776/latest";
var authorsList = document.querySelector(".authors-list");

var description = document.querySelector(".description");
var mainText = document.querySelector(".main-text");
setDescription(period);

function setDescription(period) {
    switch(period) {
        case "eighteenthCentury":
            description.textContent = "Поэты 18-го века";
            mainText.textContent = "Список поэтов 18-го века";
            break;
        case "goldenPeriod":
            description.textContent = "Поэты Золотого века";
            mainText.textContent = "Список поэтов Золотого века";
            break;
        case "silverPeriod":
            description.textContent = "Поэты Серебряного века";
            mainText.textContent = "Список поэтов Серебряного века";
            break;
        default:
            break;
    }
}

async function getPromise(url, callback) {
    let response = await fetch(url);
    let json = await response.json();
    json = json.record[period];
    callback(json);
}

getPromise(url, function(json) {
    for (let i = 0; i <= json.length; i++) {
        let pElem = document.createElement("p");

        if (i != json.length)
            pElem.textContent = json[i].name;
        
        let aElem = document.createElement("a");
        aElem.classList.add("author");
        aElem.appendChild(pElem);

        let divElem = document.createElement("div");
        divElem.classList.add("author-block");
        divElem.appendChild(aElem);

        if (i != json.length)
            divElem.addEventListener('click', openPoemsPage.bind(null, period, json[i].id));
        authorsList.appendChild(divElem);
    }
});


function openPoemsPage(period, id) {
    window.location.href = "./poems.html?id=" + id + "&" + "period=" + period;
}

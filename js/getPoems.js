function onLoad() {
    var id = window.location.href.split("&")[0].split("?id=")[1];
    var period = window.location.href.split("&")[1].split("period=")[1];
    return [id, period];
}

const [id, period] = onLoad();
var url = "https://api.jsonbin.io/v3/b/637fc8650e6a79321e54a776/latest";

async function getPromise(url, callback) {
    let response = await fetch(url);
    let json = await response.json();
    json = json.record[period][id];
    callback(json);
}

var nameElem = document.querySelector(".name");
var desctiprionElem = document.querySelector(".author-description");
var avatar = document.querySelector(".avatar");
var poemsList = document.querySelector(".poems-list");

getPromise(url, function(json) {
    var name = json.name;
    nameElem.textContent = name;

    var imageSrc = json.image;
    avatar.src = imageSrc;

    var description = json.description;
    desctiprionElem.textContent = description;

    var poems = json.poems;
    for (let i = 0; i < poems.length; i++) {
        let pElemName = document.createElement("h3");
        pElemName.classList.add("poem-name");
        pElemName.textContent = poems[i].name;

        let pElemPoem = document.createElement("pre");
        pElemPoem.classList.add("poem");
        pElemPoem.textContent = poems[i].poem;

        let divElem = document.createElement("div");
        divElem.classList.add("poem-block");

        divElem.appendChild(pElemName);
        divElem.appendChild(pElemPoem);

        poemsList.appendChild(divElem);
    }
});
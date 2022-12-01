var url = "https://api.jsonbin.io/v3/b/637fc8650e6a79321e54a776/latest";

var container = document.querySelector(".grid-container");
var quotesBlock = document.querySelector(".quotes-block");

async function getPromise(url, callback) {
    let response = await fetch(url);
    let json = await response.json();
    json = json.record;
    callback(json);
}

getPromise(url, function(json) {
    let bestPoets = json.best;
    let bestQuotes = json.quotes;

    for (let poet of bestPoets) {
        let period = poet.period;
        let relation = poet.relation;

        let imageSrc = json[period][relation].image;
        let name = json[period][relation].name;

        let imgElem = document.createElement("img");
        imgElem.src = imageSrc;
        imgElem.classList.add("grid-image");

        let pElem = document.createElement("p");
        pElem.textContent = name;
        pElem.classList.add("grid-text");

        let divElem = document.createElement("div");
        divElem.classList.add("grid-item");

        divElem.appendChild(imgElem);
        divElem.appendChild(pElem);

        divElem.addEventListener("click", openPoemsPage.bind(null, period, relation));

        container.appendChild(divElem);
    }

    for (let quote of bestQuotes) {
        let quoteText = quote.quote;
        let period = quote.period;
        let relation = quote.relation;

        let name = json[period][relation].name;

        let citeElem1 = document.createElement("cite");
        citeElem1.classList.add("author");
        citeElem1.textContent = name;

        citeElem1.addEventListener("click", openPoemsPage.bind(null, period, relation));

        let citeElem2 = document.createElement("cite");
        citeElem2.textContent = "— ";
        citeElem2.appendChild(citeElem1);

        let pElem = document.createElement("p");
        pElem.classList.add("quote");
        pElem.textContent = quoteText;

        let quoteElem = document.createElement("blockquote");
        quoteElem.appendChild(pElem);
        quoteElem.appendChild(citeElem2);

        let divElem = document.createElement("div");
        divElem.classList.add("quote-block");
        divElem.appendChild(quoteElem);

        quotesBlock.appendChild(divElem);
    }
});

function openPoemsPage(period, id) {
    window.location.href = "./poems.html?id=" + id + "&" + "period=" + period;
}
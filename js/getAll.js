var poemsBlock = document.querySelector(".poems-block");
var url = "https://api.jsonbin.io/v3/b/637fc8650e6a79321e54a776/latest";

async function getPromise(url, callback) {
    let response = await fetch(url);
    let json = await response.json();
    json = json.record;
    callback(json);
}


function createPageElems(authorName, poemName, poemText) {
    let divElem = document.createElement("div");
    divElem.classList.add("poem-block");

    let h3Elem = document.createElement("h3");
    h3Elem.classList.add("poem-name");
    h3Elem.textContent = poemName;

    let preElem = document.createElement("pre");
    preElem.classList.add("poem");
    preElem.textContent = poemText;

    let h4Elem = document.createElement("h4");
    h4Elem.classList.add("author-name");
    h4Elem.textContent = authorName;

    divElem.appendChild(h3Elem);
    divElem.appendChild(preElem);
    divElem.appendChild(h4Elem);

    poemsBlock.appendChild(divElem);
}

getPromise(url, function(json) {
    for(let period in json) {
        let authors = json[period];
        for (let author in authors) {
           let authorName = authors[author].name;

           if (authorName) {
            let poems = authors[author].poems;
            for (let poem in poems) {
                let poemName = poems[poem].name;
                let poemText = poems[poem].poem;
                createPageElems(authorName, poemName, poemText);
            }
           }
        }
    }
});


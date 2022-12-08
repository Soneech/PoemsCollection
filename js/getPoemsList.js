var poemsBlock = document.querySelector(".poems-block");
var url = "https://api.jsonbin.io/v3/b/637fc8650e6a79321e54a776/latest";

async function getPromise(url, callback) {
    let response = await fetch(url);
    let json = await response.json();
    json = json.record;
    callback(json);
}


function createPageElems(authorId, authorName, poemName, poemId, period) {
    let divElem = document.createElement("div");
    divElem.classList.add("poem-block");

    let h3Elem = document.createElement("h3");
    h3Elem.classList.add("poem-name");
    h3Elem.textContent = poemName;

    let h4Elem = document.createElement("h4");
    h4Elem.classList.add("author-name");
    h4Elem.textContent = authorName;

    divElem.appendChild(h3Elem);
    divElem.appendChild(h4Elem);

    divElem.addEventListener("click", function() {
        window.location.href = "poem.html?period=" + period + "&author=" + authorId + "&poem=" + poemId;    
    })

    poemsBlock.appendChild(divElem);
}

getPromise(url, function(json) {
    for(let period in json) {
        let authors = json[period];
        for (let authorId in authors) {
           let authorName = authors[authorId].name;

           if (authorName) {
            let poems = authors[authorId].poems;
            for (let poemId in poems) {
                let poemName = poems[poemId].name;
                createPageElems(authorId, authorName, poemName, poemId, period);
            }
           }
        }
    }
});


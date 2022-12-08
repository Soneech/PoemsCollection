var poemBlock = document.querySelector(".poem-block");

function onLoad() {
    var period = window.location.href.split("&")[0].split("?period=")[1];
    var authorId = window.location.href.split("&")[1].split("author=")[1];
    var poemId = window.location.href.split("&")[2].split("poem=")[1];
    return [period, authorId, poemId];
}

const [period, authorId, poemId] = onLoad();
var url = "https://api.jsonbin.io/v3/b/637fc8650e6a79321e54a776/latest";

async function getPromise(url, callback) {
    let response = await fetch(url);
    let json = await response.json();
    authorJson = json.record[period][authorId];
    callback(authorJson);
}

getPromise(url, function(authorJson) {
    let authorName = authorJson.name;
    let poemName = authorJson.poems[poemId].name;
    let poemText = authorJson.poems[poemId].poem;

    let h3Elem = document.createElement("h3");
    h3Elem.classList.add("poem-name");
    h3Elem.textContent = poemName;

    let preElem = document.createElement("pre");
    preElem.classList.add("poem");
    preElem.textContent = poemText;

    let h4Elem = document.createElement("h4");
    h4Elem.classList.add("author-name");
    h4Elem.textContent = authorName;

    h4Elem.addEventListener("click", function() {
        window.location.href = "poems.html?id=" + authorId + "&" + "period=" + period;
    })

    poemBlock.appendChild(h3Elem);
    poemBlock.appendChild(preElem);
    poemBlock.appendChild(h4Elem);
});
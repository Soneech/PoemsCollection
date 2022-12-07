var categoryBlock = document.querySelectorAll(".category-block");

function onClickEvent(id) {
    window.location.href = "./authors.html?id=" + id;
}

for (let i = 0; i < categoryBlock.length - 1; i++) {
    categoryBlock[i].addEventListener('click', onClickEvent.bind(null, categoryBlock[i].id));
}

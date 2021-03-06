let mangaInput = document.getElementById("manga-input");
let searchResults = document.getElementById("search-results")
let mangaInputNew;
let output = document.getElementById("search-results");

let createEl = (el) => {
    return document.createElement(el);
}
let appendEl = (parent, child) => {
    return parent.appendChild(child);
}

let image = createEl("img");
let title = createEl("p");
let desc = createEl("p");
let link = createEl("a");


mangaInput.addEventListener('input', () => {
    mangaInputNew = encodeURIComponent(mangaInput.value);
    console.log(mangaInputNew);
})

mangaInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        fetch("https://jikan1.p.rapidapi.com/search/anime?q=" + mangaInputNew, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "jikan1.p.rapidapi.com",
                    "x-rapidapi-key": "f35818e12cmshb49b55d59e713f5p1e33aajsn34a91ad2f397"
                }
            })
            .then(response => response.json())
            .then(data => {
                searchResults.innerHTML = "";
                data.results.map((el) => {
                    searchResults.innerHTML += `
                    <div class="search-result-output">
                    <img id="s-img" src="${el.image_url}">
                    <p id="s-title">${el.title}</p>
                    <p id="s-desc">${el.synopsis}</p>
                    <a id="s-link" href="${el.url}">Find out more about ${el.title}</a>
                    </div>
                    <hr id="divider"/>
                    `;
                })
            })
            .catch(err => {
                console.error(err);
            });
    };
});

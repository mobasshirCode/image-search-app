const accessKey = "ONu3S_c5xTVBg3IsWcLHfh92Gjry6SeORHdA3c-fuVE";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("searchbox");
const searchResult = document.getElementById("search-result");
const searchButton = document.getElementById("btn");
const moreButton = document.getElementById("more");

let keyword = "";
let page = 1;

async function SearchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResult.innerHTML = "";
  }
  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.full;
    searchResult.appendChild(image);
  });
  more.style.display = "block";
}
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  SearchImages();
});
moreButton.addEventListener("click", () => {
  page++;
  SearchImages();
});

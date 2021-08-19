const inputElement = document.querySelector(".search");
const listElement = document.querySelector(".suggestions");
const API =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];

//Fetch API
(async () => {
  try {
    const res = await fetch(API);
    const data = await res.json();
    cities.push(...data);
  } catch (error) {
    console.log(error);
  }
})();

//oninput event
inputElement.addEventListener("input", showResults);

//---functions
function findMatches(keyword, cities) {
  return cities.filter((elem) => {
    const regex = new RegExp(keyword, "gi");
    return elem.city.match(regex) || elem.state.match(regex);
  });
}

function showResults() {
  let htmls = "";
  let keyword = this.value.trim();

  if (!(keyword === "")) {
    let results = findMatches(keyword, cities);
    const regex = new RegExp(keyword, "gi");

    if (results) {
      results.forEach((elem) => {
        //highlight keyword
        let city = elem.city.replace(
          regex,
          `<span class="hl">${keyword}</span>`
        );
        let state = elem.state.replace(
          regex,
          `<span class="hl">${keyword}</span>`
        );
        //create list item
        htmls += `<li>
            <span class="location">${city}, ${state}</span>
            <span class="population">${numberWithCommas(elem.population)}</span>
        </li>`;
      });
    }
  }
  //add to list
  listElement.innerHTML = htmls;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

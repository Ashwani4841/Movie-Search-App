let APIKey = "c0f33196";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn")

const getData = async (inputValue) => {
    try{
        let fetchData = await fetch(`https://www.omdbapi.com/?apikey=${APIKey}&t=${inputValue}`);
    let jsonData = await fetchData.json();
    console.log(jsonData);

    document.querySelector(".card").innerHTML = " ";
    searchInput.value = "";

    let div = document.createElement("div");
    div.classList.add("div");
    div.innerHTML = `
        <img src=${jsonData.Poster} alt=''>
        <div class="cardText">
            <h1>${jsonData.Title}</h1>
            <p class="Ratings">Rating: <span>${jsonData.Ratings[0].Value}</span></p>
            <a class="Genre" href="">${jsonData.Genre}</a>
            <p>Release: <span>${jsonData.Released}</span></p>
            <p>Duration: <span>${jsonData.Runtime}</span></p>
            <p>Description: <span>${jsonData.Plot}</span></p>
            <p>Actors: <span>${jsonData.Actors}</span></p>
        </div>
    `
    document.querySelector(".card").appendChild(div);
    }
    catch(error){
        document.querySelector(".card").innerHTML = "<h1>Please Enter a valid movie name...</h1>"
    } 
}

searchBtn.addEventListener("click", function () {
    let inputValue = searchInput.value;
    if (inputValue != "") {
        getData(inputValue);
    } else {
        document.querySelector(".card").innerHTML = "<h1>Please enter a movie name</h1>"
        console.log("Please enter a movie name")
    }
})

import './script/components/search.js';
import './script/components/nav.js';
import './script/components/results.js';
import './script/components/footer-attribution.js';
import './script/components/movie-info.js';
import './script/info.js';
import './styles/style.css';

const APIKEY = "ee3f9209ce8dcd047830265aaa1494ea"; //API KEY TMDB milik saya
const baseURL = "https://api.themoviedb.org/3/";



let inputSearch = document.querySelector('#searchText');
let submitSearch = document.querySelector('#searchButton');




const getMovie = searchText => {
    fetch(`${baseURL}search/movie?api_key=${APIKEY}&query=${searchText}`)
    .then( response => {
        return response.json();
    })
    .then(data => {
        let movieResults = data.results;
        renderMovie(movieResults);
    })
    .catch( e => {
        console.log(e);
    })
}



const renderMovie = results => {
    const resultArea = document.querySelector("#movies");
    let movieOutput = '';
    results.forEach( e => {
        console.log(e);
        if (e.poster_path !== null){
            movieOutput += 
            `<div class="col-md-3">
                <div class="well text-center">
                    <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="NO IMAGE" class="">
                    <h4>${e.title}</h4>
                    <p>Popularity: ${e.popularity}</p>
                    <p>Released: ${e.release_date}</p>
                    <a onclick="selectedMovie('${e.id}')" class="btn btn-primary" >More Info</a>
                </div>
            </div>
            `;
        } 
    })
    resultArea.innerHTML = movieOutput;
}


const getLatest = () => {
    fetch(`${baseURL}movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`)
    .then( response => {
        return response.json();
    })
    .then(data => {
        let movieResults = data.results;
        renderMovie(movieResults);
    })
    .catch( e => {
        console.log(e);
    })
}

document.addEventListener("DOMContentLoaded", () =>{
    submitSearch.addEventListener("click", ()=> {
        getMovie(inputSearch.value);
    })
    getLatest();

})

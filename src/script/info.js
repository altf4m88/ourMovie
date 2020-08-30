import './components/search.js';
import './components/nav.js';
import './components/results.js';
import './components/footer-attribution.js';
import './components/movie-info.js';

const APIKEY = "ee3f9209ce8dcd047830265aaa1494ea"; //API KEY TMDB milik saya
const baseURL = "https://api.themoviedb.org/3/";


const getInfo = () => {
    let currentId = sessionStorage.getItem('currentId');
    
    fetch(`${baseURL}movie/${currentId}?api_key=${APIKEY}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        renderInfo(data);
    })

}

const renderInfo = (data) => {
    const infoResult = document.querySelector('#movieInfo');
    let result = `
    <div class="row mt-3">
        <div class="col-md-3">
            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="NO POSTER" class="img-thumbnail">
        </div>
        <div class="col-md-8">
            <h3>${data.title}</h3>
            <ul class="list-group">
                <li class="list-group-item"><strong>Release Date :</strong>${data.release_date}</li>
                <li class="list-group-item"><b>Genres :</b>${data.genres.map(x => x.name)}</li>
                <li class="list-group-item"><b>Language : </b>${(data.original_language)}</li>
                <li class="list-group-item"><b>Companies :</b>${data.production_companies.map(y => y.name)}</li>
                <li class="list-group-item"><b>Popularity :</b>${data.popularity}</li>
            </ul>
        </div>
    </div>
    <div class="row mt-3">
        <div class="well">
            <h4>Synopsis</h4>
                ${data.overview}
            <hr>
            <a href="/index.html" class="btn btn-primary">Back To Search</a>
        </div>
    </div>   `;

    infoResult.innerHTML += result;
}




document.addEventListener("DOMContentLoaded", getInfo());



const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

if(titleInStorage && imageUrlInStorage && yearInStorage) {
   movieTitleToDisplay.textContent = titleInStorage;
   movieTitleToDisplay.textContent = yearInStorage;
   container.style.backgroundImage = `linear-gradient(rgba(67, 67, 105, 0.715), rgba(100, 72, 72, 0.591)), url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', movieYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieTitleToDisplay.textContent = movieYearInput;
    container.style.backgroundImage = `linear-gradient(rgba(67, 67, 105, 0.715), rgba(100, 72, 72, 0.591)), 
    url('${posterUrlInput}')`;
});
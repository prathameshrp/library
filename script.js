const movies = []

function Movie(name, genre, season, rating, yearOfRelease)
{
    this.name = name;
    this.genre = genre;
    this.rating = rating;
    this.season = season;
    this.yearOfRelease = yearOfRelease;
}

const mname = document.querySelector('#movieName');
const genre = document.querySelector('#genre');
const season = document.querySelector('#season');
const rating = document.querySelector('#rating');
const year = document.querySelector('#yearOfRelease');
const container = document.querySelector("#container");

function addMovieToLibrary()
{  
    const movie = new Movie(mname.value, genre.value, season.value, rating.value, year.value);
    movies.push(movie);
    displayToScreen();
}

function displayToScreen()
{
    
    for(let i = 0; i < movies.length; ++i)
        {
            let temp = document.querySelector("#temp");
            let clon = temp.content.cloneNode(true);
            
            let titleEl = clon.querySelector('.title');
            titleEl.textContent = movies[i].name;
            clon.querySelector('.year').textContent = movies[i].yearOfRelease;
            clon.querySelector('.rating').textContent = movies[i].rating;
            clon.querySelector('.season').textContent = movies[i].season;
            clon.querySelector('.genre').textContent = movies[i].genre;
            clon.querySelector('img').setAttribute('src', `./resources/covers/${i+1}.jpg`)
            // const div = document.createElement('div');
            // const p1 = document.createElement('p');
            // const p2 = document.createElement('p');
            // const p3 = document.createElement('p');
            // const p4 = document.createElement('p');
            // const p5 = document.createElement('p');
            
            // p1.textContent = movies[i].name;
            // p2.textContent = movies[i].genre;
            // p3.textContent = movies[i].season;
            // p4.textContent = movies[i].rating;
            // p5.textContent = movies[i].yearOfRelease;
            // console.log(movies[i]);
            // div.appendChild(p1);
            // div.appendChild(p2);
            // div.appendChild(p3);
            // div.appendChild(p4);
            // div.appendChild(p5);
            container.appendChild(clon);
        }
}



const addbtn = document.querySelector('#addbtn');
const dialog = document.querySelector('dialog');

addbtn.addEventListener("click", ()=>{
    dialog.showModal();
});

const submission = document.querySelector('#submissionBtn');

submission.addEventListener("click", addMovieToLibrary);


const movie1 = new Movie('Damsel', 'Drama', '1 season', 'U/A 16+', '2024');
const movie2 = new Movie('Badland Hunters', 'Action', '1 season', 'U/A 16+', '2024');
const movie3 = new Movie('Extraction 2', 'Sci-Fi', 'movie', 'U/A 16+', '2024');
const movie4 = new Movie('Lift', 'Thriller', 'movie', 'U/A 16+', '2024');
const movie5 = new Movie('Blood and gold', 'Mystery', 'show', 'U/A 16+', '2023');


movies.push.apply(movies, [movie1, movie2, movie3, movie4, movie5]);

// movies.push(movie1);

displayToScreen();

// <div class="contentCard">
// <div class="btns">
//   <button class="watch net-button">watch</button><button class="delete net-button">remove</button>
// </div>
// <div class="contentTitle">
//   <p class="title">Damsel</p>
//   <span class="infoBar">
//     <span class="year">2024</span>
//     <span class="rating">UA 16+</span>
//     <span class="season">season 1</span>
//     <span class="genre">drama</span>
//   </span>
// </div>
// </div>
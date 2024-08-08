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
    container.replaceChildren();
    for(let i = 0; i < movies.length; ++i)
        {
            const div = document.createElement('div');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            const p4 = document.createElement('p');
            const p5 = document.createElement('p');
            
            p1.textContent = movies[i].name;
            p2.textContent = movies[i].genre;
            p3.textContent = movies[i].season;
            p4.textContent = movies[i].rating;
            p5.textContent = movies[i].yearOfRelease;
            // console.log(movies[i]);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(p4);
            div.appendChild(p5);
            container.appendChild(div);
        }
}



const movie = new Movie(mname.value, genre.value, season.value, rating.value, year.value);
movies.push(movie);

const addbtn = document.querySelector('#addbtn');
const dialog = document.querySelector('dialog');

addbtn.addEventListener("click", ()=>{
    dialog.showModal();
});

const submission = document.querySelector('#submissionBtn');

submission.addEventListener("click", addMovieToLibrary);


const movie1 = new Movie('Beckham', 'Drama', '1', 'U/A 16+', '2023');
const movie2 = new Movie('All The Light We Cannot See', 'Drama', '1', 'U/A 16+', '2023');
const movie3 = new Movie('Three Body Problem', 'Sci-Fi', '0', 'U/A 16+', '2024');

movies.push.apply(movies, [movie1, movie2, movie3]);
displayToScreen();
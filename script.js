const movies = []

function Movie(name, genre, season, rating, yearOfRelease)
{
    this.name = name;
    this.genre = genre;
    this.rating = rating;
    this.season = season;
    this.yearOfRelease = yearOfRelease;
}

Movie.prototype.watching = false;
const mname = document.querySelector('#movieName');
const genre = document.querySelector('#genre');
const season = document.querySelector('#season');
const rating = document.querySelector('#rating');
const year = document.querySelector('#yearOfRelease');
const container = document.querySelector("#container");

function addMovieToLibrary(event)
{  
    event.preventDefault();
    const movie = new Movie(mname.value, genre.value, season.value, rating.value, year.value);
    movies.push(movie);
    dialog.close();
    displayToScreen();
}

function displayToScreen()
{
    container.replaceChildren();
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
            let file = `./resources/covers/${movies[i].name}.jpg`;
          
            if([movie1, movie2, movie3, movie4, movie5].includes(movies[i]))
                    clon.querySelector('img').setAttribute('src', file);
            
         

            const del = clon.querySelector(".delete"); 
            const watch = clon.querySelector(".watch");
            del.setAttribute("data-index", i);
            watch.setAttribute("data-index", i);

            if(movies[i].watch)
            {
                watch.textContent = "Streaming";
                watch.setAttribute("style", "background-color: #43956f");
            }
            del.addEventListener("click", ()=>
            {
                let index = del.getAttribute("data-index");
                movies.splice(index, 1);
                displayToScreen();
            })
            watch.addEventListener("click", ()=>
            {
                let index = watch.getAttribute("data-index");
                movies[index].watch = !movies[index].watch;
                displayToScreen();
            })
            container.appendChild(clon);
          
        }
}



const addbtn = document.querySelector('#addbtn');
const dialog = document.querySelector('dialog');

addbtn.addEventListener("click", ()=>{
    dialog.showModal();
});

// const submission = document.querySelector('#submissionBtn');
const close = document.querySelector("#closeDialog");
// submission.addEventListener("click", addMovieToLibrary);
close.addEventListener("click", ()=> dialog.close());

const movie1 = new Movie('Damsel', 'Drama', '1 season', 'U/A 16+', '2024');
const movie2 = new Movie('Badland Hunters', 'Action', '1 season', 'U/A 16+', '2024');
const movie3 = new Movie('Extraction 2', 'Sci-Fi', 'movie', 'U/A 16+', '2024');
const movie4 = new Movie('Lift', 'Thriller', 'movie', 'U/A 16+', '2024');
const movie5 = new Movie('Blood and gold', 'Mystery', 'show', 'U/A 16+', '2023');


movies.push.apply(movies, [movie1, movie2, movie3, movie4, movie5]);

displayToScreen();

// form validation:
// const genre = document.querySelector('#genre');
const form = document.querySelector('form');
const error = document.querySelector('.errorClass');

genre.addEventListener("input", (e)=>{
    if(!genre.validity.valid)
    {
        showError();
    }
    else
    {
        // genre.setCustomValidity("");
      error.textContent = "";
      
    }
})


form.addEventListener("submit", (e)=>

{
    if(!genre.validity.valid)
    {
        showError();
        e.preventDefault();
    }
    // addMovieToLibrary();
})

function showError()
{
    if(genre.validity.valueMissing)
    {
        error.textContent = "You need to enter a genre.";
    }
    else
    {
        error.textContent = "Wrong option.";
    }
}
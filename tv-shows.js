const tvShows = [
    {
        title: "Breaking Bad",
        genres: ["Drama", "Thriller"],
        cast: ["Aaron Paul", "Bryan Cranston"],
        "theme-song": "Let Them Cook",
        releaseYear: 2008,
        runLength: 45,
        rating: 10,
        imageSrc: "/assets/images/breaking-bad.jpeg"
    },
    {
        title: "House of the Dragon",
        genres: ["Fantasy", "Drama"],
        cast: ["Milly Alcock", "Emma D'Arcy", "Matt Smith"],
        "theme-song": "Game of Thrones (Original)",
        releaseYear: 2022,
        runLength: 50,
        rating: 10,
        imageSrc: "/assets/images/house-of-the-dragon.jpeg"
    },
    {
        title: "Squid Game",
        genres: ["Thriller", "Horror"],
        cast: ["HoYeon Jung", "Lee Jung-jae", "Gong Yoo"],
        "theme-song": "Squid Games (Original)",
        releaseYear: 2021,
        runLength: 50,
        rating: 10,
        imageSrc: "/assets/images/squid-game.jpeg"
    },
    {
        title: "True Detective",
        rating: 21,
        imageSrc: "/assets/images/true-detective.png"
    },
];

/* Add all TV Shows to the tv-shows element */
const tvShowsEl = document.getElementById("tv-shows");
for (let i = 0; i <= tvShows.length - 1; i++) {
    const showEl = createTvShowElement(tvShows[i]);
    tvShowsEl.appendChild(showEl);
}

/*
    Input: show will contain { Title, Rating, Image }
    
    Output: Element object that looks like:
    <article class="tv-show">
        <h2 class="tv-show__title">${show.title}</h2>
        <span class="tv-show__rating">Rating: ${show.rating}</span>
        <img class="tv-show__cover" src="${show.imageSrc}" alt="${show.title} Cover" />
    </article>
*/
function createTvShowElement(show) {
    const showEl = document.createElement("article");
    showEl.classList.add("tv-show");

    const titleEl = document.createElement("h2");
    titleEl.classList.add("tv-show__title");
    titleEl.innerText = show.title;

    const ratingEl = document.createElement("span");
    ratingEl.classList.add("tv-show__rating");
    ratingEl.innerText = "Rating: " + show.rating;
    
    const coverEl = document.createElement("img");
    coverEl.classList.add("tv-show__cover");
    coverEl.setAttribute("src", show.imageSrc);
    coverEl.setAttribute("alt", show.title + " Cover");
    
    showEl.appendChild(titleEl);
    showEl.appendChild(ratingEl);
    showEl.appendChild(coverEl);

    return showEl;
}
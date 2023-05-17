const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

// go to movie page
function handleButtonClick(button) {
  var buttonValue = button.value;
  console.log(buttonValue);
}

function redirectToMoviePage(button) {
  var buttonValue = button.value; // The value you want to pass
  // Redirect to Page 2 with the value as a query parameter
  window.location.href = "movie.html?value=" + encodeURIComponent(buttonValue);
}

function redirectToMovieInfoPage(button) {
  var buttonValue = button.value; // The value you want to pass
  // Redirect to Page 2 with the value as a query parameter
  window.location.href = "movieinfo.html?value=" + encodeURIComponent(buttonValue);
}

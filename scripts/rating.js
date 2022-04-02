const ratingStars = document.querySelectorAll("#example-rating .rating__star");
for (let x = 0; x < ratingStars.length; x++) {
  ratingStars[x].addEventListener("click", () => {
    for (let y = 0; y <= x; y++) {
      // Selecting upto clicked star
      ratingStars[y].classList.replace("rating__star--disabled","rating__star--selected");
    }
    for (let y = x + 1; y < ratingStars.length; y++) {
      // Disabling remaining stars
      ratingStars[y].classList.replace("rating__star--selected","rating__star--disabled");
    }
  });
}

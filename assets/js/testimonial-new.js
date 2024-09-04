const testimonials = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5m2gr2lMb1huhMFwIR41jrDU5ZOxKydgEw&s",
    content: "Dattebayo",
    author: "Naruto",
    rating: 5,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFo9nKGI6eDtfB7wVLiJ0voKBJJb5nrJj9Wg&s",
    content: "Tch",
    author: "Sasuke",
    rating: 1,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MBAh1_8sj6rA6QhH31iBkhG2v7rLce4OSQ&s",
    content: "Beban",
    author: "Sakura",
    rating: 3,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MBAh1_8sj6rA6QhH31iBkhG2v7rLce4OSQ&s",
    content: "Beban",
    author: "Sakura",
    rating: 3,
  },
];

function getAllTestimonials() {
  const testimonialHTML = testimonials.map((testimonial) => {
    return `<div class="testimonial">
    <img src="${testimonial.image}" class="profile-testimonial" />
    <p class="quote">"${testimonial.content}"</p>
    <p class="author">- ${testimonial.author}</p>
    <p class="author">${testimonial.rating} <i class="fa-solid fa-star"></i></p>
</div>`;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
}

function getTestimonialsByRating(rating) {
  const filteredTestimonials = testimonials.filter((testimonial) => {
    if (testimonial.rating === rating) {
      return true;
    }
  });

  const testimonialHTML = filteredTestimonials.map((testimonial) => {
    return `<div class="testimonial">
    <img src="${testimonial.image}" class="profile-testimonial" />
    <p class="quote">"${testimonial.content}"</p>
    <p class="author">- ${testimonial.author}</p>
    <p class="author">${testimonial.rating} <i class="fa-solid fa-star"></i></p>
</div>`;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
}

getAllTestimonials();

const buttonRatings = [
  {
    name: "All",
    rating: "all",
  },
  {
    name: "1",
    rating: 1,
  },
  {
    name: "2",
    rating: 2,
  },
  {
    name: "3",
    rating: 3,
  },
  {
    name: "4",
    rating: 4,
  },
  {
    name: "5",
    rating: 5,
  },
];

function showButtonRatings() {
  const buttonRatingsHTML = buttonRatings.map((buttonRating) => {
    if (buttonRating.name === "All") {
      return `<button onclick="getAllTestimonials()" class="rating-btn">${buttonRating.name}</button>`;
    } else {
      return `<button onclick="getTestimonialsByRating(${buttonRating.rating})" class="rating-btn">
            ${buttonRating.name} <i class="fa-solid fa-star"></i>
          </button>`;
    }
  });

  document.getElementById("button-ratings").innerHTML =
    buttonRatingsHTML.join("");
}

showButtonRatings();

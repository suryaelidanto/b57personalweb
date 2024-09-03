class Testimonial {
  image = "";
  content = "";
  author = "";
  rating = 0;

  constructor(image, content, author, rating) {
    this.image = image;
    this.content = content;
    this.author = author;
    this.rating = rating;
  }

  getHTML() {
    return `<div class="testimonial">
        <img src="${this.image}" class="profile-testimonial" />
        <p class="quote">"${this.content}"</p>
        <p class="author">- ${this.author}</p>
        <p class="author">${this.rating}$</p>
    </div>`;
  }
}

const testimonial1 = new Testimonial(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5m2gr2lMb1huhMFwIR41jrDU5ZOxKydgEw&s",
  "Dattebayo",
  "Naruto",
  5
);

const testimonial2 = new Testimonial(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFo9nKGI6eDtfB7wVLiJ0voKBJJb5nrJj9Wg&s",
  "Tch",
  "Sasuke",
  1
);

const testimonial3 = new Testimonial(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MBAh1_8sj6rA6QhH31iBkhG2v7rLce4OSQ&s",
  "Beban",
  "Sakura",
  3
);

const testimonials = [testimonial1, testimonial2, testimonial3]

let testimonialHTML = ``

for(let index = 0; index < testimonials.length; index++) {
    testimonialHTML += testimonials[index].getHTML()
}

document.getElementById("testimonials").innerHTML = testimonialHTML
// count post blog time
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function getDistanceTime(timePost) {
  const timeNow = new Date();
  const distance = timeNow - timePost; // hasilnya miliseconds => 1 detik = 1000ms

  // seconds, minutes, hours, day
  // round => membulatkan ke angkat terdekat | 7.3 => 7 | 7.5 => 8
  // floor => membulatkan ke bawah | 7.9 => 7 | 7.99 => 7
  // ceil => membulatkan ke atas | 8.01 => 9 | 8.3 => 9
  const seconds = Math.floor(distance / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const day = Math.floor(hours / 24);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 60) {
    return `${hours} hours ago`;
  } else if (day < 24) {
    return `${day} day ago`;
  }
}

function getFullTime(time) {
  const date = time.getDate();
  const monthIndex = time.getMonth();
  const year = time.getFullYear();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${date} ${months[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

// blogs
const blogs = [];
function addBlog(event) {
  event.preventDefault();

  const inputTitle = document.getElementById("input-blog-title").value;
  const inputContent = document.getElementById("input-blog-content").value;
  const inputImage = document.getElementById("input-blog-image").files;

  console.log("test", inputTitle, inputContent, inputImage);

  const blobImage = URL.createObjectURL(inputImage[0]);

  const data = {
    title: inputTitle,
    content: inputContent,
    image: blobImage,
    author: "Naruto",
    createdAt: new Date(),
  };

  blogs.unshift(data);

  console.log(blogs);
  renderBlog();
}

function renderBlog() {
  let html = "";

  for (let index = 0; index < blogs.length; index++) {
    html += `<div class="card mt-5">
        <div class="d-flex p-3">
          <img
            src="${blogs[index].image}"
            class="card-img-top"
            style="width: 300px"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${blogs[index].title}</h5>
            <div class="d-flex">
              <p class="card-text">${getFullTime(blogs[index].createdAt)}</p>
              <p class="card-text mx-2">|</p>
              <p class="card-text">${blogs[index].author}</p>
            </div>
            <p class="card-text">${blogs[index].content}</p>

            <p class="card-text">${getDistanceTime(blogs[index].createdAt)}</p>
          </div>
          <div class="card-body">
            <button href="#" class="btn btn-secondary">Edit Post</button>
            <button href="#" class="btn btn-primary">Delete Post</button>
          </div>
        </div>
      </div>
            `;
  }

  document.getElementById("contents").innerHTML = html;
}

setInterval(() => {
  renderBlog();
}, 1000);

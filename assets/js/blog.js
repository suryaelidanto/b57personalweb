const blogs = [];
function addBlog(event) {
  event.preventDefault();

  const inputTitle = document.getElementById("input-blog-title").value;
  const inputContent = document.getElementById("input-blog-content").value;
  const inputImage = document.getElementById("input-blog-image").files;

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
    html += `<div class="blog-list-item">
                <div class="blog-image">
                    <img src="${blogs[index].image}" alt="" />
                </div>
                <div class="blog-content">
                    <div class="btn-group">
                        <button class="btn-edit">Edit Post</button>
                        <button class="btn-post">Delete Post</button>
                    </div>
                    <h1>
                        <a href="blog-detail.html" target="_blank">${blogs[index].title}</a>
                    </h1>
                    <div class="detail-blog-content">
                        ${blogs[index].createdAt} | ${blogs[index].author}
                    </div>
                    <p>
                        ${blogs[index].content}
                    </p>
                </div>
            </div>
            `;
  }

  document.getElementById("contents").innerHTML = html;
}

renderBlog();

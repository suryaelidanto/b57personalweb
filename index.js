const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use(express.urlencoded({ extended: true }));

// routing
app.get("/", home);
app.get("/blog", blog);
app.get("/add-blog", addBlogView);
app.post("/add-blog", addBlog);
app.get("/contact", contactMe);
app.get("/testimonial", testimonial);
app.get("/blog/detail/:id", blogDetail);

const blogs = [];

function home(req, res) {
  res.render("index");
}

function blog(req, res) {
  res.render("blog", { blogs });
}

function addBlogView(req, res) {
  res.render("add-blog");
}

function addBlog(req, res) {
  const { title, content } = req.body;

  const data = {
    title,
    content,
    image: "",
    author: "Naruto",
    createdAt: new Date(),
  };

  blogs.unshift(data);
}

function contactMe(req, res) {
  res.render("contact");
}

function testimonial(req, res) {
  res.render("testimonial");
}

function blogDetail(req, res) {
  res.render("blog-detail");
}

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

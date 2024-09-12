const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const config = require("./config/config");
const { Sequelize, QueryTypes, where } = require("sequelize");

const sequelize = new Sequelize(config.development);

const blogModel = require("./models").blog;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use("/assets", express.static(path.join(__dirname, "./assets")));

app.use(express.urlencoded({ extended: false }));

app.get("/", home);
app.get("/blog", blog);
app.get("/add-blog", addBlogView);
app.post("/blog", addBlog);
app.get("/delete-blog/:id", deleteBlog);
app.get("/edit-blog/:id", editBlogView);
app.post("/edit-blog/:id", editBlog);
app.get("/contact", contact);
app.get("/testimonial", testimonial);
app.get("/blog-detail/:id", blogDetail);

function home(req, res) {
  res.render("index");
}

async function blog(req, res) {
  const result = await blogModel.findAll();

  res.render("blog", { data: result });
}

async function deleteBlog(req, res) {
  const { id } = req.params;

  let result = await blogModel.findOne({
    where: {
      id: id,
    },
  });

  if (!result) return res.render("not-found");

  await blogModel.destroy({
    where: {
      id: id,
    },
  });
  res.redirect("/blog");
}

async function addBlog(req, res) {
  const { title, content } = req.body;
  await blogModel.create({
    title: title,
    content: content,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeWWU4427WFoUfLn-QiJGLoiIllli8ez1Tw&s",
  });

  res.redirect("/blog");
}

async function editBlogView(req, res) {
  const { id } = req.params;

  const result = await blogModel.findOne({
    where: {
      id: id,
    },
  });

  if (!result) return res.render("not-found");

  res.render("edit-blog", { data: result });
}

async function editBlog(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;

  const blog = await blogModel.findOne({
    where: {
      id: id,
    },
  });

  if (!blog) return res.render("not-found");

  blog.title = title;
  blog.content = content;

  await blog.save();

  res.redirect("/blog");
}

function addBlogView(req, res) {
  res.render("add-blog");
}

function contact(req, res) {
  res.render("contact");
}

function testimonial(req, res) {
  res.render("testimonial");
}

async function blogDetail(req, res) {
  const { id } = req.params;
  const result = await blogModel.findOne({
    where: {
      id: id,
    },
  });

  console.log("detail", result);

  if (!result) return res.render("not-found");
  res.render("blog-detail", { data: result });
}

app.listen(port, () => {
  console.log("Server is running on PORT :", port);
});

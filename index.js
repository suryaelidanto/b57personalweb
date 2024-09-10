const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

// app.set = setting variable global, configuration, dll
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

// app.use = setting middleware
app.use("/assets", express.static(path.join(__dirname, "./assets")));

// body parser
app.use(express.urlencoded({ extended: false }));
// extended : false => querystring bawaan dari express
// extended : true = > menggunakan query strign third party => qs

// route
app.get("/", home);
app.get("/blog", blog);
app.get("/add-blog", addBlogView);
app.post("/blog", addBlog);
app.get("/delete-blog/:index", deleteBlog);
app.get("/edit-blog/:index", editBlogView);
app.post("/edit-blog/:index", editBlog);
app.get("/contact", contact);
app.get("/testimonial", testimonial);
app.get("/blog-detail/:index", blogDetail);

const data = [
  {
    title: "1",
    content: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQII2GzY69nILBen0At_CRqDsxH7Ja-HjPag&s",
  },
  {
    title: "2",
    content: "2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQII2GzY69nILBen0At_CRqDsxH7Ja-HjPag&s",
  },
];

// service
function home(req, res) {
  res.render("index");
}

function blog(req, res) {
  res.render("blog", { data: data });
}

function deleteBlog(req, res) {
  const index = req.params.index;
  data.splice(index, 1);

  res.redirect("/blog");
}

function addBlog(req, res) {
  const { title, content } = req.body;

  data.push({
    title,
    content,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQII2GzY69nILBen0At_CRqDsxH7Ja-HjPag&s",
  });

  res.redirect("/blog");
}

function editBlogView(req, res) {
  const index = req.params.index;

  res.render("edit-blog", { data: data[index], index: index });
}

function editBlog(req, res) {
  const index = req.params.index;
  const { title, content } = req.body;

  data[index] = {
    title: title,
    content: content,
    image:
      "https://i.pinimg.com/1200x/c5/ec/a2/c5eca2d834452f9a91d98cf2b13e76bb.jpg",
  };

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

function blogDetail(req, res) {
  const { index } = req.params;

  if (!data[index]) {
    res.render("not-found");
  } else {
    res.render("blog-detail", { data: data[index] });
  }
}

app.listen(port, () => {
  console.log("Server is running on PORT :", port);
});

import express from "express";

const app = express();

const PORT = process.env.PORT;

//home route
app.get("/", (req, res) => {
  res.json({
    message: "This is the home page",
  });
});

//users route
app.get("/users", (req, res) => {
  res.json({
    message: "getting users",
  });
});

app.post("/", (req, res) => {
  res.json({
    message: "adding users",
  });
});

app.put("/", (req, res) => {
  res.json({
    message: "editing users",
  });
});

app.delete("/", (req, res) => {
  res.json({
    message: "deleting users",
  });
});

//courses
app.get("/courses", (req, res) => {
  res.json({
    message: "Getting courses",
  });
});

app.post("/courses", (req, res) => {
  res.json({
    message: "adding courses",
  });
});

app.put("/courses", (req, res) => {
  res.json({
    message: "editing coursers",
  });
});

app.delete("/", (req, res) => {
  res.json({
    message: "deleting courses",
  });
});

//units
app.get("/units", (req, res) => {
  res.json({
    message: "getting units",
  });
});

app.post("/units", (req, res) => {
  res.json({
    message: "adding units",
  });
});

app.put("/units", (req, res) => {
  res.json({
    message: "editing units",
  });
});

app.delete("/units", (req, res) => {
  res.json({
    message: "deleting units",
  });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

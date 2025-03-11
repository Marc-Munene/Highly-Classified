import express from "express";

const app = express();

const PORT = process.env.PORT;

//home route
app.get("/", (req, res) => {
  res.json({
    message: "This is the home page",
  });
});

//users
app.get("/users", (req, res) => {
  res.json({
    message: "getting users",
  });
});

app.post("/users", (req, res) => {
  res.json({
    message: "adding users",
  });
});

app.put("/users", (req, res) => {
  res.json({
    message: "editing users",
  });
});

app.delete("/users", (req, res) => {
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

app.delete("/courses", (req, res) => {
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

//sessions

app.get("/sessions", (req, res) => {
  res.json({
    message: "getting sessions",
  });
});

app.post("/sessions", (req, res) => {
  res.json({
    message: "adding sessions",
  });
});

app.put("/sessions", (req, res) => {
  res.json({
    message: "editing sessions",
  });
});

app.delete("/sessions", (req, res) => {
  res.json({
    message: "deleting sessions",
  });
});

//buildings
app.get("/buildings", (req, res) => {
  res.json({
    message: "getting buildings",
  });
});

app.post("/buildings", (req, res) => {
  res.json({
    message: "adding buildings",
  });
});

app.put("/buildings", (req, res) => {
  res.json({
    message: "editing buildings",
  });
});

app.delete("/buildings", (req, res) => {
  res.json({
    message: "deleting buildings",
  });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

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

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

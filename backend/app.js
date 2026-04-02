const express = require("express");
const app = express();

// const userRoutes = require("./routes/userRoutes");

app.use(express.json());

// routes
// app.use("/api/users", userRoutes);

// home route
app.get("/", (req, res) => {
  res.send("🚀 Express Backend Running through express");
});

// server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
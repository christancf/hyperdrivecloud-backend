const express = require("express");
const app = express();
const PORT = 4567;
app.get("/", (req, res) => {
  res.send({
    message: "hyperdrive cloud backend is running successfully!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

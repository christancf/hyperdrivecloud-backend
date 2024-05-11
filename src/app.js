import express from "express";
import router from "./routes/index.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "hyperdrive cloud backend is running successfully!",
  });
});

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

import express from "express";
import cors from "cors";

import router from "./api.mjs";

const app = express();

const PORT = 3000;

app.use(cors());
app.use("/api", router);
app.use("/images", express.static("images"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

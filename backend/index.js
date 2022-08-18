import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import data from "./data/list.json";
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/list", (req, res) => {
  const result = data;
  res.json(result);
});

app.listen(port, () =>
  console.log(`⚡️ ⚡️ Server UP en puerto http://localhost:${port}!`)
);

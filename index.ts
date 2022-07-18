import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
require("./connection");
require("./src/models/Dogs");

dotenv.config();

const app: Express = express();

import routes from "./src/routes";

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT || 3333}`);
});

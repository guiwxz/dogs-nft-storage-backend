import express from "express";

const routes = express.Router();

import dogsController from "./controllers/dogsController";

routes.get("/dogs/:dogName", dogsController.fetchDog);
routes.post("/dogs", dogsController.store);

export default routes;

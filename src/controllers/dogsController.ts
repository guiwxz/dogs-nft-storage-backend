import mongoose from "mongoose";
import { Request, Response } from "express";

const DogsModel = mongoose.model("Dogs");

//mongoose.set("autoIndex", true);

const store = async (req: Request, res: Response) => {
  try {
    console.log(req);
    const dogFile = await DogsModel.create(req.body);
    return res.json(dogFile);
  } catch (err) {
    console.log(err);
    res.json({ error: "Não foi possível incluir" });
  }
};

const fetchDog = async (req: Request, res: Response) => {
  try {
    console.log(req.params);
    const dogFile = await DogsModel.find({ dogName: req.params.dogName });
    console.log(dogFile);
    return res.status(200).json({ data: dogFile });
  } catch (err) {
    res.status(500).json({ error: "Não foi possível buscar" });
  }
};

const deleteDog = async (req: Request, res: Response) => {
  try {
    console.log(req.params);
    const dogFile = await DogsModel.deleteOne({ _id: req.params.id })
    console.log(dogFile);
    return res.status(200).json();
  } catch (err) {
    res.status(500).json({ error: "Não foi possível excluir" });
  }
};

export default { fetchDog, store, deleteDog };

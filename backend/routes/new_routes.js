import express from "express";
import { Gets,Getone, Posts, Updates, Deletes } from "../controller/samplerouter.controller.js";

const router = express.Router()

router.get("/", Gets);

router.get("/:id", Getone);

router.post("/post", Posts);

router.put("/update/:id", Updates);

router.delete("/delete/:id", Deletes);


export default router;
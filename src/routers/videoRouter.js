import express from "express";
import getVideos from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/videos", getVideos);

export default videoRouter;

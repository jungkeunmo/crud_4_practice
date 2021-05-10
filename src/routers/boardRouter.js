import express from "express";
import { createdBoardController, createdController, deleteBoardController, detailController, editBoardController, editController, homeController } from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get("/", homeController);
boardRouter.get("/detail", detailController);
boardRouter.get("/create", createdController);
boardRouter.get("/edit", editController);
boardRouter.post("/createBoard", createdBoardController);
boardRouter.post("/deleteBoard", deleteBoardController);
boardRouter.post("/editBoard", editBoardController);

export default boardRouter;


import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerById, postPlayer, updatePlayer } from "./controllers/players-controller";

export const router = Router()

router.get("/players", getPlayer)
router.get("/players/:id", getPlayerById)
router.delete("/players/:id", deletePlayer)
router.patch("/players/:id", updatePlayer)

router.post("/players", postPlayer)

router.get("/clubs")
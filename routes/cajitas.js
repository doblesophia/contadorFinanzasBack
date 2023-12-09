import express from "express"
import createCajitas from "../controllers/cajitas/createCajitas.js"
import readCajitas from "../controllers/cajitas/readCajitas.js"
import validator from "../validators/validator.js"
import cajitaValidator from "../validators/cajitaValidator.js"
import updateCajita from "../controllers/cajitas/updateCajitas.js"
import deleteCajita from "../controllers/cajitas/deleteCajitas.js"
const router = express.Router()

router.post("/", createCajitas)
router.get("/", readCajitas)
router.put("/:id", validator(cajitaValidator), updateCajita)
router.delete("/:id", deleteCajita)

export default router
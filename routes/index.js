import express from 'express';
import userRouter from "./users.js"
import cajitas from "../routes/cajitas.js"

const router = express.Router();

/* GET home page. */
router.use("/auth", userRouter)
router.use("/cajitas", cajitas )
export default router;

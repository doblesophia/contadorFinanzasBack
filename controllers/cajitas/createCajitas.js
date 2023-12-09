import Cajita from "../../models/cajita.js";

export default async(req,res)=>{
 try {
    await Cajita.create(req.body)
    return res.status(201).json({
        success: true,
        message: "created!"
    })
 } catch (error) {
    return res.status(500).json({
        success: false,
        message: message.error
    })
 }
}
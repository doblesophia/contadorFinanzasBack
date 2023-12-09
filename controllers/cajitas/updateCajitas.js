import Cajita from "../../models/cajita.js"

const updateCajita = async(req,res,next) => {
    try {
        let upd = await Cajita.findByIdAndUpdate(
            req.params.id,
                req.body,
                { new: true }
        )
        if (upd) {
            return res.status(200).json({ response: upd,
            message: "Cajita successfully updated" })
        } else {
            return res.status(404).json({ response: 'not found' })
        }    

    } catch (error) {
        next(error)   
    }
}

export default updateCajita
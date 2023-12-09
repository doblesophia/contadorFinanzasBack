import Cajita from "../../models/cajita.js"

const deleteCajita = async (req,res)=>{
    try {
        let deletedCajita = await Cajita.findByIdAndDelete({_id: req.params.id})

        if (!deletedCajita) {
            return res.status(404).json({ message: 'Cajita not found' });
          }else{
            res.status(200).json({ message: 'Cajita deleted successfully', deletedCajita })
          }
      
    } catch (error) {
        console.error("Cajita couldn't be deleted:", error);
    res.status(500).json({ message: 'Server internal error' });
    }
}

export default deleteCajita
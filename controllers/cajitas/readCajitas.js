import Cajita from "../../models/cajita.js"

export default async function (req, res) {
try {
    let cajita = await Cajita.find()
    return res.status(200).json({
        success: true,
        response: 'ok',
        message : '/cajitas',
        product: cajita
});
} catch (error) {
    console.log(error)
}
}
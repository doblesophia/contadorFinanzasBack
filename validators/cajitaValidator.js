import joi from "joi";

let cajitasValidator = joi.object({
    name: joi.string().min(3).max(30).messages({
        "string.empty": `Name cannot be an empty field`,
        "string.min": `Name should have a minimum length of { #limit}`,
        "string.max": `Name should have a maximum length of { #limit}`,
    }),
    porcentaje: joi.number().min(0).messages({
        "number.empty": "Number should be there"
    })
})

export default cajitasValidator
import Joi from "joi"
const serviceValidationSchema = Joi.object({
    serviceType: Joi.string()
        .valid('E-Doctors', 'Doctor at Home', 'Second Opinion', 'E-Psychologist', 'E-Physiotherapist', 'E-Patient Care')
        .required()
        .messages({
            'any.required': 'Service type is required',
            'any.only': 'Service type must be one of [E-Doctors, Doctor at Home, Second Opinion, E-Psychologist, E-Physiotherapist, E-Patient Care]',
            'string.empty': 'Service type cannot be empty'
        }),

    number: Joi.string()
        .pattern(/^\d+$/)  // Ensures the string contains only digits (numbers)
        .required()
        .messages({
            'string.pattern.base': 'Number must contain only digits',
            'any.required': 'Number is required',
            'string.empty': 'Number cannot be empty'
        }),
    })

    export default serviceValidationSchema;
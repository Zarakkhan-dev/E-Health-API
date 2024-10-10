
import Joi from 'joi';

 const userValidationSchema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.base': 'Username should be a type of text',
            'string.empty': 'Username cannot be empty',
            'string.min': 'Username should have at least {#limit} characters',
            'string.max': 'Username should have at most {#limit} characters',
            'any.required': 'Username is required',
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Please enter a valid email address',
            'any.required': 'Email is required',
        }),

    password: Joi.string()
        .min(8)
        .required()
        .messages({
            'string.min': 'Password should have at least {#limit} characters',
            'any.required': 'Password is required',
        }),
});


export default userValidationSchema;

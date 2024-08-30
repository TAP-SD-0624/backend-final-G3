
import Joi from 'joi';
// Define the schema for registration validation with length constraints
const registerValidation = Joi.object({
  firstName: Joi.string()
    .min(3)
    .max(20)
    .required()
    .messages({
      'string.base': 'First name must be a string',
      'string.min': 'First name must be at least 3 characters long',
      'string.max': 'First name must be less than or equal to 20 characters long',
      'any.required': 'First name is required',
    }),
  lastName: Joi.string()
    .min(3)
    .max(20)
    .required()
    .messages({
      'string.base': 'Last name must be a string',
      'string.min': 'Last name must be at least 3 characters long',
      'string.max': 'Last name must be less than or equal to 20 characters long',
      'any.required': 'Last name is required',
    }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'Invalid email format',
    'any.required': 'Email is required',
  }),
  mobileNumber: Joi.string()
    .pattern(/^\+\d{10,15}$/)
    .required()
    .messages({
      'any.required': 'Phone number is required. Please provide a valid phone number.',
      'string.pattern.base': 'Phone number must start with a "+" sign and be followed by \
      10 to 15 digits. Ensure the number is in the correct international format.',
    }),
  password: Joi.string()
    .min(8)
    .required()
    .pattern(/[A-Z]/, 'uppercase letter')
    .pattern(/[a-z]/, 'lowercase letter')
    .pattern(/\d/, 'number')
    .pattern(/[\W_]/, 'special character')
    .messages({
      'string.min': 'Password must be at least 8 characters long',
      'string.pattern.name': 'Password must contain at least one {#name}',
      'any.required': 'Password is required',
    }),
  confirmPassword: Joi.any()
    .equal(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Passwords do not match',
      'any.required': 'Password confirmation is required',
    }),
});

const loginValidation = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Invalid email format',
      'any.required': 'Email is required',
    }),
  password: Joi.string()
    .required()
    .messages({
      'any.required': 'Password is required',
    }),
});

export { registerValidation, loginValidation };

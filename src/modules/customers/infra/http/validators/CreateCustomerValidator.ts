import { celebrate, Joi, Segments } from 'celebrate';

const pattern = '^[^\\s]+$';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    username: Joi.string().required().regex(new RegExp(pattern)).messages({
      'string.pattern.base': '"username" should not contain spaces.',
    }),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

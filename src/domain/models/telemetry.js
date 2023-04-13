import { Joi } from 'celebrate';

export const geocodingSchema = Joi.object().keys({
  lat: Joi.number().required(),
  lng: Joi.number().required(),
  address: Joi.string().required()
});

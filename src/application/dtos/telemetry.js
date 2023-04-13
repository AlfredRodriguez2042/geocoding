import { Joi, Segments, celebrate } from 'celebrate';

export const createSchemaTelemetry = celebrate(
  {
    [Segments.BODY]: Joi.object().keys({
      lat: Joi.number().required(),
      lng: Joi.number().required()
    })
  },
  { abortEarly: false }
);

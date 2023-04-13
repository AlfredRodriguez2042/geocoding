import { Router } from 'express';
import { createSchemaTelemetry } from '../../application/dtos/telemetry.js';
export const telemetryRoute = ({ telemetryController }) => {
  const router = Router();
  router.get('/', telemetryController.findAll);
  router.get('/:id', telemetryController.findOne);
  router.post('/', [createSchemaTelemetry], telemetryController.create);
  router.put('/:id', telemetryController.update);
  router.delete('/:id', telemetryController.delete);
  return router;
};

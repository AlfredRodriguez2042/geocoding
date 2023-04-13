import { Router } from 'express';

export const mainRouter = ({ telemetryRoute }) => {
  const router = Router();
  router.use('/telemetry', telemetryRoute);
  return router;
};

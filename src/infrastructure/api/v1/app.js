import { CelebrateError } from 'celebrate';
import express from 'express';
export const App = ({ mainRoute }) => {
  const app = express();
  // Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // Routes
  app.use('/api', mainRoute);

  app.use((error, req, res, rext) => {
    if (error.code === 'ERR_ASSERTION' || error instanceof CelebrateError) {
      return res.status(422).json({ message: 'Invalid Entity', statusCode: 422 });
    }
    return res.status(500).send(error);
  });
  return app;
};

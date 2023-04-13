import { App } from '../api/v1/app.js';
import { Bootstrap } from '../api/v1/bootstrap.js';

import { asClass, asFunction, createContainer, InjectionMode } from 'awilix';
import { telemetryService } from '../../application/services/telemetry.js';
import { telemetryController } from '../controllers/index.js';
import { telemetryRepository } from '../persistence/repositories/telemetry.js';
import { mainRouter } from '../routes/index.js';
import { telemetryRoute } from '../routes/telemetry.js';

const container = createContainer({
  injectionMode: InjectionMode.PROXY
});
// Application Layer
container.register({
  telemetryService: asFunction(telemetryService).singleton()
});
// Domain Layer
// Infrastructure Layer
container.register({
  telemetryController: asFunction(telemetryController),
  telemetryRepository: asFunction(telemetryRepository).singleton(),
  telemetryRoute: asFunction(telemetryRoute).singleton(),
  mainRoute: asFunction(mainRouter).singleton(),
  app: asFunction(App).singleton(),
  bootstrap: asClass(Bootstrap).singleton()
});
export default container;

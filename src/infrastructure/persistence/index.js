import { Sequelize } from 'sequelize';
import Telemetry from '../../domain/entities/telemetry.js';

const sequelize = new Sequelize('telemetry', 'user', 'pass', {
  dialect: 'sqlite',
  host: './dev.sqlite'
});

Telemetry.init(sequelize);
export default sequelize;

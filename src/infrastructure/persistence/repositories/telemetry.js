import Telemetry from '../../../domain/entities/telemetry.js';
export const telemetryRepository = () => ({
  findAll: async () => await Telemetry.findAll(),
  findOne: async (id) => await Telemetry.findByPk(id),
  create: async (telemetry) => await Telemetry.create(telemetry),
  update: async (id, query) => await Telemetry.update(query, { where: id }),
  delete: async (id) => await Telemetry.destroy(id)
});

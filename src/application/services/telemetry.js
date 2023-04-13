import { geocodingSchema } from '../../domain/models/telemetry.js';
import { geolocationClient } from '../../domain/ports/geolocation.js';
export const telemetryService = ({ telemetryRepository }) => ({
  findAll: async () => await telemetryRepository.findAll(),
  findOne: async (id) => await telemetryRepository.findOne(id),
  create: async ({ lat, lng }) => {
    const geocoding = await geolocationClient(lat, lng);
    const { error } = geocodingSchema.validate(geocoding);
    if (error) {
      return null;
    }
    await telemetryRepository.create(geocoding);
    return geocoding;
  },
  update: async (id, input) => await telemetryRepository.update(id, input),
  delete: async (id) => await telemetryRepository.delete(id)
});

import { geolocationClient } from '../src/domain/ports/geolocation.js';
import container from '../src/infrastructure/ioc/index.js';
describe('application service', () => {
  const repository = container.resolve('telemetryRepository');
  const service = container.resolve('telemetryService');
  const controller = container.resolve('telemetryController');
  const server = container.resolve('mainRoute');
  const payload = { lat: 40.4155730370625, lng: -3.7074213296251095 };
  it('test is defined functions', () => {
    expect(service.create).toBeDefined();
    expect(repository.create).toBeDefined();
    expect(geolocationClient).toBeDefined();
  });
  it('test service', async () => {
    const result = { lat: '40.4155730370625', lng: '-3.7074213296251095', address: 'Plaza Mayor,28012 Madrid' };
    const spyService = jest.spyOn(service, 'create');
    const spyRepository = jest.spyOn(repository, 'create');
    const response = await service.create(payload);
    expect(spyService).toHaveBeenCalledWith(payload);
    expect(spyRepository).toHaveBeenCalledWith(response);
    expect(response.address).toEqual(result.address);
  });
  it('Test e2e ', async () => {
    const response = await fetch('http://localhost:3001/api/telemetry');
    const res = await response.json();
    expect(response.status).toEqual(200);
    expect(res).toHaveLength(res.length);
    expect(res).toContain(res[0]);
  });
});

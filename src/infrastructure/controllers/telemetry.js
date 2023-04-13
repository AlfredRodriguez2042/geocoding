export const telemetryController = ({ telemetryService }) => ({
  findAll: async (req, res) => {
    return res.status(200).json(await telemetryService.findAll());
  },
  findOne: async (req, res) => {
    return res.status(200).json(await telemetryService.findOne(req.params.id));
  },
  create: async (req, res) => {
    try {
      const telemetry = await telemetryService.create(req.body);
      if (!telemetry) {
        return res.status(403).json({ message: 'Forbiden', statusCode: 403 });
      }
      return res.status(201).json(telemetry);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', statusCode: 500 });
    }
  },
  update: async (req, res) => {
    return res.status(200).json(await telemetryService.update(req.params.id, req.body));
  },
  delete: async (req, res) => {
    return res.status(200).json(await telemetryService.delete(req.params.id));
  }
});

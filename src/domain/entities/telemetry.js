import { Model, NUMBER, STRING, UUID, UUIDV4 } from 'sequelize';

class Telemetry extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV4()
        },
        lat: {
          type: NUMBER
        },
        lng: {
          type: NUMBER
        },
        address: {
          type: STRING
        }
      },
      { sequelize }
    );
  }
}
export default Telemetry;

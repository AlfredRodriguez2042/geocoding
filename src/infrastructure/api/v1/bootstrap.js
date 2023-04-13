import sequelize from '../../persistence/index.js';

export class Bootstrap {
  constructor({ app }) {
    this.app = app;
  }

  run() {
    sequelize
      .sync()
      .then(() => {
        this.app.listen(3001, () => console.log('sever Ready'));
      })
      .catch((err) => console.log(err));
  }
}

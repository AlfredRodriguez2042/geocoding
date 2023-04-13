import container from './infrastructure/ioc/index.js';
const main = async () => {
  try {
    const httpServer = await container.resolve('bootstrap');
    return httpServer.run();
  } catch (error) {
    console.log(error);
  }
};
main();

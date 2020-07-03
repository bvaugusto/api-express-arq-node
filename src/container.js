const awilix = require('awilix');

const { createContainer, asClass, asValue, InjectionMode } = awilix;
const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
});

container.register({});

module.exports = container;
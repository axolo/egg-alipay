'use strict';

const Alipay = require('./lib/alipay');

const createAlipay = (config, app) => {
  const alipay = new Alipay(config, app);
  return alipay;
};

module.exports = app => {
  app.addSingleton('alipay', createAlipay);
};

'use strict';

const Alipay = require('./lib/alipay');

const createAlipay = config => {
  const alipay = new Alipay(config);
  return alipay;
};

module.exports = app => {
  app.addSingleton('alipay', createAlipay);
};

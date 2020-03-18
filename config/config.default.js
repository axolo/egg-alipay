'use strict';

/**
 * egg-alipay default config
 * @member Config#alipay
 * @property {String} SOME_KEY - some description
 * @see https://www.yuque.com/chenqiu/alipay-node-sdk/config-sdk
 */
exports.alipay = {
  default: {
    AlipaySdk: require('alipay-sdk').default,
    gateway: 'https://openapi.alipay.com/gateway.do',
  },
  // client: {
  //   appId: 'alipay-open-api-appId',
  //   privateKey: 'fs.readFileSync(\'./private-key.pem\', \'ascii\')',
  // },
};

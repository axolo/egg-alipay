'use strict';

const AlipaySdk = require('alipay-sdk').default;
const Form = require('alipay-sdk/lib/form').default;
const util = require('alipay-sdk/lib/util');

class Alipay {
  constructor(config, app) {
    this.app = app;
    this.config = config;
    this.Form = Form;
    this.util = util;
    this.sdk = new AlipaySdk(config);
  }
}

module.exports = Alipay;

'use strict';

class Alipay {
  constructor(config) {
    const { AlipaySdk } = config;
    this.config = config;
    this.AlipaySdk = AlipaySdk;
    this.sdk = new AlipaySdk(config);
  }
}

module.exports = Alipay;

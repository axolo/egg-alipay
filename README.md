# egg-alipay

[Official Document](https://www.yuque.com/chenqiu/alipay-node-sdk)

## Install

```bash
npm i @axolo/egg-alipay --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.alipay = {
  enable: true,
  package: '@axolo/egg-alipay',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
const fs = require('fs');
const path = require('path');
const alipayPrivateKeyPath = 'path/to/your-alipay-app-private-key.pem';
const alipayPublicKeyPath = 'path/to/alipay-public-key.pem';
const alipayPrivateKey = fs.readFileSync(path.join(appInfo.baseDir, alipayPrivateKeyPath), 'ascii');
const alipayPublicKey = fs.readFileSync(path.join(appInfo.baseDir, alipayPublicKeyPath), 'ascii');
exports.alipay = {
  default: {
    AlipaySdk: require('alipay-sdk').default,
    camelcase: true,
  },
  clients: {
    sandbox: {
      gateway: 'https://openapi.alipaydev.com/gateway.do', // sandbox
      appId: 'your-alipay-app-id',
      alipayPublicKey,
      privateKey: alipayPrivateKey,
      notifyUrl: 'url/to/your-alipay-notify',
    },
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Document

|  member   |         description          |
| --------- | ---------------------------- |
| AlipaySdk | class of AlipaySdk           |
| sdk       | instance of AlipaySdk        |
| config    | config of AlipaySdk instance |

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-alipay/issues).

## License

[MIT](LICENSE)

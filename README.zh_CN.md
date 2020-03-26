# egg-alipay

[官方文档](https://www.yuque.com/chenqiu/alipay-node-sdk)

## 安装

```bash
npm i @axolo/egg-alipay --save
```

## 开启

```js
// config/plugin.js
exports.alipay = {
  enable: true,
  package: '@axolo/egg-alipay',
};
```

## 配置

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

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 文档

|   成员    |       说明        |
| --------- | ----------------- |
| AlipaySdk | AlipaySdk类       |
| sdk       | AlipaySdk实例     |
| config    | AlipaySdk实例配置 |

## 交流

请到 [egg issues](https://github.com/axolo/egg-alipay/issues) 异步交流。

## License

[MIT](LICENSE)

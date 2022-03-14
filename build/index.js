const asyncShell = require('async-shelljs');
const chromium = require('chrome-aws-lambda');
const Launcher = require('@wdio/cli').default

exports.inboxSettings = async (req, res) => {
  req.body;
  const path = await chromium.executablePath;
  process.env.executablePath = process.platform === 'linux' ? path : '';
  const wdio = new Launcher('./wdio.conf.js');
  wdio.run().then(code => res.send({ status: code }));
};
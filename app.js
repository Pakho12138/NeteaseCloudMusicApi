#!/usr/bin/env node
const generateConfig = require('./generateConfig')
async function start() {
  await generateConfig()
  const app = await require('./server').serveNcmApi({
    checkVersion: true,
  })
  console.log('---------------app-----------------', app)
}
start()

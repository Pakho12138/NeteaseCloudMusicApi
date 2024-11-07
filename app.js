#!/usr/bin/env node
const generateConfig = require('./generateConfig')
async function start() {
  await generateConfig()
  const app = await require('./server').serveNcmApi({
    checkVersion: true,
  })
  console.log('-------------app---------------', app)
  app.server = app.listen(port, host, () => {
    console.log(`server running @ http://${host ? host : 'localhost'}:${port}`)
  })
}
start()

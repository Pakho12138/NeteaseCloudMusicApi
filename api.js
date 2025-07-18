// export default {
//   async fetch(request, env, ctx) {
//     const serverless = require('serverless-http')
//     const generateConfig = require('./generateConfig')
//     await generateConfig()
//     const app = await require('./server.netlify').serveNcmApi({
//       checkVersion: true,
//     })
//     const server = serverless(app)
//     const result = await server(env, ctx)
//     console.log('---------------------result-------------------', result)
//     console.log('---------------------event-------------------', env)
//     console.log('---------------------context-------------------', context)
//     return result
//   },
// }

export default {
  async fetch(request, env, ctx) {
    return new Response('Hello World!')
  },
}

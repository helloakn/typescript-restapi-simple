import config from './common/global.config'
import Server from './server'

const { ServerConfig } = config
console.log('ServerConfig',ServerConfig)

const server : Server = new Server(ServerConfig.PORT);
server.init();

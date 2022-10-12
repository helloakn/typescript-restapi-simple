import config from './common/common.globalConfig'
import Server from './server'

const { ServerConfig } = config
//console.log('ServerConfig',ServerConfig)

const server : Server = new Server(ServerConfig.PORT);
server.init();

const debug = require('debug')('kilroy-node:server');

/**
 * Function
 */
class Function {
    /**
     * 标准化端口
     * 将端口标准化为数字，字符串或false
     */
    normalizePort(val) {
        var port = parseInt(val, 10);
        
        if (isNaN(port)) {
            // named pipe
            return val;
        }
        
        if (port >= 0) {
            // port number
            return port;
        }
        
        return false;
    }
    
    /**
     * 错误事件
     * HTTP服务器“错误”事件的事件侦听器
     */
    onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }
        
        const bind = typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port ' + port;
        
        // 通过友好的消息处理特定的监听错误
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
    
    /**
     * 监听事件
     * HTTP服务器“监听”事件的事件侦听器。
     */
    onListening(server) {
        const addr = server.address(),
            bind = typeof addr === 'string'
                ? 'pipe ' + addr
                : 'port ' + addr.port;
        debug('Listening on ' + bind);
    }
}

const FN = new Function();
module.exports = FN;

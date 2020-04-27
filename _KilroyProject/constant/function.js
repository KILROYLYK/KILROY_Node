const DataBase = require('../database/_DataBase'),
    debug = require('debug')('kilroy-node:server');

const Function = {
    /**
     * 标准化端口（将端口标准化为数字，字符串或false）
     * @param {number|string|boolean} port 端口
     * @return {number|string|boolean} 标准化结果
     */
    normalizePort(port) {
        const portNum = parseInt(port, 10); // 十进制整数
        
        if (isNaN(portNum)) return port; // 没有数字的字符串
        
        if (portNum >= 0) return portNum; // 整数
        
        return false;
    },
    
    /**
     * 监听错误事件（HTTP服务器“错误”事件的事件侦听器）
     * @param {number|string|boolean} port 端口
     * @param {Object} error 错误对象
     * @return {void}
     */
    onError(port, error) {
        if (error.syscall !== 'listen') throw error;
        
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
    },
    
    /**
     * 监听监听事件（HTTP服务器“监听”事件的事件侦听器）
     * @param {Object} server 服务器对象
     * @return {void}
     */
    onListening(server) {
        const addr = server.address(),
            bind = typeof addr === 'string'
                ? 'pipe ' + addr
                : 'port ' + addr.port;
        debug('Listening on ' + bind);
    },
    
    //----------Redis----------//
    
    //----------SQL----------//
    /**
     * 查询数据
     * @param {string} type 请求类型
     * @param {string} sql SQL名称
     * @return {void}
     */
    async queryData(type, sql) {
        return await DataBase.mysql[type](sql);
    }
};

module.exports = Function;

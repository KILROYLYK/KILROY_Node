const debug = require('debug')('kilroy-node:server');

const Status = require('../constant/status');

const Function = {
    //---------- Public ----------//
    /**
     * 获取随机整数
     * @param {number} n1 范围1
     * @param {number} n2 范围2
     * @return {number} 返回随机数
     */
    getRandomInt(n1, n2) {
        const _this = this;
        return Math.floor(Math.random() * (n2 - n1 + 1) + n1);
    },
    
    /**
     * 解析接口参数
     * @param {Object} req 请求
     * @return {object} 数据
     */
    parse(req) {
        const query = req._parsedOriginalUrl.query.split('&');
        
        let data = {};
        
        query.forEach((v, i, a) => {
            const value = v.split('=');
            data[value[0]] = value[1];
        });
        
        return data;
    },
    
    /**
     * 处理信息
     * @param {number} status 状态码
     * @param {string} data 数据
     * @return {string} 处理后数据
     */
    process(status, data) {
        return JSON.stringify({
            errorCode: status,
            errorMessage: Status[status],
            data: data
        });
    },
    
    /**
     * 错误信息
     * @param {number} status 状态码
     * @param {Object} error 错误信息
     * @param {Function} reject 拒绝
     * @return {void}
     */
    error(status, error, reject = null) {
        if (error) {
            // console.log(error);
            reject && reject(error);
            throw error;
        }
    },
    
    //---------- Server ----------//
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
    }
};

module.exports = Function;

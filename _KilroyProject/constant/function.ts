import Status from '../constant/status'; // 状态码

const Debug = require('debug')('kilroy-node:server');

/**
 * 函数
 */
export default class GlobalFunction {
    // ------ Public ------ //
    /**
     * 获取随机整数
     * @param {number} n1 范围1
     * @param {number} n2 范围2
     * @return {number} 返回随机数
     */
    public static getRandomInt(n1: number, n2: number): number {
        const _this = this;
        return Math.floor(Math.random() * (n2 - n1 + 1) + n1);
    }
    
    /**
     * 解析接口参数
     * @param {*} req 请求
     * @return {*} 数据
     */
    public static parse(req: any): any {
        const _this = this,
            query = req._parsedOriginalUrl.query.split('&'),
            data = Object.create(null);
        
        query.forEach((v: string, i: number, a: string[]) => {
            const value = v.split('=');
            data[value[0]] = value[1];
        });
        
        return data;
    }
    
    /**
     * 处理信息
     * @param {number} status 状态码
     * @param {string} data 数据
     * @return {string} 处理后数据
     */
    public static process(status: number, data: string): string {
        const _this = this;
        return JSON.stringify({
            errorCode: status,
            errorMessage: Status[status],
            data
        });
    }
    
    /**
     * 错误信息
     * @param {number} status 状态码
     * @param {*} error 错误信息
     * @param {Function} callback 拒绝
     * @return {void}
     */
    public static error(status: number, error: any, callback?: Function): void {
        const _this = this;
        if (error) {
            // console.log(error);
            callback && callback(error);
            throw error;
        }
    }
    
    // ------ Server ------ //
    /**
     * 标准化端口（将端口标准化为数字，字符串或false）
     * @param {*} port 端口
     * @return {*} 标准化结果
     */
    public static normalizePort(port: any): any {
        const _this = this,
            portNum = parseInt(String(port), 10); // 十进制整数
        
        if (isNaN(portNum)) return port; // 没有数字的字符串
        
        if (portNum >= 0) return portNum; // 整数
        
        return false;
    }
    
    /**
     * 监听错误事件（HTTP服务器“错误”事件的事件侦听器）
     * @param {*} port 端口
     * @param {*} error 错误对象
     * @return {void}
     */
    public static onError(port: any, error: any): void {
        const _this = this;
        
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
    }
    
    /**
     * 监听监听事件（HTTP服务器“监听”事件的事件侦听器）
     * @param {*} server 服务器对象
     * @return {void}
     */
    public static onListening(server: any): void {
        const _this = this,
            addr = server.address(),
            bind = typeof addr === 'string'
                ? 'pipe ' + addr
                : 'port ' + addr.port;
        Debug('Listening on ' + bind);
    }
};

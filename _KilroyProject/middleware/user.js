const DataBase = require('../database/_DataBase');

const Middleware = { // 中间件
    /**
     * 获取用户数据列表
     * @param {Object} req // 请求
     * @param {Object} res // 响应
     * @return {Promise} 异步
     */
    async getUser(req, res) {
        // console.log('//////User_QueryUserList', req, res);
        const data = await DataBase.MySQL.getData( 'user');
        // const data = await DataBase.Redis.getData( 'user');
        res.send(data);
    }
};

module.exports = Middleware;



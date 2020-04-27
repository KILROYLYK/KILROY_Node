const Function = require('../constant/function');

const middleware = { // 中间件
    /**
     * 获取用户数据列表
     * @param {Object} req // 请求
     * @param {Object} res // 响应
     * @return {Promise<void>} 异步
     */
    async getUser(req, res) {
        // console.log('//////User_QueryUserList', req, res);
        const data = await Function.queryData('get', 'queryUserList');
        res.send(data);
    }
};

module.exports = middleware;



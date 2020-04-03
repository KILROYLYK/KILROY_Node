const Function = require('../constant/Function');

module.exports = {
    /**
     * 获取用户数据列表
     * @param {Object} req // 请求
     * @param {Object} res // 响应
     * @param {Function} next // 下一步
     * @return {Promise<void>} 异步
     */
    async getUser(req, res, next) {
        // console.log('//////User_QueryUserList', req, res);
        const data = await Function.queryData('get', 'queryUserList');
        res.send(data);
        // next(); // 下一步
    }
};



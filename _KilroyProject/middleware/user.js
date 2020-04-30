const DataBase = require('../database/_DataBase');

const Function = require('../constant/function');

const Middleware = { // 中间件
    /**
     * 添加用户数据
     * @param {Object} req // 请求
     * @param {Object} res // 响应
     * @return {Promise}
     */
    async addUser(req, res) {
        // console.log('//////User_QueryUserList', req, res);
        const data = Function.parse(req);
        const result = await DataBase.addData('MySQL', 'user', {
            name: data.name,
            password: data.password,
            competence: data.competence
        });
        res.send(result);
    },
    
    /**
     * 获取用户数据列表
     * @param {Object} req // 请求
     * @param {Object} res // 响应
     * @return {Promise}
     */
    async getUser(req, res) {
        // console.log('//////User_QueryUserList', req, res);
        const result = await DataBase.getData('MySQL', 'user');
        res.send(result);
    },
    
    /**
     * 删除用户数据
     * @param {Object} req // 请求
     * @param {Object} res // 响应
     * @return {Promise}
     */
    async deleteUser(req, res) {
        // console.log('//////User_QueryUserList', req, res);
        const result = await DataBase.deleteData('MySQL', 'user', 'id=1');
        res.send(result);
    }
};

module.exports = Middleware;



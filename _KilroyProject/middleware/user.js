const DataBase = require('../database/_DataBase');

const Middleware = { // 中间件
    /**
     * 添加用户数据
     * @param {Object} req // 请求
     * @param {Object} res // 响应
     * @return {Promise}
     */
    async addUser(req, res) {
        // console.log('//////User_QueryUserList', req, res);
        const data = await DataBase.addData('MySQL', 'user', {
            id: 1,
            name: 111,
            password: 111,
            competence: 111
        });
        res.send(data);
    },
    
    /**
     * 获取用户数据列表
     * @param {Object} req // 请求
     * @param {Object} res // 响应
     * @return {Promise}
     */
    async getUser(req, res) {
        // console.log('//////User_QueryUserList', req, res);
        const data = await DataBase.getData('MySQL', 'user');
        res.send(data);
    },
    
    /**
     * 删除用户数据
     * @param {Object} req // 请求
     * @param {Object} res // 响应
     * @return {Promise}
     */
    async deleteUser(req, res) {
        // console.log('//////User_QueryUserList', req, res);
        const data = await DataBase.deleteData('MySQL', 'user', 'id=1');
        res.send(data);
    }
};

module.exports = Middleware;



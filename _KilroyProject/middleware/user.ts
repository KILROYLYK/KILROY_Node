import Global from '../constant/global';

// 中间件
const Middleware = {
    /**
     * 添加用户数据
     * @param {*} req // 请求
     * @param {*} res // 响应
     * @return {Promise}
     */
    async addUser(req: any, res: any): Promise<any> {
        // console.log('//////User_QueryUserList', req, res);
        const data = Global.Function.parse(req);
        const result = await Global.DataBase.addData('MySQL', 'user', {
            name: data.name,
            password: data.password,
            competence: data.competence
        });
        res.send(result);
    },
    
    /**
     * 获取用户数据列表
     * @param {*} req // 请求
     * @param {*} res // 响应
     * @return {Promise}
     */
    async getUser(req: any, res: any): Promise<any> {
        // console.log('//////User_QueryUserList', req, res);
        const result = await Global.DataBase.getData('MySQL', 'user');
        res.send(result);
    },
    
    /**
     * 删除用户数据
     * @param {*} req // 请求
     * @param {*} res // 响应
     * @return {Promise}
     */
    async deleteUser(req: any, res: any): Promise<any> {
        // console.log('//////User_QueryUserList', req, res);
        const result = await Global.DataBase.deleteData('MySQL', 'user', 'id=1');
        res.send(result);
    }
};

export default Middleware;



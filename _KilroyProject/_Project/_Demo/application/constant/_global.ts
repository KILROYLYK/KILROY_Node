import GlobalFunction from './function'; // 函数
import GlobalStatus from './status'; // 状态码
import GlobalDataBase from '../server/database/_DataBase'; // 数据库

/**
 * 全局
 */
export default class Global {
    public static readonly port: number | string = 3000; // 端口（0-65536)
    
    public static readonly Function: any = GlobalFunction;
    public static readonly Status: any = GlobalStatus;
    public static readonly DataBase: any = GlobalDataBase;
    
    public static Server: any = null;
}

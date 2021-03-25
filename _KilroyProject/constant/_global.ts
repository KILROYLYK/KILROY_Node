import Function from './function'; // 函数
import Status from './status'; // 状态码
import DataBase from '../database/_DataBase'; // 数据库

/**
 * 全局
 */
export default class Global {
    public static readonly port: number | string = 3000; // 端口（0-65536)
    
    public static readonly Function: any = Function;
    public static readonly Status: any = Status;
    public static readonly DataBase: any = DataBase;
    
    public static Server: any = null;
}

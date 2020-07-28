const DbFactory =require('../database/mysql')

const countUser=async()=>{
    //创建一个连接对象并初始化连接
    let DBConn=new DbFactory.DBUnity(await DBfactory.getConnection());
    try {
        //执行语句
        let result=await DBConn.query("select count (id) from t_user");
        console.log("result "+JSON.stringify(result))
        return result;
    }catch (e) {
        console.log("err msg "+JSON.stringify(e));
    }

}
module.exports={
    countUser
}
const DBfactory =require('../../mysql/DBfactory')

const dbtran=async()=>{
    //创建一个连接对象并初始化连接
    let DBConn=new DBfactory.DBUnity(await DBfactory.getConnection())
    //开启事务
    await DBConn.beginTransaction();
    try{
        //执行语句
        let query1=await DBConn.query("select username from user");
        //执行结果
        if(!query1.success){
            //回滚事务并释放连接
            DBConn.rollback()
            return [];
        }
        let query2=await DBConn.query("insert into test2(str) values('huv')");
        if(!query2.success){
            DBConn.rollback()
            return [];
        }
        //提交事务并释放连接
        DBConn.commit()
    }
    catch(e){
        DBConn.rollback()
        console.log(e)
    }
}
module.exports = {
    dbtran
}
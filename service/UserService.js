const userDao=require('../dao/UserDao')

const findUserNumbers=  async()=>{
    return userDao.countUser();
}
module.export={
    findUserNumbers
}
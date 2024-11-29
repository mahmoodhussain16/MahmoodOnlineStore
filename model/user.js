const fs=require('fs')
const path=require('path')

const filePath=path.resolve('data/userdata.json')

async function getAllUsers(){
    const data=await fs.readFile(filePath,'utf-8')
    return JSON.parse(data)
}
async function getUserById(id){
    const users=await getAllUsers()
    const user=users.find((user)=>user.id===id)
    return user
}
async function createUser(user){
    const users=await getAllUsers()
    const newUser={id:users.length+1,...user}
    users.push(newUser)

    await fs.writeFile(filePath,JSON.stringify(users,null,2))
    return newUser
}
async function updateUser(id, changeData){
    const users=await getAllUsers()
    const userIndex=users.findIndex((user)=>user.id===id)
    users[userIndex]={...users[userIndex],...changeData}
    
    await fs.writeFile(filePath, JSON.stringify(users, null, 2))
    return users[userIndex]
}
async function deleteUser(id){
    const users=await getAllUsers()
    const userIndex=users.findIndex((user)=>user.id===id)
    users[deletedUser]=users.splice(userIndex,1)
    
    await fs.writeFile(filePath, JSON.stringify(users, null, 2))
    return deleteUser
}
module.exports={
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}

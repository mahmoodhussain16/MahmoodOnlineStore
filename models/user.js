const fs=require('fs')
const path=require('path')

const filePath=path.resolve("data/user.json");

async function getAllUsers(){
    const data=await fs.readFile(filePath,'utf-8')
    return JSON.parse(data)
}
async function getUserById(id){
    const users=await getAllUsers()
    return users.find((user)=>user.id===id)
}
async function createNewUser(user){
    const users=await getAllUsers()
    const newUser={...user, id:users.length+1}
    users.push(newUser)
    await fs.writeFile(filePath, JSON.stringify(users))
    return newUser
}
async function updateUserById(id, updatedUser){
    const users=await getAllUsers()
    const index=users.findIndex((user)=>user.id===id)
    
        users[index]={...users[index], ...updatedUser}
        await fs.writeFile(filePath, JSON.stringify(users))
        return users[index]
    }

    async function deleteUserById(id){
        const users=await getAllUsers()
        const index=users.findIndex((user)=>user.id===id)
    
        const [deletedUser]=users.splice(index, 1)
        await fs.writeFile(filePath, JSON.stringify(users))
        return deletedUser
    }
    export{getAllUsers,getUserById,createNewUser,updateUserById,deleteUserById}
    


import { getAllUsers,getUserById,createNewUser, deleteUserById, updateUserById } from "../../models/user"

  
  async function getAll(req, res) {
    const users = await getAllUsers()
    res.json(users)
  }
  
  async function getOne(req, res) {
    const user = await getUserById(Number(req.params.id))
  
    if (!user) return res.status(404).json({ error: "User not found!" })
    res.json(user)
  }
  
  async function create(req, res) {
    const newUser = await createNewUser(req.body)
  
    res.status(201).json({ status: "Success", user: newUser })
  }
  
  async function update(req, res) {
    const updatedUser = await updateUserById(Number(req.params.id), req.body)
  
    if (!updatedUser) return res.status(404).json({ error: "User not found" })
    res.json({ status: "Updated", user: updatedUser })
  }
  
  async function remove(req, res) {
    const deletedUser = await deleteUserById(Number(req.params.id))
  
    if (!deletedUser) return res.status(404).json({ error: "User not found" })
    res.json({ status: "Updated", user: deletedUser })
  }
  
  export { getAll, getOne, create, update, remove }
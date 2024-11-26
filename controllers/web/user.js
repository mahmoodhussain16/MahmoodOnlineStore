import { getAllUsers,getUserById,createNewUser, deleteUserById, updateUserById } from "../../models/user"

  async function HomePage(req, res) {
    res.render("home")
  }
  async function registerForm(req, res) {
    res.render("users/register")
  }
  
  async function Dashboard(req, res) {
    const users = await getAllUsers()
    res.render("users/dashboard", { users })
  }
  
  async function Profile(req, res) {
    const user = await getUserById(Number(req.params.id))
  
    if (!user) return res.status(404).json({ error: "User not found!" })
    res.render("users/profile", { user })
  }
  
  async function registerNewUser(req, res) {
    const newUser = await createNewUser(req.body)
    res.redirect("/dashboard")
  }
  
  async function update(req, res) {
    const updatedUser = await updateUserById(Number(req.params.id), req.body)
  
    if (!updatedUser) return res.status(404).json({ error: "User not found" })
    res.redirect("/dashboard")
  }
  
  async function remove(req, res) {
    const deletedUser = await deleteUserById(Number(req.params.id))

    if (!deletedUser) return res.status(404).json({ error: "User not found" })
    res.redirect("/dashboard")
  }
  
  export {
    HomePage,
    registerForm,
    Dashboard,
    Profile,
    registerNewUser,
    update,
    remove,
  }
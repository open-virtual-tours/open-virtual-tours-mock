import User from '../models/User.js'

export const createUser = (req,res) => {
    res.json("creating user")
}

export const getUsers = async (req,res) => 
{
    const users = await User.find()
    res.json(users)
}
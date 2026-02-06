const prisma = require("../../config/prisma.js");
const {hashPassword, comparePassword} = require("../../utils/password.util.js");

const createUser = async (username, email, password) => {
    try {
        const hashedPassword = await hashPassword(password);
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })
        return newUser
    } catch(e) {
        console.error("Error creating user:", e)
    }
}

const getProfile = async (username) => {
  try {
    const user = await prisma.user.findUnique({
      where: { username },
      select: { id: true, username: true, email: true }
    });
    return user;
  } catch (e) {
    console.error("Error getting user profile:", e);
  }
}

module.exports = {
    createUser,
    getProfile
}
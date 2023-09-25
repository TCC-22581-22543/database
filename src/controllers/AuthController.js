import jwt from "jsonwebtoken";
import authConfig from "../config/auth.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    if (!(await checkPassword(password, user.senha))) {
      return res.status(401).json({ error: "Wrong credentials" });
    }

    const { id, name } = user;

    await User.create({
      user_id: id,
    });

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

// Função fora da classe
async function checkPassword(providedPassword, storedPasswordHash) {
  if (!providedPassword || !storedPasswordHash) {
    throw new Error("Invalid password or stored hash.");
  }

  return bcrypt.compare(providedPassword, storedPasswordHash);
}

export default new AuthController();

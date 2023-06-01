import User from "../models/User.js";

class UserController {
  async index(req, res) {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ where: { email } });

    if (userExist) {
      return res
        .status(400)
        .json({ error: "Usuário já existe, insira um email diferente" });
    }

    if (!name) {
      return res.status(400).json({ message: "erro" });
    }

    if (!email) {
      return res.status(400).json({ message: "erro" });
    }

    if (!password) {
      return res.status(400).json({ message: "erro" });
    }

    const newUser = await User.create({
      nome: name,
      email,
      senha: password
    })

    return res.status(200).json({ user: newUser });
  }
}

export default new UserController();
import User from "../models/User.js";
import bcrypt from "bcrypt";

class UserController {
  async create(req, res) {
    const { name, email, password, perfil } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res
        .status(400)
        .json({ error: "Usuário já existe, insira um email diferente" });
    }

    if (!name) {
      return res
        .status(400)
        .json({ message: "Erro ao cadastrar informações. Nome" });
    }

    if (!email) {
      return res
        .status(400)
        .json({ message: "Erro ao cadastrar informações. Email" });
    }

    if (!password) {
      return res
        .status(400)
        .json({ message: "Erro ao cadastrar informações. Senha" });
    }

    if (!perfil) {
      return res
        .status(400)
        .json({ message: "Erro ao cadastrar informações. Perfil" });
    }

    const newUser = await User.create({
      nome: name,
      email: email,
      senha: await bcrypt.hash(password, 8),
      perfil: perfil,
    });

    return res.status(200).json({ user: newUser });
  }

  async show(req, res) {
    const { id } = req.params;
    console.log(id);

    const userFound = await User.findById(id);

    if (!userFound)
      return res
        .status(400)
        .json({ message: "Usuário não encontrado, tente novamente!" });

    return res.status(200).json({ userFound });
  }

  async returnAllUsers(req, res) {
    try {
      const users = await User.find();

      return res.status(200).json({ users });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar usuários", error });
    }
  }

  async update(req, res) {
    const { name, email } = req.body;
    const { id } = req.params;

    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(400).json({ error: "Usuário não encontrado." });
    }

    if (email !== userExist.email) {
      const checkEmail = await User.findOne({ where: { email } });
      if (checkEmail) {
        return res
          .status(400)
          .json({ error: "Esse email já está sendo usado por outro usuário." });
      }
    }

    if (!name) {
      return res.status(400).json({ message: "Erro" });
    }

    const updatedUser = await userExist.updateOne({
      nome: name,
    });

    return res.status(200).json(updatedUser);
  }

  async delete(req, res) {
    const { id } = req.params;

    const userFound = await User.findById(id);

    if (!userFound) {
      return res
        .status(400)
        .json({ message: "Usuário não encontrado, tente novamente!" });
    }

    await userFound.deleteOne();

    return res.status(200).json({ message: "Usuário deletado." });
  }

  async recoverPassword(req, res) {}
}

export default new UserController();

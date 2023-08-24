import User from "../models/User.js";

class UserController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ where: { email } });

    if (userExist) {
      return res
      .status(400)
      .json({ error: "Usuário já existe, insira um email diferente" });
    }

    if (!name) {
      return res
      .status(400)
      .json({ message: "Erro ao cadastrar informações" });
    }

    if (!email) {
      return res
      .status(400)
      .json({ message: "Erro ao cadastrar informações" });
    }

    if (!password) {
      return res
      .status(400)
      .json({ message: "Erro ao cadastrar informações" });
    }

    const newUser = await User.create({
      nome: name,
      email: email,
      senha: password
    })

    return res.status(200).json({ user: newUser });
  }

  async show(req, res){
    const { id } = req.params;

    const userFound = await User.findById(id); 

    if(!userFound)
      return res
      .status(400)
      .json({ message: "Usuário não encontrado, tente novamente!" });


    return res.status(200).json({userFound});
    
  }

  async update(req, res) {
    const {name, email, password } = req.body;
    const { id } = req.params;

    const userExist = await User.findById(id); 

    if (!userExist) {
      return res
      .status(400)
      .json({ error: "Usuário não encontrado." });
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

    const updatedUser = await userExist.update({
      nome: name,
      email,
      senha: password
    })

    return res.status(200).json({ user: updatedUser });
  }

  async delete(req, res){
    const { id } = req.params;

    const userFound = await User.findById(id);

    if(!userFound){
      return res
      .status(400)
      .json({ message: "Usuário não encontrado, tente novamente!" });
    }

    await userFound.destroy()

    return res.status(200).json({message: "Usuário deletado."})
  }

}

export default new UserController();
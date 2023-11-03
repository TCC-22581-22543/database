import Anotacao from "../models/Anotacao.js";

class AnotacaoController {
  async create(req, res) {
    const { title, text } = req.body;
    const { id } = req.user;

    if (!title) {
      return res.status(400).json({ message: "Anotação sem título!" });
    }

    if (!text) {
      return res
        .status(400)
        .json({ message: "É necessário ter conteúdo na anotação!" });
    }

    const newAnotation = await Anotacao.create({
      id_usuario: id,
      titulo: title,
      texto: text,
    });

    return res.status(200).json(newAnotation);
  }

  async returnNotes(req, res) {
    const { id } = req.user;

    const anotations = await Anotacao.find({ id_usuario: id });

    return res.status(200).json(anotations);
  }

  async update(req, res) {
    const { id, title, text } = req.body;

    const anotation = await Anotacao.findById(id);

    if (!anotation) {
      return res.status(400).json({ message: "Anotação não encontrada!" });
    }

    let updatedFields = {};

    if (title) updatedFields.title = title;
    if (text) updatedFields.text = text;

    const updatedNotation = await userExist.update(updatedFields);

    return res.status(200).json({ anotation: updatedNotation });
  }

  async delete(req, res) {
    const { id } = req.params;

    const findId = await Anotacao.findById(id);

    if (!findId) {
      return res.status(400).json({ message: "Anotação não encontrada" });
    }

    await findId.deleteOne();
  }
}

export default new AnotacaoController();

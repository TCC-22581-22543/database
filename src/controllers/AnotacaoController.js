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
    const { id } = req.params;

    const anotations = await Anotacao.find({ id_usuario: id.toString() });

    return res.status(200).json(anotations);
  }

  async returnNotesById(req, res) {
    const { id } = req.params.id;

    try {
      const note = await Anotacao.findOne({ id });

      if (!note) {
        return res.status(404).json({ error: "Note not found" });
      }
      return res.json(note);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async update(req, res) {
    const { title, text } = req.body;
    const { id } = req.params;

    const anotation = await Anotacao.findById(id);

    if (!anotation) {
      return res.status(404).json({ message: "Anotação não encontrada!" }); // Updated to 404 for "Not Found"
    }

    let updatedFields = {};

    if (title) updatedFields.titulo = title;
    if (text) updatedFields.texto = text;

    try {
      const updatedNotation = await anotation.updateOne(updatedFields);

      return res.status(200).json({ anotation: updatedNotation });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar a anotação." });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    const findId = await Anotacao.findById(id);

    if (!findId) {
      return res.status(400).json({ message: "Anotação não encontrada" });
    }

    await findId.deleteOne();

    return res.status(200).json({ message: "Anotação deletada!" });
  }
}

export default new AnotacaoController();

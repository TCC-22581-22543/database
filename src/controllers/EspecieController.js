import Especie from "../models/Especie.js";

class EspecieController {
  async returnAllEspecies(req, res) {
    try {
      const especies = await Especie.find();
  
      return res.status(200).json({ especies });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar especie", error });
    }
  }
  async returnSpeciesById(req, res) {
    try {
      const { id } = req.params;

      const specie = await Especie.findById(id);

      if (!specie) {
        return res
          .status(400)
          .json({ message: "Erro ao buscar especie", error });
      }

      return res.status(200).json({ specie });
    } catch (error) {}
  }
}

export default new EspecieController();

import Especie from "../models/Especie.js";

class EspecieController {
  async showSpecies(req, res) {
    try {
      const species = await Especie.find();

      return res.status(200).json(species);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar espécies", error });
    }
  }
}

export default new EspecieController();

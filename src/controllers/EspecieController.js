import Especie from "../models/Especie.js";

class EspecieController {
  async read(req, res) {
    const { id } = req.params;

    const especie = await Especie.findById(id);

    if (!especie) {
      return res
        .status(400)
        .json({ message: "Especie não encontrada, tente novamente!" });
    }

    especie.image_url = especie.image_url.replace(/\\/g, "/");

    return res.status(200).json({
      nome: especie.nome,
      nome_cientifico: especie.nome_cientifico,
      classificacao: especie.classificacao,
      tipo_alimentacao: especie.tipo_alimentacao,
      bioma: especie.bioma,
      image_url: especie.image_url,
      evolucao: especie.evolucao,
      situacao_atual: especie.situacao_atual,
    });
  }

  async returnAllEspecies(req, res) {
    try {
      const especies = await Especie.find();

      especies.forEach((especie) => {
        especie.image_url = especie.image_url.replace(/\\/g, "/");
      });

      return res.status(200).json(especies);
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

  async updatedPicture(req, res) {
    try {
      if (req.file) {
        const especieId = req.params.id;
        const imageUrl = req.file.path;

        // Atualize a URL da imagem no documento da espécie
        const updatedEspecie = await Especie.findByIdAndUpdate(especieId, {
          image_url: imageUrl,
        });

        if (!updatedEspecie) {
          return res.status(404).json({ message: "Espécie não encontrada" });
        }

        return res.json({ message: "Upload de imagem bem-sucedido", imageUrl });
      } else {
        return res.status(400).json({ message: "Erro no upload de imagem" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Erro ao processar a imagem" });
    }
  }
}

export default new EspecieController();

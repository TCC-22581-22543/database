import Especie from "../models/Especie.js";

class EspecieController {

    async read(req, res){
        const { id } = req.params;

        const especie = await Especie.findById(id); 

        if(!especie){
            return res
            .status(400)
            .json({ message: "Especie não encontrada, tente novamente!" });
        }

        return res.status(200).json({
            nome: especie.nome,
            nome_cientifico: especie.nome_cientifico,
            classificacao: especie.classificacao,
            tipo_alimentacao: especie.tipo_alimentacao,
            bioma: especie.bioma,
            image_url: especie.image_url,
            evolucao:  especie.evolucao,
            situacao_atual: especie.situacao_atual,
        });
    }

    async returnAllEspecies(req, res) {
        try {
          const especies = await Especie.find();
    
          return res.status(200).json({ especies });
        } catch (error) {
          return res
            .status(500)
            .json({ message: "Erro ao buscar especie", error });
        }
      }

    /*async update(req, res){
        const { id, title, text } = req.body;

        const anotation = await Anotacao.findById(id); 

        if(!anotation){
            return res
            .status(400)
            .json({ message: "Anotação não encontrada!" });
        }
        
        let updatedFields = {};

        if(title) updatedFields.title = title;
        if(text) updatedFields.text = text;

        const updatedNotation = await userExist.update(updatedFields);

        return res.status(200).json({ anotation: updatedNotation });
    }

    async delete(req, res){
        const { id } = req.params;

        const findId = await Anotacao.findById(id);

        if(!findId){
            return res.status(400).json({message: "Anotação não encontrada"});
        }

        await findId.deleteOne();
    }*/
    
}

export default new EspecieController();
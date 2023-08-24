import Anotacao from "../models/Anotacao";

class AnotacaoController {
    async create(req, res){
        const {title, text} = req.body;

        if (!title) {
            return res
            .status(400)
            .json({ error: "Usuário já existe, insira um email diferente" });
        }
      
        if (!text) {
            return res
            .status(400)
            .json({ message: "Erro ao cadastrar informações" });
        }

        const newAnotation = await Anotacao.create({
            id,
            title,
            text
        });

        return res.status(200).json({newAnotation});
    }

    async read(req, res){
        const { id } = req.params;

        const anotation = await Anotacao.findById(id); 

        if(!anotation){
            return res
            .status(400)
            .json({ message: "Usuário não encontrado, tente novamente!" });
        }

        return res.status(200).json({anotation});
    }

    async update(req, res){
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

        await findId.destroy();
    }
    
}

export default new AnotacaoController();
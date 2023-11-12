import News from "../models/News.js";

class NewsController {
  async returnNews(req, res) {
    try {
      const news = await News.find();

      return res.status(200).json(news);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar noticias", error });
    }
  }
}

export default new NewsController();

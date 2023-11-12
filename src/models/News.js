import mongoose, { model } from "mongoose";

const News = model("Noticias", {
  _id: mongoose.Schema.Types.ObjectId,
  titulo: String,
  descricao: String,
  link: String,
});

export default News;

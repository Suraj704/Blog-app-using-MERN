
const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const blogSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

module.exports=mongoose.model('blog',blogSchema)

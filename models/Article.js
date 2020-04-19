import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  user: {
    type: String,
    default: 'anonymous',
  },
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  comments: [{ text: { type: String } }],
});

export default mongoose.model('article', ArticleSchema);

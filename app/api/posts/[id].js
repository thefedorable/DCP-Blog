import connectDB from '../../../lib/dbConnect';
import Post from '../../../lib/models/Post';

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  await connectDB();

  switch (method) {
    case 'GET':
      try {
        const post = await Post.findById(id);
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;

    case 'PUT':
      try {
        const post = await Post.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
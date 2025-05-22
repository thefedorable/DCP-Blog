//import Post from '../../lib/Post';
import { fetchPosts } from '../../lib/api/postFunctions'

export default function Posts() {
  const data = fetchPosts();

  return (
    <div className="bg-background">
      {data}
    </div>
  );
}
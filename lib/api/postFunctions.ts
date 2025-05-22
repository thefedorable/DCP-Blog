import { Post } from "../Post";

  export const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return undefined;
    }
  };

  // Create new post
  export const createPost = async (newPost: Post) => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      
      if (response.ok) {
        const post = await response.json();
        return post;
      }
    } catch (error) {
      console.error('Error creating post:', error);
      return undefined;
    }
  };
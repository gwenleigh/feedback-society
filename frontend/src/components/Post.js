import React from 'react';
import { useParams } from 'react-router-dom';
import forumData from '../data/forumData';

const Post = () => {
  const { postId } = useParams();

  // Find the post using the postId
  const post = forumData
    .flatMap(category => category.forums)
    .flatMap(forum => forum.recentTopics)
    .find(topic => topic.id === parseInt(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{post.content}</p>
      <p className="text-sm text-gray-500">
        Posted by {post.author} on {post.date}
      </p>
    </div>
  );
};

export default Post;

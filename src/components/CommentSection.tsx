"use client"
import React, { useState } from 'react';
import Button from './Button';

interface Reply {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  replies: Reply[];
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [replyAuthor, setReplyAuthor] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !authorName.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      author: authorName,
      content: newComment,
      timestamp: new Date().toLocaleString(),
      replies: []
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  const handleSubmitReply = (commentId: number) => {
    if (!replyContent.trim() || !replyAuthor.trim()) return;

    const reply: Reply = {
      id: Date.now(),
      author: replyAuthor,
      content: replyContent,
      timestamp: new Date().toLocaleString()
    };

    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, reply]
        };
      }
      return comment;
    });

    setComments(updatedComments);
    setReplyContent('');
    setReplyAuthor('');
    setReplyingTo(null);
  };

  return (
    <div className="max-w-5xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>
      
      {/* Comment Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <div>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Your name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full min-h-[100px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <Button>Post Comment</Button>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-lg shadow-md p-6">
            {/* Main Comment */}
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">{comment.author}</span>
              <span className="text-sm text-gray-500">{comment.timestamp}</span>
            </div>
            <p className="text-gray-700 mb-4">{comment.content}</p>
            
            {/* Reply Button */}
            <button 
              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              className="text-purple-500 hover:text-purple-600 text-sm mb-4"
            >
              {replyingTo === comment.id ? 'Cancel Reply' : 'Reply'}
            </button>

            {/* Reply Form */}
            {replyingTo === comment.id && (
              <div className="ml-8 mb-4 p-4 bg-gray-50 rounded-md">
                <div className="space-y-4">
                  <input
                    type="text"
                    value={replyAuthor}
                    onChange={(e) => setReplyAuthor(e.target.value)}
                    placeholder="Your name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Write a reply..."
                    className="w-full min-h-[80px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <Button onClick={() => handleSubmitReply(comment.id)} >Post Reply</Button>

                </div>
              </div>
            )}

            {/* Replies List */}
            {comment.replies.length > 0 && (
              <div className="ml-8 mt-4 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="bg-gray-50 rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{reply.author}</span>
                      <span className="text-sm text-gray-500">{reply.timestamp}</span>
                    </div>
                    <p className="text-gray-700">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-center text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
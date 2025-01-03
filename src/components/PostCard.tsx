import React from 'react';
import Link from 'next/link';

const PostCard = ({imgSrc,category,date,title,description,id}:{imgSrc:string,category:string,date:string,title:string,description:string,id?:string}) => {
  return (
    <Link href={`/blogs/${id}`}>
    <div className="max-w-sm rounded-3xl mx-auto overflow-hidden bg-white hover:shadow-lg">
      {/* Image Container */}
      <div className="relative h-60 w-full">
        <img
          src={imgSrc}
          alt="Tropical beach with seaplane"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="p-4">
        {/* Category and Date */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-gray-600 text-sm">{category}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 mb-3">{description}</p>

        {/* Read More Link */}
        <Link 
          href="/blog/sea-travel-rules" 
          className="text-purple-600 hover:text-purple-700 font-medium"
        >
          Read More...
        </Link>
      </div>
    </div>
    </Link>
  );
};

export default PostCard;
import React from 'react';
import Link from 'next/link';
import Button from './Button';

const PostCardLg = () => {
  return (
    <div className="flex flex-col md:flex-row  overflow-hidden bg-white  max-w-6xl mx-auto">
      {/* Left Image Section */}
      <div className="md:w-1/2 h-[300px] md:h-[400px] relative">
        <img
          src="/vr-lg.png"
          alt="Person wearing VR headset"
          className="w-full h-full object-cover"
        />
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-600/20"></div>
      </div>

      {/* Right Content Section */}
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-gray-50">
        {/* Category and Date */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-semibold text-gray-800 uppercase">
            DEVELOPMENT
          </span>
          <span className="text-gray-400 text-sm">
            16 March 2023
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          How to make a Game look more attractive with New VR & AI Technology
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it's publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we're committed to making AI accessible to everyone.
        </p>

        {/* Read More Button */}
        <div>
          <Link
            href="/blog/vr-ai-game"
          >
            <Button varient='transparent'>Read More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCardLg;
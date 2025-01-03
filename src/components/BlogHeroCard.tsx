import React from 'react';
import Link from 'next/link';
import Container from './Container';
import Image from 'next/image';
import Button from './Button';

const BlogHeroCard = () => {
  return (
    <section className="bg-white py-20 max-sm:hidde">
        <Container>
    <div className="w-full max-w-6xl mx-auto rounded-3xl  shadow-lg">
      {/* Image Section */}
      <div className="w-full relative ">
        <Image
          src="/vr-lg.png"
          height={1000}
          width={1000}
          alt="Person wearing VR headset"
          className="w-full h-full max-sm:hidden object-cover"
        />
      {/* Content Section */}
      <div className="w-full bg-white sm:absolute -bottom-8 right-0 max-w-[48rem] rounded-3xl p-6 md:p-8 flex flex-col justify-center">
        {/* Category and Date */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-[12px] font-medium uppercase tracking-wider text-gray-700">
            DEVELOPMENT
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-[12px] text-gray-500">
            16 March 2023
          </span>
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
          How to make a Game look more attractive with New VR & AI Technology
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it's publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we're committed to making AI accessible to everyone.
        </p>

        {/* Read More Button */}
        <div>
          <Link 
            href="/blog/vr-ai-game-development"
          >
           <Button varient='transparent'> Read More </Button>
          </Link>
        </div>
      </div>
        
      </div>

    </div></Container>
    </section>
  );
};

export default BlogHeroCard;
import Container from '@/components/Container'
import React from 'react'
import data from "@/data/data.json";
import PostCard from '@/components/PostCard';

function page() {
  return (
    <div className='bg-gray-50'>
        <Container>
            <div className="w-full py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Small Header Text */}
        <div className="uppercase tracking-wider text-gray-600 font-medium mb-4">
          OUR BLOGS
        </div>

        {/* Main Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Find our all blogs from here
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          our blogs are written from very research research and well known writers writers so that we can provide you the best blogs and articles articles for you to read them all along
        </p>
      </div>
    </div>
    <div className="px-6 py-10 mt-6 mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data.articles.map(article => (
          <PostCard key={article.id} {...article} />
        ))}
      </div>
    </Container>
    </div>
  )
}

export default page
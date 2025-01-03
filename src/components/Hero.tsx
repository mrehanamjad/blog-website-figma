import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-purple-600">
      <Container>
        <div className="min-h-[40rem] flex items-center p-6 relative overflow-hidden">
          {/* Wave Pattern Background - Top Left */}
          <div className="absolute top-0 left-0 w-1/2 opacity-10">
            <svg
              className="w-full"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              {[...Array(6)].map((_, i) => (
                <path
                  key={i}
                  d={`M0 ${50 + i * 50} Q 100 ${i * 50}, 200 ${
                    50 + i * 50
                  } T 400 ${50 + i * 50}`}
                  stroke="white"
                  fill="none"
                  strokeWidth="1"
                  opacity="0.3"
                />
              ))}
            </svg>
          </div>

          {/* Content Container */}
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 relative z-10">
            {/* Text Content */}
            <div className="flex-1 text-white">
              <span className="text-sm font-medium uppercase tracking-wider">
                Featured Post
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                How AI will Change the Future
              </h1>

              <p className="text-white/80 text-lg max-w-xl mb-8">
                The future of AI will see home robots having enhanced
                intelligence, increased capabilities, and becoming more personal
                and possibly cute. For example, home robots will overcome
                navigation, direction
              </p>
<Link href={"/blogs/how-ai-will-Change-the-future"}>
              <button
                className="bg-white text-purple-600 px-8 py-3 rounded-lg 
                           font-medium hover:bg-opacity-90 transition-all 
                           inline-flex items-center gap-2"
              >
                Read more
              </button></Link>
            </div>

            {/* Image Container */}
            <div className="flex-1 max-w-lg">
              <div className="rounded-3xl overflow-hidden bg-navy-900 p-4">
                <Image
                  src="/hero.png"
                  alt="AI Future Concept"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Wave Pattern Background - Bottom Right */}
          <div className="absolute bottom-0 right-0 w-1/2 opacity-10 rotate-180">
            <svg
              className="w-full"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              {[...Array(6)].map((_, i) => (
                <path
                  key={i}
                  d={`M0 ${50 + i * 50} Q 100 ${i * 50}, 200 ${
                    50 + i * 50
                  } T 400 ${50 + i * 50}`}
                  stroke="white"
                  fill="none"
                  strokeWidth="1"
                  opacity="0.3"
                />
              ))}
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}

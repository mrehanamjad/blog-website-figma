"use client"
import { useState } from 'react';
import Container from './Container';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Submitted email:', email);
  };

  return (
    <section className='bg-purple-600 font-'>
    <Container className=''>
    <div className="min-h-[34rem] flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Top Wave Pattern */}
      <div className="absolute top-0 left-0 w-2/5 opacity-10">
        <svg className="w-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50 Q 100 0, 200 50 T 400 50" stroke="white" fill="none" strokeWidth="1" opacity="0.3"/>
          <path d="M0 100 Q 100 50, 200 100 T 400 100" stroke="white" fill="none" strokeWidth="1" opacity="0.3"/>
          <path d="M0 150 Q 100 100, 200 150 T 400 150" stroke="white" fill="none" strokeWidth="1" opacity="0.3"/>
          <path d="M0 200 Q 100 150, 200 200 T 400 200" stroke="white" fill="none" strokeWidth="1" opacity="0.3"/>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-4xl w-full text-center z-10">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Get our stories delivered From us to your inbox weekly.
        </h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="flex-1 max-w-md text-black px-6 py-4 rounded-lg text-base outline-none"
            required
          />
          <button 
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-lg transition-colors duration-300"
          >
            Get started
          </button>
        </form>

        <p className="text-white/80 text-sm max-w-2xl mx-auto">
          Get a response tomorrow if you submit by 6pm today. If we received after 6pm will get a response the following day.
        </p>
      </div>

      {/* Bottom Wave Pattern */}
      <div className="absolute bottom-0 right-0 w-2/5 opacity-10 rotate-180">
        <svg className="w-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50 Q 100 0, 200 50 T 400 50" stroke="white" fill="none" strokeWidth="1" opacity="0.3"/>
          <path d="M0 100 Q 100 50, 200 100 T 400 100" stroke="white" fill="none" strokeWidth="1" opacity="0.3"/>
          <path d="M0 150 Q 100 100, 200 150 T 400 150" stroke="white" fill="none" strokeWidth="1" opacity="0.3"/>
          <path d="M0 200 Q 100 150, 200 200 T 400 200" stroke="white" fill="none" strokeWidth="1" opacity="0.3"/>
        </svg>
      </div>
    </div>
    </Container>
    </section>
  );
}
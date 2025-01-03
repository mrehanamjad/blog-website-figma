import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Button from './Button'

function PostCardContainer({heading="Popular Post",children}:{heading?:string,children:React.ReactNode}) {
  return (
    <section className='bg-white'>
          <Container >
     <div className="mb-16 text-black flex justify-between items-center px-2 ">
      <h2 className=" font-semibold text-3xl md:text-4xl ">{heading}</h2>
      <Link href={"/blogs"}>
      <Button >View All</Button></Link>
     </div>
      {children}
     </Container>
    </section>
  )
}

export default PostCardContainer
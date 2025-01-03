import Image from "next/image"
import Link from "next/link"

function Logo({size = "xl"}:{size?:"lg"|"xl"|"2xl"|"3xl"|"4xl"|"5xl"}) {
  return (
    // <Image src={"/logo.svg"} alt="logo" width={width} height={height} />
    <Link href="/" className="flex items-center">
    <svg
      className="w-8 h-8 text-purple-600"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
    </svg>
    <span className={`ml-2 text-${size} font-semibold text-gray-900`}>
      Blogs
    </span>
  </Link>
  )
}

export default Logo
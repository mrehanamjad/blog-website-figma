import React from "react";
import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

const Header = () => {
  return (
    <section className=" bg-white">
      <Container>
        <nav className="w-full px-4 py-4 flex items-center justify-between ">
          {/* Logo Section */}
          <div className="flex items-center">
           <Logo />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {/* Middle Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/blogs" className="text-gray-600 hover:text-gray-900">
                Blogs
              </Link>
              {/* <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link> */}
            </div>

            {/* Search Icon */}
            <button className="text-gray-600 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Contact Us Button */}
            {/* <Link
              href="/contact"
            >
            <Button varient="fill">Contact Us</Button>
            </Link> */}
          </div>
        </nav>
      </Container>
    </section>
  );
};

export default Header;

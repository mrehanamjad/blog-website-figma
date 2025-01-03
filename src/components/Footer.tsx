import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white">
    <Container className="text-center px-8 py-12 ">
      <div className="mb-4 flex justify-center items-center">

        <Logo size="3xl" />
      </div>

      <nav className="flex justify-center gap-9 mb-4">
        <Link href="#" className="text-black text-base">Home</Link>
        <Link href="#" className="text-black text-base">Blog</Link>
        <Link href="#" className="text-black text-base">About</Link>
        <Link href="#" className="text-black text-base">Contact Us</Link>
      </nav>

      <div className="flex justify-center gap-4 mb-4">
        <Link href="#" className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">FB</Link>
        <Link href="#" className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">IG</Link>
        <Link href="#" className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">LN</Link>
        <Link href="#" className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">YT</Link>
      </div>

      <hr className="my-5 border-t border-purple-600" />

      <div className="text-sm text-gray-600">
        Copyright Ideapeel Inc © 2023. All Rights Reserved
      </div>
    </Container>
    </footer>
  );
};

export default Footer;

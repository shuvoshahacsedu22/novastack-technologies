import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-4 p-4 bg-gray-200">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </nav>
  );
}
export default Navbar;
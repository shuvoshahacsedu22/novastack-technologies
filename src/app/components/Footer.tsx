const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} NovaStack Technologies. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
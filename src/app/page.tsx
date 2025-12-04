import Link from "next/link";
import ServiceCard from "./components/ServiceCard"

const HomePage = ()=> {
  return (
    
      <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Build Your Digital Success With Us
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          We help businesses grow with modern, fast, and beautiful digital solutions tailored to their needs.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <ServiceCard title={"Web Development"} description={"High-performance websites built with modern tools and best practices."}></ServiceCard>
          <ServiceCard title={"UI/UX Design"} description={"Stunning user interfaces crafted for engagement and clarity."}></ServiceCard>
          <ServiceCard title={"SEO Optimization"} description={"Boost your ranking and reach with proven SEO strategies"}></ServiceCard>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="p-8 bg-white rounded-xl shadow">
            <p className="text-gray-600 mb-4">
              “Amazing experience! They delivered exactly what we needed — fast and polished.”
            </p>
            <h4 className="font-semibold">— Alex Johnson</h4>
          </div>

          <div className="p-8 bg-white rounded-xl shadow">
            <p className="text-gray-600 mb-4">
              “Professional, creative, and reliable. Our sales increased after the redesign!”
            </p>
            <h4 className="font-semibold">— Maria Gomez</h4>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 px-6 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-100 transition">
         <Link href={"/contact"}> Contact Us </Link>
        </button>
      </section>

    </div>
  );
}
export default HomePage;
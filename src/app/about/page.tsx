import MemberCard from "app/components/MemberCard";

import Link from "next/link";
const members = [
  {
    name: "Alice Smith",
    bio: "Lead Developer with a passion for creating scalable web applications.",
    profilePicUrl: "/alice-smith.jpg",
  },
  {
    name: "Bob Johnson",
    bio: "Creative Director focused on delivering stunning visual designs.",
    profilePicUrl: "/bob-johnson.jpg",
  },
  {
    name: "Carol Williams",
    bio: "Marketing Strategist dedicated to driving growth through innovative campaigns.",
    profilePicUrl: "/carol-williams.jpg",
},
];
const AboutPage = () => {
  return (
    <div className="w-full flex flex-col gap-16 p-8 max-w-5xl mx-auto">
      {/* Page Title & Intro */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
        <p className="text-lg text-gray-600">
          We are a forward‑thinking digital agency dedicated to building modern,
          scalable, and beautiful web experiences.
        </p>
      </section>

      {/* Company Story */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded with a passion for technology and innovation, our company has
          grown from a small team of creative thinkers into a trusted partner
          for businesses worldwide. We believe in blending strategy, design, and
          development to deliver impactful digital solutions.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <MemberCard member={member} key={member.name}/>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To empower businesses with high‑quality digital solutions that drive
            growth, efficiency, and delight for their users.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become a global leader in innovative design and technology
            services, shaping the future of digital experiences.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          href="/contact"
          className="inline-block px-8 py-4 rounded-2xl bg-blue-600 text-white text-lg font-semibold shadow hover:opacity-90 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;

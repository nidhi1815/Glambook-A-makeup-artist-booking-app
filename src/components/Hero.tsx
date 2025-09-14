import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <Image
        src="/Hero.jpeg"
        alt="Makeup artist"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-400/80 via-red-400/40 to-white" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Book Your Perfect Look
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Connect with top makeup artists instantly
        </p>
        <a href="#categories">
          <button className="bg-pink-400 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
            Book Now
          </button>
        </a>
      </div>
    </section>
  );
}

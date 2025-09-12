import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Choose Your Style
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Discover the perfect makeup category for any occasion
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.title.toLowerCase().replace(/\s+/g, "")}`}
            >
              <CategoryCard
                id={cat.id}
                title={cat.title}
                description={cat.description}
                image={cat.image}
                slug ={cat.slug}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

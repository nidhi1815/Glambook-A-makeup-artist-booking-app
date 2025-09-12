import { mockArtists } from "@/data/artists";
import { categories } from "@/data/categories";
import ArtistCard from "@/components/ArtistCard";
import SearchBar from "@/components/SearchBar";


interface CategoryPageProps {
  params: { slug: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;

  // get category info
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="p-10 text-center text-gray-600">Category not found</div>
    );
  }

  // filter artists by specialty
  const filteredArtists = mockArtists.filter((artist) =>
    artist.specialties.some(
      (spec) => spec.toLowerCase().replace(/\s+/g, "") === slug
    )
  );

  return (
    <main className="px-6 py-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-500 text-white py-20 mb-16">
        <div className="text-center max-w-3xl mx-auto px-4">
          {/* Premium Beauty Services Label */}
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide mb-6">
            Premium Beauty Services
          </span>

          {/* Main Title */}
          <h1 className="text-5xl font-extrabold mb-4">
            {category.title} Artists
          </h1>

          {/* Subtitle */}
          <p className="text-lg font-medium opacity-90">
            {category.description}
          </p>

          {/* Features Row */}
          <div className="flex justify-center space-x-6 mt-6 text-sm font-medium">
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Verified Artists</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Premium Quality</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Instant Booking</span>
            </span>
          </div>
        </div>
      </div>

      {/* ✅ Search Bar (newly added) */}
      <div className="mb-12">
        <SearchBar/>
      </div>

      {/* Artists Grid */}
      {filteredArtists.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No artists available in this category yet.
        </p>
      )}
    </main>
  );
}

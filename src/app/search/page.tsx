import { mockArtists } from "@/data/artists";
import ArtistCard from "@/components/ArtistCard";
import { categories } from "@/data/categories";
import SearchBar from "@/components/SearchBar";

interface SearchPageProps {
  searchParams: Promise<{ query?: string; category?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  // normalize query
  const rawQuery = Array.isArray(params.query) ? params.query[0] : params.query;
  const query = rawQuery?.toLowerCase() ?? "";

  // normalize category (just for displaying in hero, not filtering)
  const rawCategory = Array.isArray(params.category)
    ? params.category[0]
    : params.category;
  const category = categories.find((c) => c.slug === rawCategory);

  // filter only by query (name + specialties)
  const results = mockArtists.filter((artist) => {
    return (
      !query ||
      artist.name.toLowerCase().includes(query) ||
      artist.specialties.some((s) => s.toLowerCase().includes(query))
    );
  });

  return (
    <main className="px-6 py-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-600 to-pink-500 text-white py-20 mb-16">
        <div className="text-center max-w-3xl mx-auto px-4">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide mb-6">
            Premium Beauty Services
          </span>

          <h1 className="text-5xl font-extrabold mb-4">
            {category ? `${category.title} Artists` : "All Artists"}
          </h1>

          <p className="text-lg font-medium opacity-90">
            {category
              ? category.description
              : "Find the best beauty artists for your needs"}
          </p>

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

      {/* Search Bar */}
      <div className="mb-12">
        <SearchBar />
      </div>

      {/* Search Results */}
      <h1 className="text-3xl font-bold mb-8">
        Search results for "{rawQuery ?? ""}"
      </h1>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No matching artists found.</p>
      )}
    </main>
  );
}

import { mockArtists } from "@/data/artists";
import ArtistCard from "@/components/ArtistCard";

interface SearchPageProps {
  searchParams: { query?: string };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.query?.toLowerCase() ?? "";

  const results = mockArtists.filter(
    (artist) =>
      artist.name.toLowerCase().includes(query) ||
      artist.specialties.some((s) => s.toLowerCase().includes(query))
  );

  return (
    <main className="px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">
        Search results for "{searchParams.query}"
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

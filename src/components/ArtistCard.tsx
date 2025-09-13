"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

type ArtistCardProps = {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
  specialties: string[];
  categorySlug?: string;
};

export default function ArtistCard({
  id,
  name,
  image,
  price,
  rating,
  reviewCount,
  location,
  specialties,
  categorySlug,
}: ArtistCardProps) {
  // Fallback if no categoryTitle is passed (uses first specialty slugified)
  const fallbackCategory =
    specialties?.[0]?.toLowerCase().replace(/\s+/g, "") ?? "general";
  const categoryParam = encodeURIComponent(categorySlug ?? fallbackCategory);
  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition cursor-pointer">
      {/* Image */}
      <div className="relative h-60 w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name + Rating */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
            <span className="ml-1 text-gray-500 text-sm">({reviewCount})</span>
          </div>
        </div>

        {/* Location */}
        <p className="text-sm text-gray-500">{location}</p>

        {/* Price */}
        <p className="mt-2 text-pink-600 font-semibold">₹{price}</p>

        {/* Specialties */}
        <div className="mt-3 flex flex-wrap gap-2">
          {specialties.map((s, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Book Button  */}
      <Link href={`/booking/${id}`}>
        <button className="absolute bottom-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 hover:cursor-pointer transition">
          Book
        </button>
      </Link>
    </div>
  );
}

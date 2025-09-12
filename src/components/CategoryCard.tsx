"use client";
import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string; // 👈 add this
};

export default function CategoryCard({
  id,
  title,
  description,
  image,
  slug, // 👈 use it
}: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${slug}`} // 👈 use slug directly
      className="block bg-white rounded-xl shadow-md overflow-hidden transition cursor-pointer group hover:shadow-lg hover:scale-105 duration-300"
    >
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

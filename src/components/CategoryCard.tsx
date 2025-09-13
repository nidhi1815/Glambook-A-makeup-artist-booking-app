"use client";
import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
};

export default function CategoryCard({
  id,
  title,
  description,
  image,
  slug,
}: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${slug}`} //
      className="block bg-white rounded-xl shadow-md overflow-hidden transition cursor-pointer group hover:shadow-lg hover:scale-105 duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold group-hover:text-pink-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

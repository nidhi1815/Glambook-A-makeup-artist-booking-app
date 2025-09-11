"use client";
import Image from "next/image";

type CategoryCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function CategoryCard({
  title,
  description,
  image,
}: CategoryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition cursor-pointer group hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

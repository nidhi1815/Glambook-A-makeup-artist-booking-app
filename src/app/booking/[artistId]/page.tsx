"use client";
import { mockArtists } from "@/data/artists";
import BookingForm from "@/components/BookingForm";
import { useSearchParams } from "next/navigation";
import * as React from "react";

interface BookingPageProps {
  params: Promise<{ artistId: string }>;
}

export default function BookingPage({ params }: BookingPageProps) {
  const { artistId } = React.use(params);

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const artist = mockArtists.find((a) => a.id === artistId);

  if (!artist) {
    return (
      <div className="p-10 text-center text-gray-600">Artist not found</div>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Book Your Session
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Complete your booking in just a few simple steps
        </p>

        <BookingForm artist={artist} />
      </div>
    </main>
  );
}

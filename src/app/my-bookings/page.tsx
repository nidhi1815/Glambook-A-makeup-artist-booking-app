"use client";

import { useState } from "react";
import Image from "next/image";
import { bookings } from "@/data/bookings";

export default function MyBookingsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const filteredBookings = bookings.filter((b) =>
    activeTab === "upcoming" ? b.status === "upcoming" : b.status === "completed"
  );

  return (
    <div className="relative min-h-screen p-6 overflow-hidden">
      {/* Background Image (faint watermark) */}
      <Image
        src="/bg-page.jpg" // or /bg-page.jpg depending on your file
        alt="Background"
        fill
        className="object-cover opacity-50 -z-10"
        priority
      />

      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "upcoming"
              ? "bg-pink-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "past"
              ? "bg-pink-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("past")}
        >
          Past
        </button>
      </div>

      {/* Booking Cards */}
      <div className="space-y-4">
        {filteredBookings.map((b) => (
          <div
            key={b.id}
            className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md"
          >
            <div>
              <h2 className="text-lg font-semibold">{b.client}</h2>
              <p className="text-gray-500">{b.service}</p>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                📅 {new Date(b.date).toDateString()} &nbsp; ⏰ {b.time}
              </div>
              <p className="mt-1 font-semibold text-pink-500">₹{b.price}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                b.status === "upcoming"
                  ? "bg-red-100 text-pink-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {b.status === "upcoming" ? "Upcoming" : "Completed"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

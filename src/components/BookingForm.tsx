"use client";
import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { addBooking } from "@/data/bookings";
import { useRouter, useSearchParams } from "next/navigation";

interface Artist {
  id: string;
  name: string;
  specialties: string[];
  image: string;
}

interface BookingFormProps {
  artist: Artist;
}
///--

export default function BookingForm({ artist }: BookingFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const times = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const isFormValid = fullName && email && phone && date && time;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    addBooking({
      id: Date.now().toString(),
      client: artist.name,
      service: selectedCategory ?? artist.specialties[0],
      date,
      time,
      price: 200,
      status: "upcoming",
    });
    router.push(
      `/confirmation?client=${encodeURIComponent(
        fullName
      )}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
        phone
      )}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(
        time
      )}&artist=${encodeURIComponent(artist.name)}&service=${encodeURIComponent(
        artist.specialties[0]
      )}&image=${encodeURIComponent(artist.image)}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 ">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-white text-sm font-semibold">
            1
          </div>
          <span className="font-medium text-pink-500">Details</span>
          <span className="text-gray-400">—</span>
          <div className="flex items-center justify-center w-8 h-8 rounded-full border text-gray-400 text-sm font-semibold">
            2
          </div>
          <span className="text-gray-400">Confirmation</span>
        </div>
      </div>

      {/* Artist Card */}
      <div className="border-2 border-pink-400 rounded-xl p-4 flex items-center space-x-4">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{artist.name}</h3>
          <p className="text-pink-500 text-sm">{artist.specialties[0]}</p>
        </div>
      </div>

      {/* Personal Details */}
      <div className="border border-red-200 rounded-xl p-6 space-y-4">
        <h2 className="text-pink-500 font-semibold text-lg">
          Personal Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 md:col-span-2"
          />
        </div>
      </div>

      {/* Schedule */}
      <div className="border border-red-200 rounded-xl p-6 space-y-4">
        <h2 className="text-pink-500 font-semibold text-lg">Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-pink-500"
            />
            <Calendar
              className="absolute right-3 top-3 text-gray-400"
              size={18}
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {times.map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => setTime(t)}
                className={`flex items-center justify-center px-3 py-2 border rounded-lg ${
                  time === t
                    ? "bg-pink-500 text-white border-pink-500"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Clock size={16} className="mr-1" />
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-3 rounded-lg font-semibold transition ${
          isFormValid
            ? "bg-pink-500 text-white hover:bg-pink-600"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Confirm Booking
      </button>
    </form>
  );
}

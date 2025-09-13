
"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const client = searchParams.get("client");
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const service = searchParams.get("service");
  const artist = searchParams.get("artist");
  const image = searchParams.get("image");

  return (
    
    <div className="flex flex-col flex-grow items-center justify-center min-h-screen bg-pink-50 pb-5 ">
      
      
      {/* Success Icon */}
<div className="w-20 h-20 mb-4">  {/* adjust width/height as needed */}
  <img
    src="https://img.icons8.com/?size=100&id=bE5mRAhk65Br&format=png&color=000000"
    alt="Success Tick"
    className="w-full h-full object-contain"
  />
</div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-pink-600 mb-2">Booking Confirmed!</h1>
      <p className="text-gray-700">
        Your glam session is booked with <span className="font-semibold text-pink-600">{artist}</span>
      </p>

      {/* Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden mt-6 mb-6">
        <img
          src={image|| "/images/makeup-brush.jpg"}
          alt={artist||"artist profile Image"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Booking Details */}
      <div className="bg-white rounded-2xl shadow-md border border-red-200 p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
          <span className="h-3 w-3 rounded-full bg-pink-500 mr-2"></span>
          Booking Details
        </h2>

        <div className="space-y-3 text-gray-700">
          <p><strong>Client:</strong> {client}</p>
          <p><strong>Service:</strong> {service}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time & Duration:</strong> {time}</p>
          <p className="bg-red-50 text-pink-600 font-semibold p-2 rounded-md">
            Confirmation Number: #{Math.floor(Math.random() * 1000000)}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-3 w-full max-w-md">
        <Link href="/my-bookings">
          <button className="w-full bg-pink-600 text-white py-3.5 rounded-xl font-semibold">
            My Bookings
          </button>
        </Link>

        <Link href="/">
          <button className="w-full border border-pink-600 text-pink-600 py-3.5 rounded-xl font-semibold">
            Go to Home
          </button>
        </Link>
      </div>

      {/* Support Info */}
      <p className="mt-6 text-gray-500 text-sm text-center ">
        A confirmation email has been sent to your registered email address. <br />
        Need to make changes? Contact us at{" "}
        <a href="mailto:support@glambook.com" className="text-pink-600 font-semibold">
          support@glambook.com
        </a>
      </p>
    </div>
  );
}



import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-6">
      {/* Success Icon */}
      <div className="bg-green-600 rounded-full p-4 mb-4">
        <span className="text-white text-2xl">✔</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-pink-600 mb-2">Booking Confirmed!</h1>
      <p className="text-gray-700">
        Your glam session is booked with <span className="font-semibold text-pink-600">Elena Rodriguez</span>
      </p>

      {/* Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden mt-6 mb-6">
        <img
          src="/images/makeup-brush.jpg"
          alt="Booking Image"
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
          <p><strong>Client:</strong> Sarah Johnson</p>
          <p><strong>Service:</strong> Bridal Glam Package</p>
          <p><strong>Date:</strong> March 15, 2025</p>
          <p><strong>Time & Duration:</strong> 2:00 PM • 3 hours</p>
          <p className="bg-red-50 text-pink-600 font-semibold p-2 rounded-md">
            Confirmation Number: #GL-2025-001529
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-3 w-full max-w-md">
        <Link href="/my-bookings">
          <button className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold">
            My Bookings
          </button>
        </Link>

        <Link href="/">
          <button className="w-full border border-pink-600 text-pink-600 py-3 rounded-xl font-semibold">
            Go to Home
          </button>
        </Link>
      </div>

      {/* Support Info */}
      <p className="mt-6 text-gray-500 text-sm text-center">
        A confirmation email has been sent to your registered email address. <br />
        Need to make changes? Contact us at{" "}
        <a href="mailto:support@glambook.com" className="text-pink-600 font-semibold">
          support@glambook.com
        </a>
      </p>
    </div>
  );
}

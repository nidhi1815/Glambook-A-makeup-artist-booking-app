"use client";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <div className="relative flex items-center justify-center">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>

        {/* Inner pulse dot */}
        <div className="absolute w-6 h-6 bg-red-600 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}

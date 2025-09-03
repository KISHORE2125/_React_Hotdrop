import React from "react";

export default function Header() {
  return (
    <div className="w-full px-4 mx-auto mt-10 relative py-12 rounded-xl overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-pink-50 to-yellow-50"></div>

      {/* Content */}
      <div className="relative z-10 mb-10 text-center">
        <h2 className="text-5xl font-extrabold text-red-600 drop-shadow-sm">
          🍽 Our Delicious Collection
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Freshly made, served with love ❤️
        </p>
      </div>
    </div>
  );
}

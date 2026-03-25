import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">BookStore</h2>
          <p className="text-sm">
            Discover your next favorite book. Explore collections, reviews, and
            recommendations.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Books</li>
            <li className="hover:text-white cursor-pointer">Categories</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Subscribe</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full rounded-l-md"
            />
            <button className="ml-1 bg-green-500 px-4 rounded-md text-white hover:bg-green-600 transition">
              Go
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © 2026 BookStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
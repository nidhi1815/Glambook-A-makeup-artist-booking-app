"use client";

import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-600 text-white mt-16">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-white text-pink-600 font-bold rounded-full w-8 h-8 flex items-center justify-center">
              G
            </div>
            <span className="text-xl font-semibold">GlamBook</span>
          </div>
          <p className="text-sm text-gray-100 leading-relaxed">
            Your premier destination for booking professional makeup artists for
            any occasion.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h4 className="font-semibold mb-4">Platform</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://example.com"
                className="hover:underline cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://example.com/categories"
                className="hover:underline cursor-pointer"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="https://example.com/about"
                className="hover:underline cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://example.com/contact"
                className="hover:underline cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://example.com/help"
                className="hover:underline cursor-pointer"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="https://example.com/privacy"
                className="hover:underline cursor-pointer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://example.com/terms"
                className="hover:underline cursor-pointer"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="https://example.com/faq"
                className="hover:underline cursor-pointer"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              className="bg-pink-700 hover:bg-pink-800 p-2 rounded-full cursor-pointer"
            >
              <FaInstagram size={20} className="text-white" />
            </a>
            <a
              href="https://facebook.com"
              className="bg-pink-700 hover:bg-pink-800 p-2 rounded-full cursor-pointer"
            >
              <FaFacebookF size={20} className="text-white" />
            </a>
            <a
              href="https://twitter.com"
              className="bg-pink-700 hover:bg-pink-800 p-2 rounded-full cursor-pointer"
            >
              <FaTwitter size={20} className="text-white" />
            </a>
            <a
              href="https://youtube.com"
              className="bg-pink-700 hover:bg-pink-800 p-2 rounded-full cursor-pointer"
            >
              <FaYoutube size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-500 text-center py-4 text-sm">
        © 2025 GlamBook. All rights reserved. Built with passion for beauty.
      </div>
    </footer>
  );
}

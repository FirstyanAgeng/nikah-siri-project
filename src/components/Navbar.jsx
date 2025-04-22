import React from "react";
import { PhoneIcon, HeartIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <HeartIcon className="h-6 w-6 text-red-500" />
          <h1 className="text-xl font-bold text-gray-800">
            <a href="/" title="Jasa Nikah Siri" rel="home">
              Jasa Nikah Siri Batam
            </a>
          </h1>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {["Home", "Syarat Dan Ketentuan", "Kontak"].map((item) => (
              <li key={item}>
                <a
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.replace(/\s+/g, "-").toLowerCase()}`
                  }
                  className="text-gray-700 hover:text-red-500 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="https://api.whatsapp.com/send?phone=6281274668281&text=Assalamualaikum.%20Saya%20ingin%20tanya%20info%20mengenai%20jasa%20nikah%20siri%2C%20untuk%20di%20kota%20%3A%20Batam?"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors"
        >
          <PhoneIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Whatsapp</span>
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700" aria-label="Open menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import { HeartIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <HeartIcon className="h-6 w-6 text-red-400" />
              <h3 className="text-xl font-bold">Jasa Nikah Siri</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Membantu menyelesaikan problematika umat dengan solusi pernikahan
              yang sesuai syariat Islam.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {/* Add social media icons here */}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Area Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              {["Batam"].map((area) => (
                <li key={area}>
                  <a href="#" className="hover:text-white transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4"> Kontak Kami</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:info@jasanikahsiri.com"
                  className="hover:text-white transition-colors"
                >
                  info@jasanikahsiri.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+6281274668281"
                  className="hover:text-white transition-colors"
                >
                  +62 812-7466-8281
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Jasa Nikah Siri. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

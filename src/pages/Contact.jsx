import React from "react";
import { PhoneIcon, MailIcon } from "lucide-react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 m-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Hubungi Kami
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Jika Anda memiliki pertanyaan atau ingin berkonsultasi, silakan
          hubungi kami melalui informasi di bawah ini:
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md w-full max-w-md">
            <PhoneIcon className="h-6 w-6 text-green-500 mr-2" />
            <span className="text-gray-800">Telepon: +62 811-835-1222</span>
          </div>
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md w-full max-w-md mb-5">
            <MailIcon className="h-6 w-6 text-blue-500 mr-2" />
            <span className="text-gray-800">
              Email: jasanikahsribatam@gmail.com
            </span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 text-center">
          Anda juga dapat menghubungi kami melalui WhatsApp untuk konsultasi
          gratis.
        </p>
      </div>
    </Layout>
  );
};

export default Contact;

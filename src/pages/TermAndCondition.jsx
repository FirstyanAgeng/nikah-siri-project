import React from "react";
import Layout from "../components/Layout";
const TermsAndConditions = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Syarat dan Ketentuan
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Selamat datang di Jasa Nikah Siri Batam. Dengan menggunakan layanan
          kami, Anda setuju untuk mematuhi syarat dan ketentuan berikut:
        </p>
        <div className="space-y-6">
          {[
            {
              title: "1. Kelayakan",
              description:
                "Anda harus berusia minimal 18 tahun dan memiliki kapasitas hukum untuk membuat perjanjian.",
            },
            {
              title: "2. Proses Pendaftaran",
              description:
                "Pendaftaran untuk layanan kami harus dilakukan dengan mengisi formulir yang disediakan dan memberikan informasi yang akurat.",
            },
            {
              title: "3. Pembayaran",
              description:
                "Semua pembayaran harus dilakukan sebelum layanan diberikan. Kami berhak untuk mengubah harga tanpa pemberitahuan sebelumnya.",
            },
            {
              title: "4. Pembatalan",
              description:
                "Pembatalan layanan harus dilakukan minimal 24 jam sebelum waktu yang dijadwalkan. Biaya pembatalan mungkin berlaku.",
            },
            {
              title: "5. Tanggung Jawab",
              description:
                "Kami tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari penggunaan layanan kami.",
            },
            {
              title: "6. Perubahan Syarat dan Ketentuan",
              description:
                "Kami berhak untuk mengubah syarat dan ketentuan ini kapan saja. Perubahan akan diberitahukan melalui situs web kami.",
            },
            {
              title: "7. Kontak",
              description:
                "Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami di jasanikahsribatam@gmail.com.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;

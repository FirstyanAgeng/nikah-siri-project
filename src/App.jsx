import React, { useState } from "react";
import {
  PhoneIcon,
  CalendarIcon,
  UserIcon,
  CheckIcon,
  HeartIcon,
  BookOpenIcon,
} from "lucide-react";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header with sticky navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <HeartIcon className="h-6 w-6 text-red-500" />
            <h1 className="text-xl font-bold text-gray-800">
              <a href="" title="Jasa Nikah Siri" rel="home">
                Jasa Nikah Siri Batam
              </a>
            </h1>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {["Home", "Area", "Syarat Dan Ketentuan", "Kontak"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/${item}`}
                      className="text-gray-700 hover:text-red-500 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
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

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section with Overlay Text */}
        <section className="relative rounded-xl overflow-hidden mb-16 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
          <img
            src="bg.jpeg"
            alt="Jasa Nikah Siri"
            className="w-full h-96 object-fit"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Jasa Nikah Siri Batam
            </h1>
            <p className="text-xl text-white max-w-2xl">
              Solusi pernikahan sesuai syariat dengan proses mudah dan
              terpercaya
            </p>
            <a
              href="#konsultasi"
              className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Konsultasi Sekarang
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <BookOpenIcon className="h-6 w-6 text-red-500" />,
              title: "Sesuai Syariat Islam",
              description:
                "Proses pernikahan sesuai dengan hukum agama Islam dan memenuhi semua rukun nikah yang disyaratkan.",
            },
            {
              icon: <CalendarIcon className="h-6 w-6 text-red-500" />,
              title: "Proses Cepat",
              description:
                "Dokumen dan surat nikah diterima di hari yang sama setelah prosesi akad dilaksanakan.",
            },
            {
              icon: <UserIcon className="h-6 w-6 text-red-500" />,
              title: "Pengurusan Dokumen",
              description:
                "Bantuan pengurusan dokumen dan surat pernikahan untuk keperluan administratif.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Information Tabs */}
        <section className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex border-b">
            {["about", "benefits", "requirements"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 font-medium text-sm flex-1 text-center ${
                  activeTab === tab
                    ? "bg-red-500 text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab === "about"
                  ? "Tentang Nikah Siri"
                  : tab === "benefits"
                  ? "Manfaat"
                  : "Syarat & Ketentuan"}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === "about" && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  APA ITU NIKAH SIRI?
                </h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <p className="text-gray-600 mb-4">
                      Sebuah pernikahan yang hanya sah secara hukum agama Islam,
                      namun belum tercatat di Kantor Urusan Agama milik Negara.
                      Selama 5 syarat rukun nikah terpenuhi, maka SAH pernikahan
                      nya, dari hubungan yang semula haram maka mejadi halal
                      sebagai suami dan istri.
                    </p>
                    <p className="text-gray-600">
                      Dengan banyaknya problematika umat di masa ini, nikah siri
                      dapat menjadi salah satu jalan keluar/ solusi dari
                      permasalahan hidup, di antaranya menghindari fitnah dan
                      menjauhkan diri dari perbuatan zina. Maka, menikahlah agar
                      kamu tenang.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src="image.jpg"
                      alt="Nikah Siri"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "benefits" && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  APA YANG DI DAPATKAN SETELAH MENIKAH?
                </h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <img
                      src="image-2.jpeg"
                      alt="Dokumen Nikah"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-600 mb-4">
                      Pasangan yang telah menikah akan dibekali surat tanda
                      bukti menikah, langsung terima di hari yang sama. Surat
                      tersebut dapat digunakan untuk lapor kepada RT/RW
                      setempat, izin tinggal serumah.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Surat nikah sah secara agama",
                        "Bukti pernikahan untuk administrasi RT/RW",
                        "Hubungan yang halal sesuai syariat",
                        "Ketenangan batin dan terhindar dari fitnah",
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "requirements" && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  SYARAT RUKUN NIKAH
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-600 mb-4">
                      Pernikahan siri harus memenuhi 5 syarat rukun nikah agar
                      sah secara agama Islam:
                    </p>
                    <ul className="space-y-3">
                      {[
                        {
                          title: "Calon suami & calon istri",
                          description:
                            "Kedua calon mempelai harus hadir dan setuju",
                        },
                        {
                          title: "Wali nasab/ wali hakim",
                          description: "Wali nikah dari pihak perempuan",
                        },
                        {
                          title: "Dua orang saksi (pria)",
                          description: "Saksi laki-laki minimal 2 orang",
                        },
                        {
                          title: "Mas Kawin",
                          description:
                            "Mahar atau mas kawin untuk mempelai wanita",
                        },
                        {
                          title: "Ijab qabul",
                          description: "Prosesi akad nikah yang diucapkan",
                        },
                      ].map((requirement, index) => (
                        <li
                          key={index}
                          className="bg-red-50 p-3 rounded-lg flex items-start"
                        >
                          <div className="bg-red-100 p-1 rounded-full mr-3 mt-0.5">
                            <CheckIcon className="h-4 w-4 text-red-500" />
                          </div>
                          <div>
                            <span className="font-medium text-gray-800">
                              {requirement.title}
                            </span>
                            <p className="text-sm text-gray-600">
                              {requirement.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      CALON BERBEDA AGAMA
                    </h3>
                    <p className="text-gray-600 mb-4 italic">
                      "Sesungguhnya agama (yang di ridhai) di sisi Allah
                      hanyalah Islam" (Qs Ali Imran 19)
                    </p>
                    <p className="text-gray-600 mb-4">
                      Melaksanakan akad nikah wajib dalam satu agama Islam,
                      tidak bisa menikah campur berbeda agama. Calon pengantin
                      yang berasal dari agama Non, akan di islamkan terlebih
                      dahulu (Membaca 2 kalimat syahadat) dengan cara dituntun,
                      akan menerima surat keterangan mualaf, setelah acara.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-800">
                      BIAYA ACARA AKAD NIKAH:
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-600">
                        Biaya akan disesuaikan dengan paket yang dipilih.
                        Silakan konsultasikan kebutuhan Anda dengan tim kami
                        untuk mendapatkan penawaran terbaik.
                      </p>
                      <a
                        href="https://api.whatsapp.com/send?phone=6281274668281&text=Assalamualaikum.%20Saya%20ingin%20tanya%20info%20mengenai%20biaya%20jasa%20nikah%20siri%2C%20untuk%20di%20kota%20%3A%20Batam?"
                        className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Tanya Biaya via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Testimoni Klien Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <img
                      src={`client-${i}.jpeg`}
                      alt={`Client ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Klien {i}</h4>
                    <div className="text-sm text-gray-500">Batam</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Alhamdulillah proses nikah siri berjalan lancar dan sesuai
                  syariat. Terima kasih atas bantuan dan kemudahannya."
                </p>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="konsultasi"
          className="mb-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Konsultasi Nikah Siri
              </h2>
              <p className="text-white/90 mb-6">
                Hubungi kami untuk konsultasi gratis mengenai proses, syarat,
                dan biaya nikah siri. Tim kami siap membantu menjawab semua
                pertanyaan Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://api.whatsapp.com/send?phone=6281274668281&text=Assalamualaikum.%20Saya%20ingin%20tanya%20info%20mengenai%20jasa%20nikah%20siri%2C%20untuk%20di%20kota%20%3A%20Batam?"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>Whatsapp</span>
                </a>
                <a
                  href="tel:+6281274668281"
                  className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>Telepon</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Pertanyaan Umum
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Apakah nikah siri itu legal?",
                a: "Nikah siri sah secara agama Islam selama memenuhi 5 rukun nikah, namun belum tercatat secara resmi di KUA.",
              },
              {
                q: "Berapa lama proses nikah siri?",
                a: "Proses akad nikah siri biasanya dapat dilaksanakan dalam waktu 1 hari, dan surat-surat diterima pada hari yang sama.",
              },
              {
                q: "Apakah bisa dilakukan di luar kota?",
                a: "Ya, kami melayani jasa nikah siri di beberapa kota besar seperti Batam, dan kota lainnya.",
              },
              {
                q: "Apa saja dokumen yang diperlukan?",
                a: "Dokumen yang diperlukan umumnya adalah KTP, foto, dan dokumen pendukung lainnya. Silakan konsultasikan kebutuhan spesifik Anda dengan tim kami.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <HeartIcon className="h-6 w-6 text-red-400" />
                <h3 className="text-xl font-bold">Jasa Nikah Siri</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Membantu menyelesaikan problematika umat dengan solusi
                pernikahan yang sesuai syariat Islam.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
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
              <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 11.5l-3.5 1.75a1 1 0 01-1.5-.5l-1.5-4.5A1 1 0 007 5H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                  <span>Email: jasanikahsribatam@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h18v18H3V3z"
                    />
                  </svg>
                  <span>Telepon: +62 811-835-1222</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

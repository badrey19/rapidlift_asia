import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Tentang <span className="text-blue-600">RapidLift Asia</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              RapidLift Asia adalah perusahaan rental crane dan alat angkat berat
              yang berkomitmen mendukung proyek konstruksi, industri, dan logistik
              di seluruh Indonesia. Dengan armada modern, operator berpengalaman,
              serta layanan yang cepat, kami siap menjadi mitra terpercaya Anda.
            </p>

            {/* Highlight angka */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">15+</h3>
                <p className="text-gray-600 dark:text-gray-400">Tahun Pengalaman</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                <p className="text-gray-600 dark:text-gray-400">Proyek Selesai</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/about-crane.jpg"
              alt="Tentang RapidLift Asia"
              fill
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Hubungi <span className="text-blue-600">Kami</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin melakukan pemesanan? Silakan isi form di
            bawah atau hubungi kami melalui kontak yang tersedia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nama
              </label>
              <input
                type="text"
                placeholder="Nama Anda"
                className="mt-1 w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="email@contoh.com"
                className="mt-1 w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Pesan
              </label>
              <textarea
                rows={4}
                placeholder="Tulis pesan Anda..."
                className="mt-1 w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Kirim Pesan
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Informasi Kontak
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                📍 Jl. Raya Industri No. 123, Jakarta, Indonesia
              </p>
              <p className="text-gray-600 dark:text-gray-300">📞 +62 812 3456 7890</p>
              <p className="text-gray-600 dark:text-gray-300">
                ✉️ info@rapidliftasia.com
              </p>
            </div>

            {/* Google Maps Embed (opsional) */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.672736234234!2d106.84559901529633!3d-6.174465395528016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e7d2e17f93%3A0x301576d14feb1b0!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

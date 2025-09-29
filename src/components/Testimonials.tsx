import Image from "next/image";

const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT Konstruksi Nusantara",
    text: "Layanannya cepat dan armada crane sangat terawat. Proyek kami jadi lebih lancar!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Siti Rahma",
    company: "PT Pelabuhan Mandiri",
    text: "Operatornya profesional dan harga sewanya bersaing. Sangat direkomendasikan!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Andi Pratama",
    company: "CV Mega Teknik",
    text: "Pelayanan ramah, respon cepat, dan pilihan armada lengkap. Akan sewa lagi!",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Apa Kata <span className="text-blue-600">Klien Kami</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "{t.text}"
              </p>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {t.name}
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {t.company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

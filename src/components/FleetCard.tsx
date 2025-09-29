import Image from "next/image";
import { motion } from "framer-motion";

const fleetData = [
  {
    id: 1,
    name: "Crane 25 Ton",
    image: "https://images.unsplash.com/photo-1603791452906-bb5a5bc3f8d2?auto=format&fit=crop&w=800&q=80",
    desc: "Ideal untuk proyek menengah dengan kapasitas angkat 25 ton.",
  },
  {
    id: 2,
    name: "Crane 50 Ton",
    image: "https://images.unsplash.com/photo-1581092334494-9b6c7b2c7d4f?auto=format&fit=crop&w=800&q=80",
    desc: "Solusi tepat untuk proyek besar dengan kebutuhan beban lebih berat.",
  },
  {
    id: 3,
    name: "Crane All-Terrain",
    image: "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=800&q=80",
    desc: "Fleksibel digunakan di berbagai kondisi medan proyek.",
  },
];



export default function Fleet() {
  return (
    <section
      id="fleet"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Armada Kami
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pilih armada crane terbaik sesuai kebutuhan proyek Anda, dengan
            performa maksimal dan operator berpengalaman.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fleetData.map((fleet, index) => (
            <motion.div
              key={fleet.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-60">
                <Image
                  src={fleet.image}
                  alt={fleet.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {fleet.name}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {fleet.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

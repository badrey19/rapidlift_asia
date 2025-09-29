import { motion } from "framer-motion";
import { Wrench, Truck, Clock } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Sewa Crane Harian",
    icon: Truck,
    desc: "Pilihan fleksibel untuk kebutuhan proyek jangka pendek maupun panjang.",
  },
  {
    id: 2,
    title: "Operator Profesional",
    icon: Wrench,
    desc: "Didukung operator berpengalaman dengan sertifikasi resmi.",
  },
  {
    id: 3,
    title: "Layanan Darurat 24/7",
    icon: Clock,
    desc: "Respon cepat untuk kebutuhan mendesak kapan saja Anda butuhkan.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Layanan Kami
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Kami hadir untuk memberikan solusi terbaik dalam setiap proyek Anda,
            dengan armada handal dan tim profesional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

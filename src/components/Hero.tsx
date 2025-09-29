import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Hero(){
  return(
    <>
    {/* Hero Section */}
      <section className="relative bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-[90vh]">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 text-center md:text-left space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                Solusi <span className="text-blue-600">Rental Crane</span>
                <br /> Andal untuk Proyek Anda
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
                RapidLift Asia menyediakan crane dan alat angkat berat dengan
                kualitas tinggi, operator berpengalaman, dan layanan cepat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/fleet"
                  className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                >
                  Lihat Armada
                </Link>
                <Link
                  href="/booking"
                  className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                >
                  Booking Sekarang
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Decorative diagonal background with shadow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl rotate-3 scale-105 shadow-2xl -z-10" />

                <Image
                  src="/images/hero-crane2.jpg"
                  alt="Crane Rental"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl object-cover relative"
                  priority
                />
              </div>
            </motion.div>


          </div>
        </div>
      </section>
    </>
  );
}


import Image from "next/image";

const projects = [
  {
    title: "Proyek Konstruksi Gedung",
    img: "https://images.unsplash.com/photo-1581092919535-7146b8a02d05?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Pengangkatan di Pelabuhan",
    img: "https://images.unsplash.com/photo-1581093588401-22fcded8b6d3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Proyek Jalan Tol",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Instalasi Jembatan",
    img: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Pembangunan Pabrik",
    img: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Proyek Pertambangan",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Portofolio <span className="text-blue-600">Proyek Kami</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang pernah kami tangani, mulai dari
            konstruksi gedung, pelabuhan, hingga pertambangan.
          </p>
        </div>

        {/* Grid Images */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

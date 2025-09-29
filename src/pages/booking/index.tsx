import { useState } from "react";

// Dummy data (100+ items)
const dummyData = Array.from({ length: 120 }, (_, i) => ({
  id: i + 1,
  name: `Crane Model ${i + 1}`,
  capacity: `${20 + (i % 50)} Ton`,
  status: i % 3 === 0 ? "Tersedia" : "Disewa",
  price: `Rp ${(5000000 + (i % 10) * 1000000).toLocaleString("id-ID")}/hari`,
}));

export default function BookingPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const filtered = dummyData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.capacity.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Booking <span className="text-blue-600">Crane</span>
        </h1>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari berdasarkan nama atau kapasitas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <table className="w-full text-left">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Nama Crane</th>
                <th className="px-4 py-3">Kapasitas</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Harga</th>
                <th className="px-4 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((item) => (
                <tr key={item.id} className="border-t dark:border-gray-700">
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{item.capacity}</td>
                  <td
                    className={`px-4 py-3 font-medium ${
                      item.status === "Tersedia"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="px-4 py-3">{item.price}</td>
                  <td className="px-4 py-3">
                    <button
                      disabled={item.status !== "Tersedia"}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        item.status === "Tersedia"
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-400 text-gray-100 cursor-not-allowed"
                      }`}
                    >
                      {item.status === "Tersedia"
                        ? "Booking"
                        : "Tidak Tersedia"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-gray-700 dark:text-gray-300">
            Halaman {page} dari {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

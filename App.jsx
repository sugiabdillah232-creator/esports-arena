export default function KhanzaEsportsArena() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-purple-400">
        KHANZA ESPORTS ARENA
      </h1>

      <p className="mt-6 text-xl text-gray-300">
        Turnamen Mobile Legends terbesar dengan tema hitam ungu neon.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="bg-purple-900/40 rounded-3xl p-6">
          <h2 className="text-2xl font-bold">Prize Pool</h2>
          <p className="mt-3 text-3xl">Rp5.000.000</p>
        </div>

        <div className="bg-fuchsia-900/40 rounded-3xl p-6">
          <h2 className="text-2xl font-bold">Game</h2>
          <p className="mt-3 text-xl">Mobile Legends</p>
        </div>

        <div className="bg-purple-900/40 rounded-3xl p-6">
          <h2 className="text-2xl font-bold">WhatsApp</h2>
          <p className="mt-3 text-xl">085283914900</p>
        </div>
      </div>

      <a
        href="https://wa.me/6285283914900"
        className="inline-block mt-10 px-8 py-4 rounded-2xl bg-purple-600 text-white text-xl font-bold"
      >
        Daftar Sekarang
      </a>
    </div>
  )
}

const Tentang = () => {
  return (
    <main className="flex-grow">
      {/* Section: Tentang */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-secondary p-8 rounded-2xl flex items-center justify-center min-h-[300px]">
            <div className="text-8xl">💡</div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-foreground">
              Tentang Rahayu
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed mb-6">
              Rahayu adalah asisten digital peternak ayam modern. Misi kami adalah menyederhanakan manajemen kandang dengan teknologi yang sudah Anda gunakan setiap hari: WhatsApp. Kami percaya, peternak harus fokus pada pertumbuhan ternak, bukan pada kerumitan administrasi.
            </p>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Dengan Rahayu, pencatatan data harian menjadi semudah mengirim pesan, dan laporan performa kandang bisa didapat secara instan, kapan saja dan di mana saja.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tentang;

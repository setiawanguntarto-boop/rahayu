const KebijakanPrivasi = () => {
  return (
    <main className="flex-grow">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold mb-8 text-foreground">
            Kebijakan Privasi
          </h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-4">
              Terakhir diperbarui: 2024
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              1. Informasi yang Kami Kumpulkan
            </h2>
            <p className="text-muted-foreground mb-4">
              Rahayu mengumpulkan data yang Anda berikan melalui WhatsApp, termasuk nomor telepon, data kandang (mortalitas, pakan, berat ayam), dan informasi terkait lainnya.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              2. Bagaimana Kami Menggunakan Informasi Anda
            </h2>
            <p className="text-muted-foreground mb-4">
              Informasi yang dikumpulkan digunakan untuk:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Menyimpan dan menganalisis data performa kandang Anda</li>
              <li>Menghasilkan laporan PDF otomatis</li>
              <li>Meningkatkan layanan kami</li>
              <li>Memberikan dukungan pelanggan</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              3. Keamanan Data
            </h2>
            <p className="text-muted-foreground mb-4">
              Kami menggunakan langkah-langkah keamanan teknis dan organisasi untuk melindungi data Anda dari akses, penggunaan, atau pengungkapan yang tidak sah.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              4. Berbagi Data
            </h2>
            <p className="text-muted-foreground mb-4">
              Kami tidak menjual, memperdagangkan, atau mentransfer data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali jika diwajibkan oleh hukum.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              5. Hak Anda
            </h2>
            <p className="text-muted-foreground mb-4">
              Anda berhak untuk mengakses, memperbarui, atau menghapus data pribadi Anda kapan saja dengan menghubungi kami.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              6. Kontak
            </h2>
            <p className="text-muted-foreground">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami melalui WhatsApp di +62 896 3711 2147.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KebijakanPrivasi;

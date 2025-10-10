import { Card, CardContent } from "@/components/ui/card";

const KenapaRahayu = () => {
  const features = [
    {
      emoji: "📱",
      title: "Tanpa Aplikasi Tambahan",
      description: "Anda tidak perlu mengunduh, menginstal, atau mempelajari aplikasi baru. Cukup gunakan WhatsApp yang sudah akrab Anda pakai.",
    },
    {
      emoji: "📈",
      title: "Laporan Cepat & Akurat",
      description: "Dapatkan analisis performa penting seperti FCR, deplesi, dan ADG secara otomatis dalam format PDF yang mudah dibagikan.",
    },
    {
      emoji: "⏰",
      title: "Hemat Waktu & Tenaga",
      description: "Alihkan waktu Anda dari rekap data manual yang melelahkan ke pengambilan keputusan strategis untuk kandang Anda.",
    },
  ];

  return (
    <main className="flex-grow">
      {/* Section: Kenapa Rahayu */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-foreground">
            Kenapa Memilih Rahayu?
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-12 max-w-3xl mx-auto">
            Kami merancang Rahayu berdasarkan tiga prinsip utama untuk memastikan kemudahan dan efisiensi maksimal bagi peternak.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-border shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{feature.emoji}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default KenapaRahayu;

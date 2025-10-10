import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Kemitraan = () => {
  const benefits = [
    "Dukungan teknis khusus untuk mitra",
    "Integrasi dengan sistem internal Anda",
    "Pelatihan team komprehensif",
    "Laporan analitik tingkat lanjut",
    "Prioritas dalam pengembangan fitur",
    "Harga khusus untuk skala besar",
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-foreground">
            Rahayu untuk <span className="text-primary">Kemitraan</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan perusahaan peternakan terkemuka yang menggunakan Rahayu untuk mengelola ribuan kandang secara efisien.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-xl text-lg font-bold shadow-lg transform hover:scale-[1.05] transition-all"
          >
            <a href="http://wa.me/6289637112147" target="_blank" rel="noopener noreferrer">
              💼 Hubungi Tim Kemitraan
            </a>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-foreground">
            Keuntungan Bermitra dengan Rahayu
          </h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-foreground">
            Siap Meningkatkan Efisiensi Operasional?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Mari diskusikan bagaimana Rahayu dapat disesuaikan dengan kebutuhan bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-6 rounded-xl text-lg font-bold shadow-lg"
            >
              <a href="http://wa.me/6289637112147" target="_blank" rel="noopener noreferrer">
                Jadwalkan Demo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-7 py-6 rounded-xl text-lg font-bold border-2"
            >
              <a href="mailto:partnership@rahayu.id">
                Email Kami
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Kemitraan;

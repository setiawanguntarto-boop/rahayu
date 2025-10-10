import { Button } from "@/components/ui/button";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import { ExternalLink } from "lucide-react";

const Home = () => {
  return (
    <main className="flex-grow">
      {/* Hero Banner Section */}
      <section className="relative flex items-center justify-center pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-snug mb-5 text-foreground">
              Catat & Kelola Kinerja Kandang{" "}
              <span className="text-primary">lewat WhatsApp</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed mb-8">
              Rahayu membantu peternak mencatat data harian ayam — dari pakan, mortalitas, hingga laporan PDF —{" "}
              <span className="font-semibold">semuanya otomatis tanpa aplikasi tambahan.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-6 rounded-xl text-lg font-bold shadow-lg transform hover:scale-[1.05] transition-all"
              >
                <a href="http://wa.me/6289637112147" target="_blank" rel="noopener noreferrer">
                  💬 Coba Gratis Sekarang
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-7 py-6 rounded-xl text-lg font-bold shadow-lg transform hover:scale-[1.05] transition-all"
              >
                <a href="https://youtu.be/qdC1r98c6DI" target="_blank" rel="noopener noreferrer">
                  🎥 Lihat Tutorialnya
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* WhatsApp Chat Mockup */}
          <div className="mt-8 lg:mt-0">
            <WhatsAppMockup />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

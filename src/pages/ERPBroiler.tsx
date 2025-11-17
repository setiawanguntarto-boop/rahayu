import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Users, FileText, TrendingUp, Shield, Zap } from "lucide-react";

const ERPBroiler = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Manajemen Data Terpadu",
      description: "Kelola semua data kandang, pakan, dan produksi dalam satu sistem terintegrasi"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Multi-User & Role Management",
      description: "Kontrol akses berdasarkan peran untuk peternak, supervisor, dan manajer"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Laporan Otomatis",
      description: "Generate laporan harian, mingguan, dan bulanan secara otomatis"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Analitik Real-time",
      description: "Dashboard interaktif dengan insight performa kandang secara real-time"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Keamanan Data",
      description: "Enkripsi data dan backup otomatis untuk keamanan maksimal"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Integrasi WhatsApp",
      description: "Terintegrasi langsung dengan Rahayu Bot untuk kemudahan akses"
    }
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-foreground">
            ERP Broiler <span className="text-primary">Phase 1</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Sistem manajemen peternakan broiler terintegrasi untuk mengelola operasional peternakan Anda dengan lebih efisien dan terukur.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-xl text-lg font-bold shadow-lg transform hover:scale-[1.05] transition-all"
          >
            <a href="http://wa.me/6289637112147" target="_blank" rel="noopener noreferrer">
              📞 Hubungi Kami untuk Demo
            </a>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-foreground">
            Fitur Unggulan ERP Broiler
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 bg-card">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-foreground">
            Tahapan Implementasi
          </h2>
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>1. Analisis & Perencanaan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kami akan menganalisis kebutuhan bisnis Anda dan merencanakan sistem yang sesuai dengan operasional peternakan.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>2. Setup & Konfigurasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Instalasi sistem, konfigurasi database, dan setup user sesuai dengan struktur organisasi Anda.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>3. Pelatihan Tim</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pelatihan komprehensif untuk semua user agar dapat menggunakan sistem dengan maksimal.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>4. Go Live & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pendampingan saat go live dan dukungan teknis berkelanjutan untuk memastikan kelancaran operasional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-foreground">
            Siap Menggunakan ERP Broiler?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Tingkatkan efisiensi operasional peternakan Anda dengan sistem ERP yang dirancang khusus untuk industri broiler.
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
              <a href="/kemitraan">
                Informasi Kemitraan
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ERPBroiler;

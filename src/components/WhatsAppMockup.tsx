const WhatsAppMockup = () => {
  return (
    <div className="bg-white rounded-[28px] shadow-2xl p-4 border border-border">
      <div className="rounded-[22px] overflow-hidden">
        {/* WhatsApp Header */}
        <div className="bg-emerald-600 text-white px-4 py-3 flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
            🐔
          </div>
          <div>
            <div className="text-base font-semibold">Rahayu Bot</div>
            <div className="text-xs text-white/80">online sekarang</div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="bg-slate-50 p-6 space-y-4 min-h-[400px]">
          <div className="max-w-[85%] bg-white border border-slate-200 rounded-xl rounded-tl-none p-3 text-sm shadow-sm">
            Halo! Mau mulai catatan hari ini? Balas 'YA' untuk mulai.
          </div>
          
          <div className="flex justify-end">
            <div className="max-w-[85%] bg-emerald-600 text-white rounded-xl rounded-tr-none p-3 text-sm shadow-sm">
              YA
            </div>
          </div>
          
          <div className="max-w-[85%] bg-white border border-slate-200 rounded-xl rounded-tl-none p-3 text-sm shadow-sm">
            Oke, masukkan data hari ini:{" "}
            <span className="font-semibold">mortalitas, pakan, dan berat rata-rata.</span>{" "}
            Pisahkan dengan koma. Contoh: `2, 40 kg, 1.8 kg`
          </div>
          
          <div className="flex justify-end">
            <div className="max-w-[85%] bg-emerald-600 text-white rounded-xl rounded-tr-none p-3 text-sm shadow-sm">
              1, 45 kg, 1.9 kg
            </div>
          </div>
          
          <div className="max-w-[85%] bg-white border border-slate-200 rounded-xl rounded-tl-none p-3 text-sm shadow-sm">
            Data hari ke-24 berhasil tersimpan! ✅ Laporan PDF mingguan Anda siap diunduh 📄.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppMockup;

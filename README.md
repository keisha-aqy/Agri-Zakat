🌾 AgriZakat - Prototype Platform Pemberdayaan Petani Mustahik

AgriZakat adalah sebuah prototipe aplikasi mobile-first (berbasis web) yang dirancang untuk mendemonstrasikan integrasi teknologi Kecerdasan Buatan (AI) dan Blockchain dalam ekosistem pengelolaan zakat produktif bagi petani miskin (mustahik). 
Proyek ini dikembangkan khusus sebagai materi peraga interaktif (*interactive mockup*) untuk mendukung penyampaian ide, metodologi, dan solusi dalam Kompetisi Esai Ilmiah.

🚀 Fitur Utama Prototype
Aplikasi diimplementasikan dalam bentuk *Single Page Application* (SPA) dengan navigasi tab bawah (*bottom bar*) interaktif yang mensimulasikan 7 menu krusial platform:

Dasbor ini dilengkapi dengan 7 tampilan dinamis (*Single Page Application style*) yang dapat diakses melalui bilah navigasi bawah:

1. **🌱 Beranda (Dashboard):** Memuat status bantuan aktif (Fase Vegetatif), rekomendasi taktis berbasis *AI Agri-Analytics* (prediksi cuaca & optimasi pupuk), serta proyeksi hasil panen.
2. **📦 Bantuan:** Transparansi rincian alokasi bantuan non-tunai (bibit unggul, pupuk organik, biopestisida) beserta indikator keberlanjutan ekosistem lahan.
3. **⛓️ Audit (Blockchain Ledger):** Simulasi catatan transaksi *immutable* yang terekam secara *on-chain* lengkap dengan hash verifikasi (`0x...`) untuk menjamin transparansi dana amil dan mustahik.
4. **🤖 AI Kelayakan (AI Eligibility Insight):** Transparansi model AI (*Explainable AI*) yang menampilkan *Eligibility Score* (Skor Kelayakan) penerima bantuan disertai alasan logis penentu prioritas mustahik.
5. **🌿 Eco Dampak (Green Impact Saya):** Rekam jejak digital mengenai dampak positif lahan setelah program berjalan, seperti penurunan penggunaan pupuk kimia dan peningkatan efisiensi air.
6. **📈 Kemandirian (Perjalanan Kemandirian):** Roadmap vertikal interaktif yang memetakan transformasi ekonomi jangka panjang petani, mendampingi proses transisi dari **Mustahik (Penerima Zakat) ➔ Muzaki (Pemberi Zakat)**.
7. **💬 Pendampingan (Edukasi & Mentor):** Modul konsultasi interaktif dua arah bersama agronomis serta akses materi edukasi mandiri seputar pertanian berkelanjutan.
📁 Struktur Dokumen Proyek
Kode sumber telah dipisahkan secara modular sesuai standar industri (*Separation of Concerns*) menjadi 3 berkas mandiri:

```bash
📦 AgriZakat
 ├── 📁 css
 │    └── 📄 style.css      # Desain responsif, Grid sistem, & tema warna alam (Emerald-Forest)
 ├── 📁 js
 │    └── 📄 script.js     # Global controller, view switcher, & simulasi real-time toast
 ├── 📄 index.html         # Dokumen utama aplikasi (Single Page Application structure)
 └── 📄 README.md          # Dokumentasi proyek
```

🛠️ Cara Menjalankan Prototype
Prototipe ini dirancang dengan prinsip zero-config (dapat langsung berjalan tanpa perlu melakukan instalasi server lokal, database, atau koneksi internet)[cite: 6].

1. Pastikan berkas index.html, style.css, dan script.js berada di dalam satu folder/direktori yang sama.
2. Buka folder tersebut melalui File Explorer komputer Anda.
3. Klik dua kali (double-click) pada file index.html.
4. Aplikasi akan otomatis terbuka dan siap dioperasikan melalui browser pilihan Anda (Google Chrome, Mozilla Firefox, Microsoft Edge, atau Safari.


🌾 AgriZakat - Prototype Platform Pemberdayaan Petani Mustahik

AgriZakat adalah sebuah prototipe aplikasi mobile-first (berbasis web) yang dirancang untuk mendemonstrasikan integrasi teknologi Kecerdasan Buatan (AI) dan Blockchain dalam ekosistem pengelolaan zakat produktif bagi petani miskin (mustahik). 
Proyek ini dikembangkan khusus sebagai materi peraga interaktif (*interactive mockup*) untuk mendukung penyampaian ide, metodologi, dan solusi dalam Kompetisi Esai Ilmiah.

🚀 Fitur Utama Prototype
Aplikasi diimplementasikan dalam bentuk *Single Page Application* (SPA) dengan navigasi tab bawah (*bottom bar*) interaktif yang mensimulasikan 4 menu krusial platform:

1. 🏠 Beranda (Dashboard Petani):
   - Menampilkan ringkasan profil mustahik, status bantuan zakat (*real-time operational status*), serta grafik kemajuan fase tanam (*progress bar*).
   - Rekomendasi AI Terintegrasi: Kotak rekomendasi pintar dinamis yang memberikan saran berbasis kondisi lingkungan nyata (misal: analisis curah hujan tinggi dan tindakan mitigasi irigasi).

2. 🌾 Alokasi Bantuan (Zakat Productive):
   - Transparansi pembagian modal usaha tani non-tunai dalam bentuk barang fisik (pupuk organik, bibit padi unggul, biopestisida) dan alokasi saldo digital untuk operasional lapangan.
   - Proyeksi dampak ekonomi yang terukur (luas lahan, estimasi hasil panen dalam ton, dan persentase kenaikan pendapatan).

3. 📊 Audit Sistem (Tracking Blockchain):
   - Simulasi *ledger* transaksi yang *immutable* (tidak dapat dimanipulasi). Menampilkan riwayat aliran dana dari muzakki ke lembaga zakat hingga pencairan di tingkat petani lengkap dengan kode **Transaction Hash (TX Hash)**.
   - **Interaksi Dinamis:** Dilengkapi fitur *pop-up toast alert* berbasis JavaScript yang menyimulasikan pembentukan blok baru yang terverifikasi saat juri membuka menu ini.

4. 💬 Konsul (Pendampingan & Edukasi Syariah):
   - Simulasi ruang komunikasi interaktif (*chat bubbles*) antara petani mustahik dengan mentor agronomis/amil zakat guna menjamin pemanfaatan zakat yang produktif dan berkelanjutan.

📁 Struktur Dokumen Proyek
Kode sumber telah dipisahkan secara modular sesuai standar industri (*Separation of Concerns*) menjadi 3 berkas mandiri[cite: 6]:

```bash
agrizakat_separated/
├── index.html   # Struktur kerangka aplikasi (HTML5 Semantik)
├── style.css    # Desain visual & layout smartphone mockup (CSS3)
└── script.js    # Logika navigasi dinamis & event simulasi (JS ES6)
```

🛠️ Cara Menjalankan Prototype
Prototipe ini dirancang dengan prinsip zero-config (dapat langsung berjalan tanpa perlu melakukan instalasi server lokal, database, atau koneksi internet)[cite: 6].

1. Pastikan berkas index.html, style.css, dan script.js berada di dalam satu folder/direktori yang sama[cite: 6].
2. Buka folder tersebut melalui File Explorer komputer Anda[cite: 6].
3. Klik dua kali (double-click) pada file index.html[cite: 6].
4. Aplikasi akan otomatis terbuka dan siap dioperasikan melalui browser pilihan Anda (Google Chrome, Mozilla Firefox, Microsoft Edge, atau Safari)[cite: 6].


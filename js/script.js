// 1. DAFTARKAN FUNGSI DI GLOBAL SCOPE (DI LUAR IIFE) AGAR ONCLICK HTML BISA LANGSUNG MEMANGGILNYA
window.switchView = function(viewId, element) {
    // Cari semua elemen view section
    const views = {
        'view-dashboard': document.getElementById('view-dashboard'),
        'view-bantuan': document.getElementById('view-bantuan'),
        'view-blockchain': document.getElementById('view-blockchain'),
        'view-mentor': document.getElementById('view-mentor'),
        'view-eligibility': document.getElementById('view-eligibility'),
        'view-greenimpact': document.getElementById('view-greenimpact'),
        'view-journey': document.getElementById('view-journey')
    };

    // Sembunyikan semua view terlebih dahulu
    Object.values(views).forEach(view => {
        if (view) view.classList.remove('active');
    });
    
    // Tampilkan view target yang dipilih
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');
    } else {
        console.error("View dengan ID " + viewId + " tidak ditemukan.");
    }
    
    // Update class active di elemen navbar
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Set class active pada menu yang diklik
    if (element) {
        element.classList.add('active');
    } else {
        const matchingNav = document.querySelector(`.nav-item[data-view="${viewId}"]`);
        if (matchingNav) matchingNav.classList.add('active');
    }
    
    // Auto scroll kembali ke atas agar mulus
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger notifikasi blockchain khusus saat masuk ke menu Audit
    if (viewId === 'view-blockchain' && typeof window.triggerModernToast === 'function') {
        window.triggerModernToast();
    }
};

// 2. LOGIKA LAINNYA TETAP DI DALAM IIFE UNTUK SIMULASI HEARTBEAT & TOAST
(function() {
    const navItems = document.querySelectorAll('.nav-item');
    let toastTimeout = null;

    // Daftarkan fungsi toast ke window agar bisa dipanggil dari luar jika diperlukan
    window.triggerModernToast = function() {
        const toastEl = document.getElementById('appToast');
        if (!toastEl) return;
        
        const messages = [
            "⛓️ Block baru terverifikasi: Zakat Produktif tercatat di ledger.",
            "✅ Smart Contract: Distribusi bibit dan pupuk on-chain finalized.",
            "🔒 Transparansi penuh: Hash terbaru 0x9f2e...a33b terkonfirmasi.",
            "📊 Data audit real-time disinkronisasi dengan Node Utama.",
            "🔗 Verifikasi silang: Semua data sesuai dengan consensus node."
        ];
        
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        toastEl.innerHTML = `<span>🔔</span> <strong>Blockchain Alert:</strong> ${randomMsg}`;
        
        toastEl.style.display = 'flex';
        toastEl.classList.add('show');
        
        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toastEl.classList.remove('show');
            setTimeout(() => { toastEl.style.display = 'none'; }, 200);
        }, 3500);
    };

    // Sambungkan event listener alternatif untuk jaga-jaga jika ada klik non-onclick
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const viewTarget = item.getAttribute('data-view');
            if (viewTarget) {
                window.switchView(viewTarget, item);
            }
        });
    });
    
    // Inisialisasi awal saat web dibuka pertama kali
    const defaultActive = document.querySelector('.nav-item.active');
    if (defaultActive) {
        const firstViewId = defaultActive.getAttribute('data-view');
        window.switchView(firstViewId, defaultActive);
    } else {
        const firstNav = document.querySelector('.nav-item');
        if(firstNav) window.switchView('view-dashboard', firstNav);
    }
    
    // Welcome message toast singkat
    setTimeout(() => {
        const toastEl = document.getElementById('appToast');
        if(toastEl && !window._welcomeToastShown) {
            window._welcomeToastShown = true;
            toastEl.innerHTML = `<span>🌿</span> <strong>AgriZakat Dashboard Active</strong> — Transparansi Berbasis AI & Blockchain.`;
            toastEl.style.display = 'flex';
            toastEl.classList.add('show');
            setTimeout(() => {
                toastEl.classList.remove('show');
                setTimeout(() => toastEl.style.display = 'none', 200);
            }, 3000);
        }
    }, 600);
    
    console.log("AgriZakat Dashboard Multi-Device V2.4 Scope Fixed");
})();

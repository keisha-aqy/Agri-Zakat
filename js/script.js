/**
 * AgriZakat Modern Controller
 * Mengatur pergantian view secara dinamis dan simulasi event real-time blockchain
 */

(function() {
    // Elemen navigasi dan view
    const navItems = document.querySelectorAll('.nav-item');
    const views = {
        dashboard: document.getElementById('view-dashboard'),
        bantuan: document.getElementById('view-bantuan'),
        blockchain: document.getElementById('view-blockchain'),
        mentor: document.getElementById('view-mentor')
    };

    // Fungsi switch view yang lebih halus
    function switchToView(viewId, activeNavElement) {
        // Sembunyikan semua view
        Object.values(views).forEach(view => {
            if (view) view.classList.remove('active');
        });
        
        // Tampilkan view terpilih
        const targetView = document.getElementById(viewId);
        if (targetView) targetView.classList.add('active');
        
        // Update class active di navbar
        navItems.forEach(item => {
            item.classList.remove('active');
        });
        if (activeNavElement) {
            activeNavElement.classList.add('active');
        }
        
        // Trigger notifikasi blockchain khusus saat masuk ke Audit
        if (viewId === 'view-blockchain') {
            triggerModernToast();
        }
    }

    // Global function untuk dipanggil dari event handler
    window.switchView = function(viewId, element) {
        switchToView(viewId, element);
    };

    // Tambahkan event listener ke setiap nav item
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const viewTarget = item.getAttribute('data-view');
            if (viewTarget) {
                switchToView(viewTarget, item);
            }
        });
    });

    // Toast modern dengan animasi dan pesan dinamis blockchain
    let toastTimeout = null;
    
    function triggerModernToast() {
        const toastEl = document.getElementById('appToast');
        if (!toastEl) return;
        
        // Pesan random untuk variasi notifikasi
        const messages = [
            "⛓️ Block baru terverifikasi: Zakat Produktif tercatat di ledger.",
            "✅ Smart Contract: Distribusi bibit dan pupuk on-chain finalized.",
            "🔒 Transparansi penuh: Hash terbaru 0x9f2e...a33b terkonfirmasi.",
            "🌾 Audit trail: Pesan transaksi dari muzakki tercatat abadi.",
            "📊 3 transaksi baru ditambahkan ke blockchain AgriZakat.",
            "🔗 Verifikasi silang: Semua data sesuai dengan consensus node."
        ];
        
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        toastEl.innerHTML = `<span>🔔</span> <strong>Blockchain Alert:</strong> ${randomMsg}`;
        
        // Reset animasi dan tampilkan
        toastEl.style.display = 'flex';
        toastEl.classList.add('show');
        
        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toastEl.classList.remove('show');
            setTimeout(() => {
                toastEl.style.display = 'none';
            }, 200);
        }, 3800);
    }
    
    // Inisialisasi: pastikan tampilan dashboard aktif
    const defaultActive = document.querySelector('.nav-item.active');
    if (!defaultActive || !defaultActive.getAttribute('data-view')) {
        const firstNav = document.querySelector('.nav-item');
        if(firstNav) switchToView('view-dashboard', firstNav);
    }
    
    // Tampilkan toast selamat datang (hanya sekali)
    setTimeout(() => {
        const toastEl = document.getElementById('appToast');
        if(toastEl && !window._welcomeToastShown) {
            window._welcomeToastShown = true;
            toastEl.innerHTML = `<span>🌿</span> <strong>AgriZakat v2.0</strong> — Transparansi & produktivitas petani mustahik.`;
            toastEl.style.display = 'flex';
            toastEl.classList.add('show');
            setTimeout(() => {
                toastEl.classList.remove('show');
                setTimeout(() => toastEl.style.display = 'none', 200);
            }, 2800);
        }
    }, 800);
    
    // Blockchain heartbeat: notifikasi periodik saat tab Audit aktif
    let intervalCheck = null;
    
    function startBlockchainHeartbeat() {
        if (intervalCheck) clearInterval(intervalCheck);
        intervalCheck = setInterval(() => {
            const activeView = document.querySelector('.view-section.active');
            if (activeView && activeView.id === 'view-blockchain') {
                triggerModernToast();
            }
        }, 25000); // Notifikasi setiap 25 detik
    }
    
    startBlockchainHeartbeat();
    
    // Override untuk memastikan notifikasi saat switch ke blockchain
    const originalSwitch = window.switchView;
    window.switchView = function(viewId, element) {
        originalSwitch(viewId, element);
        if (viewId === 'view-blockchain') {
            triggerModernToast();
        }
    };
    
    console.log("AgriZakat UI Modern Active - Version 2.0");
})();

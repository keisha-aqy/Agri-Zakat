/**
 * AgriZakat Prototype Controller
 * Mengatur pergantian view secara dinamis dan simulasi event real-time blockchain.
 */

function switchView(viewId, element) {
    // 1. Sembunyikan semua section konten view
    const views = document.querySelectorAll('.view-section');
    views.forEach(view => {
        view.classList.remove('active');
    });
    
    // 2. Tampilkan section view yang dipilih
    const activeView = document.getElementById(viewId);
    if (activeView) {
        activeView.classList.add('active');
    }
    
    // 3. Hapus status aktif (warna hijau) dari semua menu navigasi bawah
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // 4. Tambahkan status aktif pada menu navigasi yang baru saja diklik
    element.classList.add('active');

    // 5. Trigger simulasi pop-up notifikasi blockchain saat membuka tab 'Audit'
    if (viewId === 'view-blockchain') {
        triggerBlockchainToast();
    }
}

/**
 * Simulasi pemanggilan notifikasi transaksi blockchain terverifikasi secara real-time
 */
function triggerBlockchainToast() {
    const toast = document.getElementById('appToast');
    if (toast) {
        toast.style.display = 'block';
        
        // Sembunyikan kembali setelah 4 detik
        setTimeout(() => {
            toast.style.display = 'none';
        }, 4000);
    }
}
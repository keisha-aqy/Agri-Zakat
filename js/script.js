/* =====================================================================
   NAVIGATION
   ===================================================================== */
function nav(viewId, el) {
  // hide all views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  // show target
  var target = document.getElementById(viewId);
  if (target) target.classList.add('active');
 
  // update nav active state
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (el) {
    el.classList.add('active');
  } else {
    var match = document.querySelector('.nav-item[data-view="'+viewId+'"]');
    if (match) match.classList.add('active');
  }
 
  // scroll to top
  var area = document.getElementById('scrollArea');
  if (area) area.scrollTop = 0;
 
  // blockchain toast
  if (viewId === 'view-blockchain') {
    setTimeout(function(){ showToast('blockchain'); }, 400);
  }
}
 
// Add data-view attrs so nav items work without onclick param too
document.querySelectorAll('.nav-item').forEach(function(item, i) {
  var views = ['view-home','view-analytics','view-bantuan','view-blockchain','view-eligibility','view-green','view-journey'];
  item.setAttribute('data-view', views[i] || '');
});
 
/* =====================================================================
   TOAST
   ===================================================================== */
var toastTimer = null;
var blockchainMsgs = [
  '⛓️ Block baru terverifikasi: Zakat produktif tercatat di ledger.',
  '✅ Smart Contract: Distribusi bibit on-chain finalized.',
  '🔒 Hash terbaru 0x9f2e...a33b terkonfirmasi — 12 node.',
  '📊 Data audit disinkronisasi dengan node utama.',
  '🔗 Semua transaksi sesuai consensus peer-to-peer.'
];
 
function showToast(type) {
  var el = document.getElementById('toast');
  var icon = document.getElementById('toastIcon');
  var msg  = document.getElementById('toastMsg');
 
  if (type === 'blockchain') {
    icon.textContent = '🔗';
    var m = blockchainMsgs[Math.floor(Math.random() * blockchainMsgs.length)];
    msg.innerHTML = '<strong>Blockchain Alert:</strong> ' + m;
  } else {
    icon.textContent = '🌿';
    msg.innerHTML = '<strong>AgriZakat</strong> — Transparansi berbasis AI & Blockchain aktif.';
  }
 
  el.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { el.classList.remove('show'); }, 3200);
}
 
/* =====================================================================
   INIT
   ===================================================================== */
setTimeout(function() { showToast('welcome'); }, 700);
 
/* Feat-card click from dashboard → also update nav active */
document.querySelectorAll('.feat-card').forEach(function(card) {
  var oldClick = card.getAttribute('onclick');
  // already has onclick, just intercept to sync nav
  card.addEventListener('click', function() {
    var match = card.getAttribute('onclick').match(/nav\('([^']+)'\)/);
    if (match) {
      var targetId = match[1];
      var navViews = ['view-home','view-analytics','view-bantuan','view-blockchain','view-eligibility','view-green','view-journey'];
      var idx = navViews.indexOf(targetId);
      if (idx >= 0) {
        var navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(function(n){ n.classList.remove('active'); });
        if (navItems[idx]) navItems[idx].classList.add('active');
      }
    }
  });
});

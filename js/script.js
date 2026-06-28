/* =====================================================================
   AGRIZAKAT — script.js
   ===================================================================== */

/* ── Page Switching ─────────────────────────────────────────────── */
function enterApp() {
  document.getElementById('page-landing').style.display = 'none';
  var app = document.getElementById('page-app');
  app.style.display = 'flex';
  // default to dashboard view inside app
  showView('view-dashboard');
  activateSnav('view-dashboard');
  setTimeout(function () { showToast('welcome'); }, 600);
}

/* ── View Navigation (inside app) ──────────────────────────────── */
function showView(viewId) {
  document.querySelectorAll('#page-app .view').forEach(function (v) {
    v.classList.remove('active');
  });
  var target = document.getElementById(viewId);
  if (target) target.classList.add('active');

  // scroll content area back to top
  var content = document.getElementById('appContent');
  if (content) content.scrollTop = 0;

  // blockchain toast
  if (viewId === 'view-blockchain') {
    setTimeout(function () { showToast('blockchain'); }, 400);
  }
}

/* ── Sub-Nav Active State ───────────────────────────────────────── */
function activateSnav(viewId) {
  document.querySelectorAll('.snav-item').forEach(function (item) {
    item.classList.remove('active');
  });
  var match = document.querySelector('.snav-item[data-view="' + viewId + '"]');
  if (match) match.classList.add('active');
}

/* ── Combined nav helper called by snav-items ───────────────────── */
function nav(viewId, el) {
  showView(viewId);
  document.querySelectorAll('.snav-item').forEach(function (n) { n.classList.remove('active'); });
  if (el) el.classList.add('active');
}

/* ── Feature card clicks also sync the subnav ──────────────────── */
function navFromCard(viewId) {
  showView(viewId);
  activateSnav(viewId);
}

/* ── Toast ──────────────────────────────────────────────────────── */
var _toastTimer = null;
var _blockchainMsgs = [
  '⛓️ Block baru terverifikasi — zakat produktif tercatat di ledger.',
  '✅ Smart Contract: distribusi bibit on-chain finalized.',
  '🔒 Hash 0x9f2e...a33b terkonfirmasi — 12 node.',
  '📊 Data audit disinkronisasi dengan node utama.',
  '🔗 Semua transaksi sesuai consensus peer-to-peer.'
];

function showToast(type) {
  var el   = document.getElementById('toast');
  var icon = document.getElementById('toastIcon');
  var msg  = document.getElementById('toastMsg');
  if (!el) return;

  if (type === 'blockchain') {
    icon.textContent = '🔗';
    var m = _blockchainMsgs[Math.floor(Math.random() * _blockchainMsgs.length)];
    msg.innerHTML = '<strong>Blockchain Alert:</strong> ' + m;
  } else {
    icon.textContent = '🌿';
    msg.innerHTML = '<strong>AgriZakat</strong> — Sistem zakat digital berbasis AI & Blockchain aktif.';
  }

  el.classList.add('show');
  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function () { el.classList.remove('show'); }, 3400);
}

/* ── Init sub-nav click handlers ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.snav-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var viewId = item.getAttribute('data-view');
      if (viewId) nav(viewId, item);
    });
  });
});

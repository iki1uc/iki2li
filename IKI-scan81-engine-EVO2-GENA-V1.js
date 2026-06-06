(function () {
  const root = document.body || document.documentElement;
  const meta = root.getAttribute('data-iki') || '';
  const parts = Object.fromEntries(
    meta.split(';').map(s => s.trim()).filter(Boolean).map(s => s.split(':'))
  );

  const phase = parts.phase || 'omelett';
  const einstieg = parts.einstieg || 'scan';
  const inhalt = parts.inhalt || '81';

  console.log('[IKI-SCAN81]', { phase, einstieg, inhalt });
})();


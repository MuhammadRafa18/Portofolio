import createMiddleware from 'next-intl/middleware';

// 1. Ekspor default fungsi middleware
export default createMiddleware({
  // Daftar locale yang didukung
  locales: ['en', 'id'],
  // Locale default jika user mengakses root (/)
  defaultLocale: 'en'
});

// 2. Tentukan route mana saja yang diproses oleh middleware
export const config = {
  // Hanya jalankan pada route yang memiliki locale atau root
  matcher: ['/', '/(en|id)/:path*']
};
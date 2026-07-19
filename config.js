// ============================================
// KONFIGURASI SUPABASE
// ============================================
// 1. Buat project di https://supabase.com
// 2. Buka Project Settings → API
// 3. Copy "Project URL" dan "anon/public key"
// 4. Paste di bawah ini
// ============================================

const SUPABASE_URL = 'https://ypdnmsmutpsalyifatpy.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_S_9YQ4H2rA-j-oeWXsxHPA_hYxojRRV';

// ============================================
// JANGAN UBAH DI BAWAH INI
// ============================================
const SUPABASE_JS_URL = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';

// Validasi konfigurasi
if (SUPABASE_URL.includes('XXXXX')) {
  console.error('⚠️ Supabase belum dikonfigurasi! Edit file config.js');
}

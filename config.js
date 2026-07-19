// ============================================
// KONFIGURASI SUPABASE
// ============================================
// 1. Buat project di https://supabase.com
// 2. Buka Project Settings → API
// 3. Copy "Project URL" dan "anon/public key"
// 4. Paste di bawah ini
// ============================================

const SUPABASE_URL = 'https://XXXXX.supabase.co';       // ← ganti
const SUPABASE_ANON_KEY = 'eyJhbGc...';                  // ← ganti

// ============================================
// JANGAN UBAH DI BAWAH INI
// ============================================
const SUPABASE_JS_URL = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';

// Validasi konfigurasi
if (SUPABASE_URL.includes('XXXXX')) {
  console.error('⚠️ Supabase belum dikonfigurasi! Edit file config.js');
}
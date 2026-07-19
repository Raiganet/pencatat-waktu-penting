-- ============================================
-- TABEL EVENTS
-- ============================================ 
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  ts bigint not null,
  note text,
  created_at timestamptz default now()
);

-- Index untuk performa (query per user, urut waktu)
create index if not exists idx_events_user_ts on public.events(user_id, ts desc);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- User hanya bisa akses data MILIKNYA SENDIRI
-- ============================================
alter table public.events enable row level security;

-- Hapus policy lama kalau ada (biar idempotent)
drop policy if exists "Users can view own events" on public.events;
drop policy if exists "Users can insert own events" on public.events;
drop policy if exists "Users can delete own events" on public.events;

-- Policy: SELECT - user hanya lihat data sendiri
create policy "Users can view own events"
  on public.events for select
  using (auth.uid() = user_id);

-- Policy: INSERT - user hanya insert dengan user_id = dirinya
create policy "Users can insert own events"
  on public.events for insert
  with check (auth.uid() = user_id);

-- Policy: DELETE - user hanya hapus data sendiri
create policy "Users can delete own events"
  on public.events for delete
  using (auth.uid() = user_id);

-- ============================================
-- OPSIONAL: Matikan konfirmasi email
-- (Supabase default minta verifikasi email)
-- ============================================
-- Kalau mau user langsung bisa login tanpa verifikasi email:
-- Buka Supabase Dashboard → Authentication → Providers → Email
-- Matikan "Confirm email"

-- SELESAI! ✅

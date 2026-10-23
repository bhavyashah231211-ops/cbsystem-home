-- CBSystem Home: database for website orders and enquiries
-- Project: https://xjhkxqhomqdyxgahhtzn.supabase.co
-- Run once in Supabase: SQL Editor > New query > paste > Run.
-- Safe to run again: every statement uses IF NOT EXISTS / OR REPLACE.

create extension if not exists pgcrypto;

-- ---------- Orders / free trial sign-ups ----------
create table if not exists public.home_orders (
  id            uuid primary key default gen_random_uuid(),
  reference     text not null unique,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  business      text not null,
  contact_name  text not null,
  email         text not null,
  phone         text not null,
  address       text not null,
  notes         text,
  billing       text not null check (billing in ('monthly','yearly')),
  trial         boolean not null default false,
  items         jsonb not null,
  total         numeric(10,2) not null default 0,
  status        text not null default 'new'
                check (status in ('new','contacted','set_up','live','cancelled')),
  paid          boolean not null default false,
  admin_notes   text,
  source_page   text,
  user_agent    text
);

-- ---------- Enquiries / demo requests ----------
create table if not exists public.home_enquiries (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  phone       text,
  message     text,
  status      text not null default 'new'
              check (status in ('new','replied','closed')),
  admin_notes text,
  source_page text,
  user_agent  text
);

create index if not exists home_orders_created_idx    on public.home_orders (created_at desc);
create index if not exists home_orders_email_idx      on public.home_orders (lower(email));
create index if not exists home_orders_status_idx     on public.home_orders (status);
create index if not exists home_enquiries_created_idx on public.home_enquiries (created_at desc);
create index if not exists home_enquiries_email_idx   on public.home_enquiries (lower(email));

-- keep updated_at fresh on orders
create or replace function public.home_touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists home_orders_touch on public.home_orders;
create trigger home_orders_touch
  before update on public.home_orders
  for each row execute function public.home_touch_updated_at();

-- ---------- Security ----------
-- RLS on with NO policies = nobody can read or write from the browser.
-- Only the Edge Function (service role key, server side) can insert.
-- You view the data in the Supabase Table Editor, which uses the dashboard owner role.
alter table public.home_orders    enable row level security;
alter table public.home_enquiries enable row level security;

revoke all on public.home_orders    from anon, authenticated;
revoke all on public.home_enquiries from anon, authenticated;

-- ---------- Handy views for the Table Editor (not exposed to the browser) ----------
create or replace view public.home_orders_open as
  select reference, created_at, business, contact_name, email, phone, billing, trial, total, status, paid
  from public.home_orders
  where status in ('new','contacted','set_up')
  order by created_at desc;

revoke all on public.home_orders_open from anon, authenticated;

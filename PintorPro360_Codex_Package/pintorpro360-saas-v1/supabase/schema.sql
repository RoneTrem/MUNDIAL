create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text,
  business_name text,
  whatsapp text,
  city text,
  logo_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id)
);

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  whatsapp text,
  phone text,
  address text,
  neighborhood text,
  city text,
  notes text,
  source text,
  status text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.surface_diagnostics (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  surface_type text,
  area_type text,
  problems jsonb not null default '[]'::jsonb,
  notes text,
  alert_level text,
  preparation_recommendations jsonb not null default '[]'::jsonb,
  photos jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quotes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  diagnostic_id uuid references public.surface_diagnostics(id) on delete set null,
  service_type text,
  environments jsonb not null default '[]'::jsonb,
  labor_value numeric(12,2) not null default 0,
  material_value numeric(12,2) not null default 0,
  extras_value numeric(12,2) not null default 0,
  discount_value numeric(12,2) not null default 0,
  down_payment numeric(12,2) not null default 0,
  total_value numeric(12,2) not null default 0,
  remaining_value numeric(12,2) not null default 0,
  deadline text,
  warranty text,
  payment_terms text,
  validity_days integer not null default 7,
  status text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.smart_proposals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  quote_id uuid not null references public.quotes(id) on delete cascade,
  diagnostic_id uuid references public.surface_diagnostics(id) on delete set null,
  proposal_number text,
  score integer,
  status text,
  valid_until date,
  pdf_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.whatsapp_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  proposal_id uuid references public.smart_proposals(id) on delete set null,
  type text,
  content text,
  created_at timestamptz not null default now()
);

create table if not exists public.works (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  proposal_id uuid references public.smart_proposals(id) on delete set null,
  status text,
  checklist jsonb not null default '[]'::jsonb,
  payments jsonb not null default '[]'::jsonb,
  notes text,
  start_date date,
  end_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.portfolio_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  work_id uuid references public.works(id) on delete set null,
  before_photos jsonb not null default '[]'::jsonb,
  after_photos jsonb not null default '[]'::jsonb,
  description text,
  instagram_caption text,
  authorized boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.finance_summaries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid references public.clients(id) on delete set null,
  proposal_id uuid references public.smart_proposals(id) on delete set null,
  total_value numeric(12,2) not null default 0,
  down_payment numeric(12,2) not null default 0,
  remaining_value numeric(12,2) not null default 0,
  material_cost numeric(12,2) not null default 0,
  helper_cost numeric(12,2) not null default 0,
  transport_cost numeric(12,2) not null default 0,
  food_cost numeric(12,2) not null default 0,
  other_costs numeric(12,2) not null default 0,
  estimated_profit numeric(12,2) not null default 0,
  received_value numeric(12,2) not null default 0,
  pending_value numeric(12,2) not null default 0,
  payment_status text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_clients_user_id on public.clients(user_id);
create index if not exists idx_surface_diagnostics_user_id on public.surface_diagnostics(user_id);
create index if not exists idx_surface_diagnostics_client_id on public.surface_diagnostics(client_id);
create index if not exists idx_quotes_user_id on public.quotes(user_id);
create index if not exists idx_quotes_client_id on public.quotes(client_id);
create index if not exists idx_quotes_diagnostic_id on public.quotes(diagnostic_id);
create index if not exists idx_smart_proposals_user_id on public.smart_proposals(user_id);
create index if not exists idx_smart_proposals_client_id on public.smart_proposals(client_id);
create index if not exists idx_smart_proposals_quote_id on public.smart_proposals(quote_id);
create index if not exists idx_whatsapp_messages_user_id on public.whatsapp_messages(user_id);
create index if not exists idx_whatsapp_messages_client_id on public.whatsapp_messages(client_id);
create index if not exists idx_whatsapp_messages_proposal_id on public.whatsapp_messages(proposal_id);
create index if not exists idx_works_user_id on public.works(user_id);
create index if not exists idx_works_client_id on public.works(client_id);
create index if not exists idx_works_proposal_id on public.works(proposal_id);
create index if not exists idx_portfolio_items_user_id on public.portfolio_items(user_id);
create index if not exists idx_portfolio_items_client_id on public.portfolio_items(client_id);
create index if not exists idx_portfolio_items_work_id on public.portfolio_items(work_id);
create index if not exists idx_finance_summaries_user_id on public.finance_summaries(user_id);
create index if not exists idx_finance_summaries_client_id on public.finance_summaries(client_id);
create index if not exists idx_finance_summaries_proposal_id on public.finance_summaries(proposal_id);

create trigger set_updated_at_profiles before update on public.profiles for each row execute procedure public.set_updated_at();
create trigger set_updated_at_clients before update on public.clients for each row execute procedure public.set_updated_at();
create trigger set_updated_at_surface_diagnostics before update on public.surface_diagnostics for each row execute procedure public.set_updated_at();
create trigger set_updated_at_quotes before update on public.quotes for each row execute procedure public.set_updated_at();
create trigger set_updated_at_smart_proposals before update on public.smart_proposals for each row execute procedure public.set_updated_at();
create trigger set_updated_at_works before update on public.works for each row execute procedure public.set_updated_at();
create trigger set_updated_at_portfolio_items before update on public.portfolio_items for each row execute procedure public.set_updated_at();
create trigger set_updated_at_finance_summaries before update on public.finance_summaries for each row execute procedure public.set_updated_at();

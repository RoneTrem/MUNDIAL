alter table public.profiles enable row level security;
alter table public.clients enable row level security;
alter table public.surface_diagnostics enable row level security;
alter table public.quotes enable row level security;
alter table public.smart_proposals enable row level security;
alter table public.whatsapp_messages enable row level security;
alter table public.works enable row level security;
alter table public.portfolio_items enable row level security;
alter table public.finance_summaries enable row level security;

create policy "profiles_select_own" on public.profiles for select using (auth.uid() = user_id);
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = user_id);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "profiles_delete_own" on public.profiles for delete using (auth.uid() = user_id);

create policy "clients_select_own" on public.clients for select using (auth.uid() = user_id);
create policy "clients_insert_own" on public.clients for insert with check (auth.uid() = user_id);
create policy "clients_update_own" on public.clients for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "clients_delete_own" on public.clients for delete using (auth.uid() = user_id);

create policy "surface_diagnostics_select_own" on public.surface_diagnostics for select using (auth.uid() = user_id);
create policy "surface_diagnostics_insert_own" on public.surface_diagnostics for insert with check (auth.uid() = user_id);
create policy "surface_diagnostics_update_own" on public.surface_diagnostics for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "surface_diagnostics_delete_own" on public.surface_diagnostics for delete using (auth.uid() = user_id);

create policy "quotes_select_own" on public.quotes for select using (auth.uid() = user_id);
create policy "quotes_insert_own" on public.quotes for insert with check (auth.uid() = user_id);
create policy "quotes_update_own" on public.quotes for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "quotes_delete_own" on public.quotes for delete using (auth.uid() = user_id);

create policy "smart_proposals_select_own" on public.smart_proposals for select using (auth.uid() = user_id);
create policy "smart_proposals_insert_own" on public.smart_proposals for insert with check (auth.uid() = user_id);
create policy "smart_proposals_update_own" on public.smart_proposals for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "smart_proposals_delete_own" on public.smart_proposals for delete using (auth.uid() = user_id);

create policy "whatsapp_messages_select_own" on public.whatsapp_messages for select using (auth.uid() = user_id);
create policy "whatsapp_messages_insert_own" on public.whatsapp_messages for insert with check (auth.uid() = user_id);
create policy "whatsapp_messages_update_own" on public.whatsapp_messages for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "whatsapp_messages_delete_own" on public.whatsapp_messages for delete using (auth.uid() = user_id);

create policy "works_select_own" on public.works for select using (auth.uid() = user_id);
create policy "works_insert_own" on public.works for insert with check (auth.uid() = user_id);
create policy "works_update_own" on public.works for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "works_delete_own" on public.works for delete using (auth.uid() = user_id);

create policy "portfolio_items_select_own" on public.portfolio_items for select using (auth.uid() = user_id);
create policy "portfolio_items_insert_own" on public.portfolio_items for insert with check (auth.uid() = user_id);
create policy "portfolio_items_update_own" on public.portfolio_items for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "portfolio_items_delete_own" on public.portfolio_items for delete using (auth.uid() = user_id);

create policy "finance_summaries_select_own" on public.finance_summaries for select using (auth.uid() = user_id);
create policy "finance_summaries_insert_own" on public.finance_summaries for insert with check (auth.uid() = user_id);
create policy "finance_summaries_update_own" on public.finance_summaries for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "finance_summaries_delete_own" on public.finance_summaries for delete using (auth.uid() = user_id);

# 04 — Arquitetura Técnica

## Stack recomendada
- Next.js com App Router.
- TypeScript.
- CSS próprio inicialmente ou Tailwind configurado corretamente.
- Supabase para auth, banco e storage.
- Vercel para deploy.
- GitHub para versionamento.

## Estrutura ideal
```txt
app/
  layout.tsx
  globals.css
  page.tsx
  dashboard/page.tsx
  clientes/page.tsx
  diagnostico/page.tsx
  orcamentos/page.tsx
  proposta/page.tsx
  whatsapp/page.tsx
  obras/page.tsx
  pos-venda/page.tsx
components/
  layout/
  ui/
  proposal/
  clients/
  diagnostics/
  quotes/
  whatsapp/
  works/
  shared/
lib/
  supabase/
  mock/
  types/
  utils/
  services/
  business-rules/
public/
```

## Observação importante
Durante a tentativa no StackBlitz, `components` e `lib` foram criados dentro de `app`, causando erro de importação. Na base final, deixar `components` e `lib` fora de `app`.

## Banco inicial
Tabelas recomendadas: `profiles`, `clients`, `surface_diagnostics`, `quotes`, `smart_proposals`, `works`, `work_checklist_items`, `whatsapp_messages`, `photos`.

Todas as tabelas devem ter `user_id` e RLS: usuário só acessa registros onde `auth.uid() = user_id`.

## PDF
Fase 1: `window.print()`.
Fase 2: server-side PDF + Supabase Storage.

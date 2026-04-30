# Notas de Schema

- Schema alinhado com os tipos em `lib/types/*`.
- Campos de lista/estrutura variada foram mapeados como `jsonb` (ex.: `problems`, `environments`, `checklist`, `payments`, fotos).
- `updated_at` é mantido por trigger `set_updated_at`.
- RLS por usuário em todas as tabelas com `user_id`.

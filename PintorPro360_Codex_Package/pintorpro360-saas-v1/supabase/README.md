# Supabase SQL Setup (PintorPro 360)

Esta etapa prepara o **schema inicial + RLS + seed de exemplo** sem conectar a UI ao Supabase.

## Ordem de execução
1. `supabase/schema.sql`
2. `supabase/rls-policies.sql`
3. `supabase/seed-example.sql` (opcional, somente desenvolvimento)

## Decisão de modelagem financeira (MVP)
Foi escolhida a tabela `finance_summaries` (em vez de `payments`) por ser a modelagem mais simples para o MVP atual:
- cobre os campos de resumo financeiro já definidos no domínio (`FinanceSummary`),
- reduz complexidade inicial,
- permite evoluir futuramente para tabela transacional `payments` sem quebrar o fluxo Proposta/WhatsApp.

## Segurança
- Todas as tabelas com `user_id` têm RLS habilitado.
- A política principal é: `auth.uid() = user_id` para select/insert/update/delete.
- Não há chaves, tokens ou `.env` neste diretório.

## Observações
- Este pacote **não** conecta frontend ao Supabase.
- A próxima etapa será criar client Supabase e autenticação mantendo esses contratos de dados.

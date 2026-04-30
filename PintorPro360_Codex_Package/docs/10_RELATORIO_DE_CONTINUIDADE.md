# 10 — Relatório de Continuidade

## Decisões já tomadas
- Nome provisório: PintorPro 360.
- Público-alvo: pintores autônomos e pequenas equipes.
- Núcleo: Proposta Inteligente de Pintura.
- Produto deve ser SaaS/web/PWA antes de APK.
- Protótipo Vite validou fluxo e PDF.
- Base final: Next.js + Supabase.

## Problemas técnicos recentes
- Imports quebrados por estrutura de pastas.
- `components`/`lib` dentro de `app`.
- Dependência `tailwindcss` ausente.

## Próximo passo mais seguro
Criar/usar base Next.js limpa, com `components` e `lib` fora de `app`, migrar a proposta premium, validar build e só depois conectar Supabase.

## Não alterar sem decisão
- Conceito de Proposta Inteligente.
- Promessa principal.
- Fluxo cliente → diagnóstico → orçamento → proposta → WhatsApp → obra → pós-venda.
- Necessidade de visual premium e PDF profissional.

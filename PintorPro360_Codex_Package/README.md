# PintorPro 360 — Pacote de Transferência para Codex

Projeto SaaS em Next.js para pintores autônomos e pequenas equipes, com foco em proposta inteligente, envio por WhatsApp e organização do atendimento.

## Estrutura
- `docs/`: documentação de requisitos, arquitetura e continuidade.
- `pintorpro360-saas-v1/`: aplicação Next.js (App Router + TypeScript).

## Tecnologias
- Next.js 16
- React 19
- TypeScript
- CSS global (sem Tailwind nesta fase)

## Como executar
```bash
cd pintorpro360-saas-v1
npm install
npm run dev
```
Acesse: `http://localhost:3000`.

## Build de produção
```bash
npm run build
npm run start
```

## Estado atual (abril/2026)
- Rotas principais criadas (`/`, `/dashboard`, `/clientes`, `/diagnostico`, `/orcamentos`, `/proposta`, `/whatsapp`, `/obras`, `/pos-venda`).
- Página `/proposta` com layout premium, impressão/PDF, botão de copiar mensagem e botão de abrir WhatsApp.
- Página `/whatsapp` com gerador de mensagens (proposta, follow-up e pós-venda).
- Base ainda usa dados mockados em `lib/mock/pintorpro-data.ts`.
- Supabase e autenticação ainda pendentes (próxima etapa).

## Testes recomendados
```bash
npm run build
npm run dev
```
Verifique manualmente:
1. Navegação entre páginas.
2. Impressão da proposta em `/proposta`.
3. Copiar e abrir WhatsApp em `/proposta` e `/whatsapp`.

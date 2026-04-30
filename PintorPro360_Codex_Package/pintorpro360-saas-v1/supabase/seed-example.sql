-- Exemplo seguro com dados fictícios.
-- Substitua os UUIDs apenas em ambiente local de desenvolvimento.

insert into public.profiles (id, user_id, name, business_name, whatsapp, city)
values ('11111111-1111-1111-1111-111111111111', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Pintor Demo', 'PintorPro Demo', '75999999999', 'Cícero Dantas - BA');

insert into public.clients (id, user_id, name, whatsapp, city, source, status)
values ('22222222-2222-2222-2222-222222222222', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Maria Oliveira', '75999999999', 'Cícero Dantas - BA', 'indicacao', 'orcamento_enviado');

insert into public.surface_diagnostics (id, user_id, client_id, surface_type, area_type, problems, notes, alert_level, preparation_recommendations)
values (
  '33333333-3333-3333-3333-333333333333',
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  '22222222-2222-2222-2222-222222222222',
  'repintura',
  'interna',
  '["umidade","descascamento"]'::jsonb,
  'Parede com pontos de descascamento próximo ao rodapé.',
  'alto',
  '["limpeza","lixamento","fundo_preparador"]'::jsonb
);

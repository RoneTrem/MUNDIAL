import type { Client } from "../../types";

type ClientRow = {
  id: string;
  user_id: string;
  name: string;
  whatsapp: string | null;
  phone: string | null;
  address: string | null;
  neighborhood: string | null;
  city: string | null;
  notes: string | null;
  source: string | null;
  status: string | null;
  created_at: string;
  updated_at: string;
};

export function mapClientRowToDomain(row: ClientRow): Client {
  return {
    id: row.id,
    userId: row.user_id,
    name: row.name,
    whatsapp: row.whatsapp ?? "",
    phone: row.phone ?? "",
    address: row.address ?? "",
    neighborhood: row.neighborhood ?? "",
    city: row.city ?? "",
    notes: row.notes ?? "",
    source: (row.source ?? "outro") as Client["source"],
    status: (row.status ?? "novo") as Client["status"],
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

export function mapClientDomainToRow(client: Client): ClientRow {
  return {
    id: client.id,
    user_id: client.userId,
    name: client.name,
    whatsapp: client.whatsapp,
    phone: client.phone,
    address: client.address,
    neighborhood: client.neighborhood,
    city: client.city,
    notes: client.notes,
    source: client.source,
    status: client.status,
    created_at: client.createdAt,
    updated_at: client.updatedAt
  };
}

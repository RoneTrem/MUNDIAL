import type { SurfaceDiagnostic } from "../../types";

type SurfaceDiagnosticRow = {
  id: string; user_id: string; client_id: string; surface_type: string | null; area_type: string | null;
  problems: unknown; notes: string | null; alert_level: string | null; preparation_recommendations: unknown; photos: unknown;
  created_at: string; updated_at: string;
};

export function mapDiagnosticRowToDomain(row: SurfaceDiagnosticRow): SurfaceDiagnostic {
  return {
    id: row.id,
    userId: row.user_id,
    clientId: row.client_id,
    surfaceType: (row.surface_type ?? "repintura") as SurfaceDiagnostic["surfaceType"],
    areaType: (row.area_type ?? "interna") as SurfaceDiagnostic["areaType"],
    problems: (Array.isArray(row.problems) ? row.problems : []) as SurfaceDiagnostic["problems"],
    notes: row.notes ?? "",
    alertLevel: (row.alert_level ?? "medio") as SurfaceDiagnostic["alertLevel"],
    preparationRecommendations: (Array.isArray(row.preparation_recommendations) ? row.preparation_recommendations : []) as SurfaceDiagnostic["preparationRecommendations"],
    photos: (Array.isArray(row.photos) ? row.photos : []) as string[],
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

export function mapDiagnosticDomainToRow(data: SurfaceDiagnostic): SurfaceDiagnosticRow {
  return {
    id: data.id, user_id: data.userId, client_id: data.clientId, surface_type: data.surfaceType, area_type: data.areaType,
    problems: data.problems, notes: data.notes, alert_level: data.alertLevel, preparation_recommendations: data.preparationRecommendations, photos: data.photos,
    created_at: data.createdAt, updated_at: data.updatedAt
  };
}

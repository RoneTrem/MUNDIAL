export type SurfaceType = "parede_nova" | "repintura" | "reboco" | "massa_corrida" | "gesso" | "teto";
export type AreaType = "interna" | "externa" | "interna_externa";
export type SurfaceProblem = "mofo" | "umidade" | "infiltracao" | "descascamento" | "trincas" | "fissuras" | "po" | "gordura" | "manchas" | "tinta_antiga_fraca" | "massa_mal_lixada" | "reboco_esfarelando" | "sem_selador" | "pouca_ventilacao";
export type AlertLevel = "baixo" | "medio" | "alto";
export type PreparationRecommendation = "limpeza" | "lixamento" | "correcao_fissuras" | "selador" | "fundo_preparador" | "tratamento_umidade" | "fungicida";

export type SurfaceDiagnostic = {
  id: string;
  userId: string;
  clientId: string;
  surfaceType: SurfaceType;
  areaType: AreaType;
  problems: SurfaceProblem[];
  notes: string;
  alertLevel: AlertLevel;
  preparationRecommendations: PreparationRecommendation[];
  photos: string[];
  createdAt: string;
  updatedAt: string;
};

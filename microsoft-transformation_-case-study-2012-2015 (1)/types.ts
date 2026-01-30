
export interface FinancialData {
  year: number;
  value: number;
  label?: string;
}

export enum SectionId {
  COVER = 'cover',
  HERO = 'hero',
  DIAGNOSIS = 'diagnosis',
  ERRORS = 'errors',
  CULTURE = 'culture',
  PIVOT = 'pivot',
  METRICS = 'metrics',
  REBIRTH = 'rebirth'
}

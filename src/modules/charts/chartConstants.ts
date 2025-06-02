const ChartTypes = {
  PIE: 'PieChart',
} as const;

export type ChartType = (typeof ChartTypes)[keyof typeof ChartTypes];
export { ChartTypes };

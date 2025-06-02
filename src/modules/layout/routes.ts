export const Routes = {
    home: '/',
    dashboard: '/dashboard',
    charts: '/charts',
} as const;

export type Route = typeof Routes[keyof typeof Routes];
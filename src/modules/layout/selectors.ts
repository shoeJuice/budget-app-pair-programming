const LayoutSelectors = {
  NAVBAR: 'app-navbar',
} as const;

export type LayoutSelector = typeof LayoutSelectors[keyof typeof LayoutSelectors];
export { LayoutSelectors };
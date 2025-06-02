const GlobalSelectors = {
    MAIN_CONTAINER: 'main-container',
} as const;

export type GlobalSelectorsType = typeof GlobalSelectors[keyof typeof GlobalSelectors];
export default GlobalSelectors;
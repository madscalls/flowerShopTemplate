// Theme levers carried over from the design mockup.
// Change these to re-skin the whole template for a new client.
export const THEME = {
  accent: '#E08E45', // Toasted Almond: buttons, highlights
  leaf: '#8FBF7A',   // Sage: labels, leaf decals
  shape: 'organic',  // 'organic' | 'soft' | 'square' photo corners
};

export function useTheme(pageDefaults) {
  return { ...pageDefaults, ...THEME };
}

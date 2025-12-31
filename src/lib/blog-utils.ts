// Cores para categorias (client-side safe)
export const categoryColors: Record<string, string> = {
  'Release': 'from-green-500 to-emerald-600',
  'Lançamento': 'from-green-500 to-emerald-600',
  'Tutorial': 'from-blue-500 to-indigo-600',
  'News': 'from-purple-500 to-pink-600',
  'Notícias': 'from-purple-500 to-pink-600',
  'Features': 'from-cyan-500 to-blue-600',
  'Recursos': 'from-cyan-500 to-blue-600',
  'Community': 'from-orange-500 to-red-600',
  'Comunidade': 'from-orange-500 to-red-600',
  'default': 'from-gray-500 to-gray-600',
};

export function getCategoryColor(category: string): string {
  return categoryColors[category] || categoryColors['default'];
}

import { getCategoryColor } from '@/lib/blog-utils';

interface CategoryPillProps {
  category: string;
  className?: string;
}

export function CategoryPill({ category, className = '' }: CategoryPillProps) {
  const gradient = getCategoryColor(category);

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${gradient} ${className}`}
    >
      {category}
    </span>
  );
}

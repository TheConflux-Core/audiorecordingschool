import AffiliateProductCard from './AffiliateProductCard';

interface Product {
  name: string;
  description: string;
  price?: string;
  url: string;
  retailer: string;
}

interface RecommendedGearProps {
  title?: string;
  products: Product[];
}

export default function RecommendedGear({
  title = 'Recommended Gear',
  products,
}: RecommendedGearProps) {
  if (!products || products.length === 0) return null;

  return (
    <aside className="my-10 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/5 to-violet-500/5 p-6">
      <div className="flex items-center gap-2 mb-4">
        <svg
          className="w-5 h-5 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <p className="text-xs text-slate-400 mb-4">
        We may earn a commission from purchases made through these links at no extra cost to you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {products.map((product, i) => (
          <AffiliateProductCard key={i} product={product} />
        ))}
      </div>
    </aside>
  );
}

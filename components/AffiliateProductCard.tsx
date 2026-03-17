import Link from 'next/link';

interface Product {
  name: string;
  description: string;
  price?: string;
  url: string;
  retailer: string;
}

interface AffiliateProductCardProps {
  product: Product;
}

export default function AffiliateProductCard({ product }: AffiliateProductCardProps) {
  return (
    <Link
      href={product.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block rounded-lg border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
            {product.name}
          </h4>
          <p className="mt-1 text-xs text-slate-400 leading-relaxed">{product.description}</p>
          <p className="mt-2 text-xs text-slate-500">
            via {product.retailer}
          </p>
        </div>
        {product.price && (
          <span className="shrink-0 rounded-full bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 text-xs font-medium text-cyan-300">
            {product.price}
          </span>
        )}
      </div>
    </Link>
  );
}

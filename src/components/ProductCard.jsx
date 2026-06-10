import { ShoppingCart } from "lucide-react";

export default function ProductCard({
  product,
  index = 0,
  inView = true,
  onClick,
  onAddToCart,
}) {
  return (
    <div
      key={product.id}
      onClick={() => onClick(product.id)}
      className={`bg-[#f8f9fa] dark:bg-black/40 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-5 relative group flex flex-col cursor-pointer hover:border-black/20 dark:border-white/20 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] transition-all duration-500
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
        style={{
          transitionDelay: inView ? `${index * 100}ms` : '0ms',
        }}
    >
      {/* Discount Badge */}
      {product.discount && (
        <span className="absolute top-4 left-4 bg-[#F47C5A]/10 text-[#F47C5A] border border-[#F47C5A]/20 text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded z-10">
          -{product.discount}%
        </span>
      )}

      {/* Image */}
      <div className="w-full h-40 sm:h-48 mb-4 relative flex items-center justify-center p-4 bg-white/[0.02] rounded-lg border border-white/[0.04] overflow-hidden">
        <img
          src={product.images?.[0] || product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm font-semibold text-white/90 line-clamp-2 pr-2 leading-snug">{product.name}</h3>
          <button className="text-gray-500 dark:text-white/40 hover:text-[#F47C5A] transition-colors" onClick={(e) => onAddToCart(e, product.id)}>
            <ShoppingCart size={18} />
          </button>
        </div>

        {product.specs && (
          <p className="text-[11px] text-gray-500 dark:text-white/40 mb-4 line-clamp-2 font-light">
            {Object.values(product.specs).join(" • ")}
          </p>
        )}

        <div className="mt-auto pt-4 border-t border-white/[0.06] flex items-end gap-2">
          <span className="text-lg font-bold text-white">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="line-through text-gray-400 dark:text-white/30 text-xs mb-0.5">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

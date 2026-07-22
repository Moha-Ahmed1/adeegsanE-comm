import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import type { Product } from "../data/products";
import { useCart } from "./CartContext";

const badgeColors: Record<string, string> = {
  New: "bg-emerald-500",
  Sale: "bg-amber-500",
  Hot: "bg-[#ee1c3e]",
  "-20%": "bg-[#ee1c3e]",
  "-30%": "bg-[#ee1c3e]",
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="card-hover group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-100 bg-white p-4 hover:shadow-2xl hover:shadow-zinc-200/70"
    >
      {product.badge && (
        <span
          className={`absolute left-4 top-4 z-10 rounded-full ${badgeColors[product.badge]} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white`}
        >
          {product.badge}
        </span>
      )}

      <button
        onClick={() => toggleWishlist(product.id)}
        className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur transition-colors ${
          isWishlisted ? "bg-[#ee1c3e] text-white" : "bg-white/80 text-zinc-500 hover:text-[#ee1c3e]"
        }`}
      >
        <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
      </button>

      <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-zinc-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-40 object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/0 opacity-0 transition-all duration-300 group-hover:bg-zinc-900/10 group-hover:opacity-100">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg transition-transform hover:scale-110">
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
          {product.brand}
        </p>
        <h3 className="mt-1 line-clamp-1 text-sm font-semibold text-zinc-900">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.round(product.rating) ? "fill-current" : "fill-zinc-200 text-zinc-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-zinc-400">({product.reviews})</span>
        </div>

        {product.colors && (
          <div className="mt-3 flex items-center gap-1.5">
            {product.colors.map((c) => (
              <span
                key={c}
                style={{ backgroundColor: c }}
                className="h-3.5 w-3.5 rounded-full border border-zinc-200"
              />
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-zinc-900">${product.price}</span>
            {product.oldPrice && (
              <span className="text-xs text-zinc-400 line-through">${product.oldPrice}</span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white transition-all duration-300 hover:bg-[#ee1c3e] active:scale-90"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

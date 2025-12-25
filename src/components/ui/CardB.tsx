export default function CardB({ title, description }: { title: string, description: string }) {
  return (
    <div className="
      relative rounded-xl border border-white/10
      bg-black/60 backdrop-blur-md
      p-6 transition-all duration-300
      hover:border-pink-500/60
      hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.6)]
    ">
      
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-70" />

      <h3 className="text-white text-lg font-light tracking-wide">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

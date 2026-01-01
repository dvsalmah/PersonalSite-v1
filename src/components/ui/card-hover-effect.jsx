import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-px", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full transition-all duration-500 hover:scale-110 hover:z-30"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#F1A7C6] rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        // Base Style
        "rounded-2xl h-full w-full p-6 overflow-hidden relative z-20 flex flex-col items-center justify-center text-center",
        
        // WARNA: Normal (Slate) -> Hover (Transparan biar Pink kelihatan)
        "bg-[#1E293B] group-hover:bg-transparent",
        
        // BORDER: Normal (Ada) -> Hover (Hilang)
        "border border-slate-700 group-hover:border-transparent",
        
        // PERUBAHAN 2: Hapus scale dari sini karena sudah dipindah ke atas (<a>)
        // Cukup transisi warna saja
        "transition-colors duration-300", 

        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children
}) => {
  return (
    <h4 className={cn(
      "font-bold tracking-wide mt-2",
      // Text Putih -> Hitam saat hover
      "text-[#F8FAFC] group-hover:text-slate-900 transition-colors duration-300",
      className
    )}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p
      className={cn(
        "mt-4 tracking-wide leading-relaxed text-sm",
        // Text Abu -> Abu Gelap saat hover
        "text-[#CBD5E1] group-hover:text-slate-800 transition-colors duration-300",
        className
      )}>
      {children}
    </p>
  );
};
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Badge } from "./badge";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn("grid grid-cols-2 md:grid-cols-4 py-px", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link || idx}
          className="relative group block p-2 h-full w-full transition-all duration-500 hover:z-30 cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="pointer-events-none absolute inset-0 h-full w-full bg-[#F1A7C6] rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.01 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.01},
                }} />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex flex-col items-center justify-center content-center h-full group-hover:hidden transition-all duration-150">
              <CardTitle>{item.title}</CardTitle>
            </div>
            <div className="hidden group-hover:flex flex-wrap gap-0.5 justify-center items-center h-full animate-in fade-in zoom-in duration-100 overflow-auto">
            {item.badges && item.badges.map((badgeText, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-slate-900/80 text-slate-100 border border-slate-700 px-1.5 py-0.5 text-[10px] leading-tight h-auto shrink-0 whitespace-normal">
                {badgeText}
              </Badge>
            ))}
            </div>
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
        "rounded-2xl h-full w-full min-h-[200px] lg:min-h-[150px] p-4 overflow-hidden relative z-20 flex flex-col items-center justify-center text-center",
        "bg-[#1E293B] group-hover:bg-transparent",
        "border border-slate-700 group-hover:border-transparent",
        "transition-all duration-100 scale-100 group-hover:scale-125", 

        className
      )}>
      <div className="relative z-50 w-full">
        <div>{children}</div>
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
      "text-[#F8FAFC] group-hover:text-slate-900 transition-colors duration-300",
      className
    )}>
      {children}
    </h4>
  );
};

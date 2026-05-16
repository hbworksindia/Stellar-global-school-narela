import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({ title, subtitle, centered = true, light = false, className }: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-16", 
      centered ? "text-center mx-auto" : "text-left",
      className
    )}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={cn(
            "inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4",
            light ? "bg-white/10 text-secondary" : "bg-primary/5 text-primary"
          )}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          "text-3xl md:text-5xl font-display font-bold leading-tight",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={cn(
          "h-1.5 rounded-full mt-6",
          centered ? "mx-auto" : "",
          light ? "bg-secondary" : "bg-secondary"
        )}
      />
    </div>
  );
}

'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'left' | 'right' | 'scale';
}

const hiddenVariantClasses = {
  up: 'translate-y-5',
  left: '-translate-x-5',
  right: 'translate-x-5',
  scale: 'translate-y-2 scale-[0.985]',
} as const;

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  variant = 'up',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -10% 0px' },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-animate-on-scroll="true"
      data-animate-variant={variant}
      className={cn(
        'transition-[opacity,translate,scale] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none',
        isVisible
          ? 'translate-x-0 translate-y-0 scale-100 opacity-100'
          : cn('opacity-0', hiddenVariantClasses[variant]),
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

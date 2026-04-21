'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

type FadeInOnScrollProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  duration?: number;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
};

export default function FadeInOnScroll({
  children,
  className,
  direction = 'up',
  duration = 0.6,
  delay = 0,
  threshold = 0.2,
  triggerOnce = true,
}: FadeInOnScrollProps) {

  const offsetMap: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  const offset = offsetMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: triggerOnce, amount: threshold }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

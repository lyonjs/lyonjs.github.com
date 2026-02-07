'use client';
import React, { useEffect, useRef } from 'react';
import { animate, motion, useInView } from 'motion/react';
import { Roboto_Mono } from 'next/font/google';

const MonospaceFont = Roboto_Mono({
  variable: '--font-mono',
  weight: '700',
  subsets: ['latin'],
});

const counter = (elementRef: HTMLDivElement, start: number, end: number) => {
  let range = end - start;
  const duration = Math.sqrt(Math.log(range));
  animate(
    (progress: number) => {
      elementRef.textContent = `${Math.floor(start + progress * range)}`;
    },
    { duration, ease: 'easeOut' },
  );
};

export const Number = ({ value, text }: { value: number; text: string }) => {
  const elementRef = useRef<HTMLLIElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true });

  useEffect(() => {
    if (isInView && counterRef.current) {
      counter(counterRef.current, Math.floor(value * 0.6), value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- animation should only run on mount
  }, [isInView]);

  return (
    <motion.li
      ref={elementRef}
      className={MonospaceFont.variable}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay: 0.2, ease: 'easeOut' }}
    >
      <div ref={counterRef}>{value}</div>
      <div>{text}</div>
    </motion.li>
  );
};

'use client';
import React, { useEffect, useRef } from 'react';
import { animate, inView } from 'motion';
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
    { duration, easing: 'ease-out' },
  );
};

export const Number = ({ value, text }: { value: number; text: string }) => {
  const elementRef = useRef(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      inView(elementRef.current, ({ target }) => {
        animate(target, { opacity: 1 }, { delay: 0.2, easing: 'ease-out' });
        if (counterRef.current) {
          counter(counterRef.current, Math.floor(value * 0.6), value);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- animation should only run on mount
  }, []);

  return (
    <li ref={elementRef} className={MonospaceFont.variable}>
      <div ref={counterRef}>{value}</div>
      <div>{text}</div>
    </li>
  );
};

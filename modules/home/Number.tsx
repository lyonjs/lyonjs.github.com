'use client';
import React, { useEffect, useRef } from 'react';
import { animate, inView } from 'motion';

const counter = (elementRef: HTMLDivElement, start: number, end: number) => {
  let current = start;
  let range = end - start;
  const duration = Math.sqrt(Math.log(range));
  animate(
    (progress: number) => {
      current = Math.floor(start + progress * range);
      elementRef.textContent = `${current}`;
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
  }, []);

  return (
    <li ref={elementRef}>
      <div ref={counterRef}>{value}</div>
      <div>{text}</div>
    </li>
  );
};

'use client';
import React, { useEffect, useRef } from 'react';
import { animate, inView } from 'motion';

const counter = (elementRef: HTMLDivElement, start: number, end: number) => {
  let current = start;
  let range = end - start;
  let increment = end > start ? 1 : -1;
  const step = Math.abs(Math.floor(1000 / range));
  const timer = setInterval(() => {
    current += increment;
    elementRef.textContent = `${current}`;
    if (current == end) {
      clearInterval(timer);
    }
  }, step);
};

export const Number = ({ value, text }: { value: number; text: string }) => {
  const elementRef = useRef(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      inView(elementRef.current, ({ target }) => {
        animate(target, { opacity: 1 }, { delay: 0.2, easing: 'ease-out' }).finished.then(() => {
          if (counterRef.current) {
            counter(counterRef.current, Math.floor(value * 0.75), value);
          }
        });
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

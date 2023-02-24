import { ResponsiveImage } from './modules/atoms/remark/image';
import { H1, H2 } from './modules/atoms/remark/titles';
import { A, Li, P, Ul } from './modules/atoms/remark/text';

export function useMDXComponents(components: any) {
  return {
    img: ResponsiveImage,
    h1: H1,
    h2: H2,
    p: P,
    ul: Ul,
    li: Li,
    a: A,
    ...components,
  };
}

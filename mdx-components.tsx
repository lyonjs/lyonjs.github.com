import { ResponsiveImage } from './modules/atoms/remark/Image';
import { H1, H2, H3 } from './modules/atoms/remark/Titles';
import { A, Li, P, Ul } from './modules/atoms/remark/Text';

export function useMDXComponents(components: any) {
  return {
    img: ResponsiveImage,
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    ul: Ul,
    li: Li,
    a: A,
    ...components,
  };
}

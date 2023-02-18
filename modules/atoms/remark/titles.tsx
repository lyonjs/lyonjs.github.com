import { TitleHighlight } from '../TitleHighlight';

export const H1: React.FC<{ children: any }> = (props) => {
  return <TitleHighlight className="my-6" Component="h1" {...props} />;
};

export const H2: React.FC<{ children: any }> = (props) => {
  return <TitleHighlight className="my-6" Component="h2" {...props} />;
};

export type Person = {
  name: string;
  description?: string;
  avatarUrl: string;
  social: {
    twitter?: string;
    linkedin?: string;
  };
};

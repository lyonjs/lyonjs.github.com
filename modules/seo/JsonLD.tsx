export const JsonLD: React.FC<{ jsonObject: unknown }> = ({ jsonObject }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonObject),
    }}
  />
);

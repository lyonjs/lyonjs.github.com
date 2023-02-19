import Image from 'next/image';
export const Footer = () => {
  return (
    <footer className="flex justify-between items-center my-8">
      <a className="block" href="https://vercel.com?utm_source=lyonjs&utm_campaign=oss">
        <Image
          alt="Vercel"
          width="200"
          height="100"
          src="https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg"
        />
      </a>
      <span className="block">Made with 💛 and JS</span>
    </footer>
  );
};

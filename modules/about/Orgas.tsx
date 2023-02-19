import React from 'react';
import Image from 'next/image';
import { Twitter } from '../icons/Twitter';
import { Linkedin } from '../icons/Linkedin';
import { orgas } from '../../data/orgas';

export const Orgas: React.FC = () => (
  <div className="grid md:grid-cols-5 grid-cols-2 gap-12 mb-4">
    {orgas.map((orga) => (
      <figure key={orga.name}>
        <Image
          src={orga.avatarUrl}
          alt={orga.name}
          width="200"
          height="200"
          title={orga.name}
          className="object-cover drop-shadow-md"
        />
        <figcaption className="flex justify-center mt-4">
          {orga.name}
          {orga.social.twitter && (
            <a
              href={`https://twitter.com/${orga.social.twitter}`}
              target="_blank"
              rel="noreferrer noopener"
              className="text-lyonjs-yellow mx-[1ch]"
              title={`Compte Twitter de ${orga.name}`}
            >
              <Twitter color="currentColor" size={24} />
            </a>
          )}
          {orga.social.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${orga.social.linkedin}`}
              target="_blank"
              rel="noreferrer noopener"
              className="text-lyonjs-yellow"
              title={`Compte Linkedin de ${orga.name}`}
            >
              <Linkedin color="currentColor" size={24} />
            </a>
          )}
        </figcaption>
      </figure>
    ))}
  </div>
);

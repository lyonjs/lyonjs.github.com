import type { NextPage } from 'next';
import React from 'react';
import Image from "next/image";
import { LyonJSHead } from '../modules/header/LyonJSHead';
import { Header } from '../modules/header/Header';
import { TitleHighlight } from '../modules/atoms/TitleHighlight';
import { orgas } from '../data/orgas';
import { Twitter } from '../modules/icons/Twitter';
import { Linkedin } from '../modules/icons/Linkedin';

const Home: NextPage = () => {
  return (
    <>
      <LyonJSHead />
      <Header />
      <main>
        <h1 className="text-sm text-gray-400 my-4">
          A propos du Lyon JS : la communauté lyonnaise des utilisateurs de JavaScript
        </h1>
        <TitleHighlight Component="h2">Qu&apos;est ce que le LyonJS ?</TitleHighlight>
        <p className="my-4">
          Le LyonJS est un groupe de lyonnais qui a pour but de rassembler les utilisateurs web et JavaScript de la
          ville de Lyon et de ses alentours. Ainsi nous organisons des réunions d&apos;informations mensuelles ouvertes
          à tous·tes et gratuites afin de favoriser les échanges et les rencontres des utilisateurs/développeurs autour
          de cette technologie, de ses possibilités, de son avenir...
        </p>
        <p className="my-4">
          La première rencontre a eu lieu le 25 octobre 2011. Depuis cette date, les rencontres se sont faites sur une
          base (presque 😅) mensuelle.
        </p>
        <p className="my-4">
          Chaque mois nous nous retrouvons autour de conférences dont le thème porte sur les technologies web et
          JavaScript en particulier. Nous nous retrouvons ensuite autour d&apos;un buffet en vue d&apos;échanger nos
          impressions et de poursuivre la discussion.
        </p>
        <TitleHighlight Component="h2">Les orgas</TitleHighlight>
        <div className="grid md:grid-cols-5 grid-cols-2 gap-12 mb-4">
          {orgas.map((orga) => (
            <figure key={orga.name}>
              <Image src={orga.avatarUrl} alt={orga.name} width="200" height="200" title={orga.name} className="object-cover drop-shadow-md" />
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
                    href={`https://twitter.com/${orga.social.linkedin}`}
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
      </main>
    </>
  );
};

export default Home;

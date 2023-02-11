import type { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import { LyonJSHead } from '../modules/header/LyonJSHead';
import { Header } from '../modules/header/Header';
import { TitleHighlight } from '../modules/atoms/TitleHighlight';
import { orgas } from '../data/orgas';
import { Twitter } from '../modules/icons/Twitter';
import { Linkedin } from '../modules/icons/Linkedin';
import {Meetup} from "../modules/icons/Meetup";
import {Slack} from "../modules/icons/Slack";
import {Youtube} from "../modules/icons/Youtube";
import {Reddit} from "../modules/icons/Reddit";

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
          Le LyonJS est un groupe de lyonnais·es qui a pour but de rassembler les utilisateur·rice·s web et JavaScript de la ville de Lyon et de ses alentours.
          Ainsi, nous organisons des réunions d&apos;informations mensuelles ouvertes à tou·te·s et gratuites afin de favoriser les échanges et
          les rencontres des utilisateur·rice·s/développeur·euse·s autour de cette technologie, de ses possibilités, de son avenir.
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
        <p className="my-4">
          Ces évènements peuvent avoir lieu grâce aux sponsors de ce meetup qui nous soutiennent en nous donnant accès à
          leurs bureaux et financent généralement le buffet qui suit les conférences.
        </p>
        <p className="my-4">
          Nous organisons également de manière régulière des ApérosJS, qui n&apos;ont pour unique but que de rassembler la communauté dans un lieu lyonnais.
        </p>
        <TitleHighlight Component="h2">Les orgas</TitleHighlight>
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
        <TitleHighlight Component="h2">Qui peut rejoindre ?</TitleHighlight>
        <p className="my-4">
          LyonJS est ouvert <strong>à toutes et tous</strong>, que vous soyez débutant·e, en apprentissage, ou bien encore expert·e dans le domaine, vous êtes la·le bienvenu·e.
          Les évènements sont gratuits, sur inscriptions et parfois en places limitées.
        </p>
        <p className="my-4">
          Nous accueillons très régulièrement des étudiant·e·s lyonnais·es qui viennent rencontrer les « professionnels·le·s » de notre communauté.
          Si votre école souhaite venir ou participer, n&apos;hésitez pas à vous inscrire aux différents meetup.
        </p>
        <TitleHighlight Component="h2">Comment nous rejoindre ?</TitleHighlight>
        <p className="my-4">
          Vous avez plein de possibilités pour rejoindre la communauté:
        </p>
        <ul className="list-disc list-inside pl-4 my-4">
          <li><a href="https://www.meetup.com/fr-FR/LyonJS/">Vous inscrire sur notre groupe metup</a></li>
          <li>Vous inscrire en spectateur à un de nos prochains évènements</li>
          <li>Rejoindre la team organisatrice de la communauté en <a href="mailto:contact@lyonjs.org">vous signalant par mail</a></li>
          <li>Proposer un sujet de conférence dans notre <a href="https://bit.ly/lyonjs-cfp">Call for paper</a></li>
          <li>Parler de nos actions dans votre entreprise pour nous aider à trouver plus de Sponsors</li>
          <li>Convaincre vos collègues de venir participer à un de nos évènements</li>
          <li>En parler autour de vous !</li>
        </ul>
        <TitleHighlight Component="h2">Contact</TitleHighlight>
        <p className="my-4">
          Parce qu&apos;une communauté ne vit que par les discussions et les rencontres régulières de ses membres,
          participez à l&apos;organisation et à la vie de LyonJS sur les différents groupes de discussion et réseaux.
        </p>
        <ul className="grid md:grid-cols-5 grid-cols-2 gap-12 mb-4 mt-12">
          <li>
            <a
                href="https://www.meetup.com/fr-FR/LyonJS/"
                target="_blank"
                rel="noreferrer noopener"
                title="La page Meetup du LyonJS"
                className="flex gap-[1ch] text-lyonjs-yellow text-xl"
            >
              <Meetup color="currentColor" size={32} />
              Meetup
            </a>
          </li>
          <li>
            <a
                href="https://twitter.com/lyonjs"
                target="_blank"
                rel="noreferrer noopener"
                title="Compte Twitter du LyonJS"
                className="flex gap-[1ch] text-lyonjs-yellow text-xl"
            >
              <Twitter color="currentColor" size={32} />
              Twitter
            </a>
          </li>
          <li>
            <a
                href="https://bit.ly/lyonjs-slack"
                target="_blank"
                rel="noreferrer noopener"
                title="Rejoindre le Slack du LyonJS"
                className="flex gap-[1ch] text-lyonjs-yellow text-xl"
            >
              <Slack color="currentColor" size={32} />
              Slack
            </a>
          </li>
          <li>
            <a
                href="https://www.youtube.com/channel/UCGTVc5PnIgAUoA2D2_6nJLg"
                target="_blank"
                rel="noreferrer noopener"
                title="La chaîne Youtube du LyonJS"
                className="flex gap-[1ch] text-lyonjs-yellow text-xl"
            >
              <Youtube color="currentColor" size={32} />
              Youtube
            </a>
          </li>
          <li>
            <a
                href="https://www.reddit.com/r/LyonJS/"
                target="_blank"
                rel="noreferrer noopener"
                title="Groupe Reddit LyonJS"
                className="flex gap-[1ch] text-lyonjs-yellow text-xl"
            >
              <Reddit color="currentColor" size={32} />
              Reddit
            </a>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;

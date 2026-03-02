import { MailTemplate } from './types';
import { addIfDefined } from './utils';

export const speakerInvitationToTalk: MailTemplate = {
  subject: `Ça te dirait de parler à LyonJS ? 🎤`,
  body: ({ contactName }) => `Hello${addIfDefined(contactName)},

On organise régulièrement des meetups à Lyon autour de JavaScript et de l’écosystème Web, et on serait ravi·e·s de t’avoir parmi nos speaker·euse·s !

Si ça te tente, tu peux proposer un sujet via notre CFP ici :

👉 https://conference-hall.io/lyon-js-meetup

Les formats sont assez libres (retour d’expérience, deep dive technique, démo, etc.), et on peut bien sûr t’accompagner si c’est une première ou si tu veux échanger sur l’angle du talk 🙂

N’hésite pas si tu as des questions !

Au plaisir d’échanger,

L’équipe LyonJS

`,
};

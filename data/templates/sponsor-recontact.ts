import { MailTemplate } from './types';
import { addIfDefined, datesWithNoSponsor } from './utils';

export const sponsorRecontact: MailTemplate = {
  subject: `LyonJS – Prochain événement ?`,
  body: ({ contactName, dates }) => `Hello${addIfDefined(contactName, { pre: ' ' })},

Encore un grand merci pour votre soutien à LyonJS 💛 Sans vous, la communauté ne pourrait pas fonctionner comme aujourd’hui.

On commence à planifier les prochains événements et on voudrait savoir si vous seriez partants pour en accueillir un de nouveau.

Voici les dates envisagées :
${datesWithNoSponsor(dates)}


Dites-nous si l’une d’elles vous conviendrait, ce serait un plaisir de collaborer à nouveau 🙂

Merci encore pour votre confiance 🙌

L’équipe LyonJS


`,
};

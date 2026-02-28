import { MailTemplate } from './types';
import { addIfDefined, datesAfterToday } from './utils';

export const speakerAcceptedTalk: MailTemplate = {
  subject: ({ talkTitle }) => `LyonJS – 🎉 On programme ton talk${addIfDefined(talkTitle, { pre: ' [', post: ']' })}`,
  body: ({ contactName, dates }) => `Hello${addIfDefined(contactName, { pre: ' ' })},

Merci encore pour ta proposition 🙌

On a beaucoup aimé ton sujet et on serait très heureux de le programmer lors d’un prochain LyonJS 🎉

Parmi les dates suivantes, quelles sont celles où tu serais disponible ?
${datesAfterToday(dates)} 

On verra ensuite ensemble les détails logistiques et ce dont tu as besoin pour être à l’aise.

Hâte de t’accueillir sur scène 🚀

L’équipe LyonJS

`,
};

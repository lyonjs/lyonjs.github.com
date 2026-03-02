import { speakerAcceptedTalk } from './templates/speaker-accepted-talk';
import { type MailTemplate } from './templates/types';
import { speakerInvitationToTalk } from './templates/speaker-invitation-to-talk';
import { sponsorRecontact } from './templates/sponsor-recontact';

export const mailTemplates: Record<string, MailTemplate> = {
  speakerAcceptedTalk,
  speakerInvitationToTalk,
  sponsorRecontact,
};

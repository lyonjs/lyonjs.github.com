import { Schedule } from '../../modules/schedule/types';

export type MailTemplateParams = {
  talkTitle?: string;
  contactName?: string;
  dates: Array<Schedule>;
};

export type MailTemplate = {
  subject: string | ((params: MailTemplateParams) => string);
  body: string | ((params: MailTemplateParams) => string);
};

import { NextRequest, NextResponse } from 'next/server';
import { mailTemplates } from '../../../data/mail-templates';
import { schedule } from '../../../data/schedule';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const templateName = searchParams.get('template');
  const talkTitle = searchParams.get('talkTitle') ?? undefined;
  const contactName = searchParams.get('contactName') ?? undefined;

  const template = templateName ? mailTemplates[templateName] : undefined;

  if (!template) {
    return NextResponse.json({ error: `${templateName} not found` }, { status: 404 });
  }

  const subject =
    typeof template.subject === 'string'
      ? template.subject
      : template.subject({ talkTitle, contactName, dates: schedule });
  const body =
    typeof template.body === 'string' ? template.body : template.body({ talkTitle, contactName, dates: schedule });

  return NextResponse.json({
    subject,
    body,
  });
}

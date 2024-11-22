import { Article, H2 } from '../home/Home.components';
import React, { PropsWithChildren } from 'react';
import { ButtonLink } from '../atoms/button/Button';
import { Heading } from '../atoms/heading/Heading';

type Props = {
  title: string;
  link: {
    label: string;
    url: string;
  };
};
export const Announcement = ({ title, link, children }: PropsWithChildren<Props>) => {
  return (
    <Article>
      <div
        className="flex flex-col grow justify-center rounded-lg p-10 mt-10"
        style={{ backgroundColor: 'var(--background-card)' }}
      >
        <div className="-mt-32 mb-14">
          <Heading Component="h2" appearance="h1">
            {title}
          </Heading>
        </div>
        <div className="text-white">{children}</div>
        <div className="mt-14 flex justify-center -mb-16">
          <ButtonLink href={link.url}>
            {link.label} <span aria-hidden="true">&rarr;</span>
          </ButtonLink>
        </div>
      </div>
    </Article>
  );
};

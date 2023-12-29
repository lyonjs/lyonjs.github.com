import React from 'react';
import { YearNavigationPlaceholder } from '../../../modules/event/components/YearNavigationPlaceholder';
import { EventTilePlaceholder } from '../../../modules/event/components/EventTilePlaceholder';

export const Loader = () => {
  return (
    <>
      <YearNavigationPlaceholder />
      <ul data-testid="past-events-list">
        {Array.from(new Array(6)).map((_, key) => (
          <li key={key}>
            <EventTilePlaceholder />
          </li>
        ))}
      </ul>
    </>
  );
};

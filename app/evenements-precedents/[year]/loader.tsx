import React from 'react';
import { YearNavigationPlaceholder } from '../../../modules/event/components/YearNavigationPlaceholder';
import { EventTilePlaceholder } from '../../../modules/event/components/EventTilePlaceholder';

export const Loader = () => {
  return (
    <>
      <YearNavigationPlaceholder />
      <ul data-testid="past-events-list">
        {[1, 2, 3].map((key) => (
          <li key={key}>
            <EventTilePlaceholder />
          </li>
        ))}
      </ul>
    </>
  );
};

'use client';

import Cal from '@calcom/embed-react';
import { useVisibility } from 'hooks';
import { Suspense } from 'react';

const Calendar = () => {
  const { isVisible } = useVisibility();

  return (
    <Suspense>
      <div
        style={{
          visibility: isVisible ? 'visible' : 'hidden',
          opacity: isVisible ? '1' : '0',
        }}
        className="ml-60 flex justify-center"
      >
        <div className="popup">
          <span className="popup__close">&times;</span>
          <div className="popup__content">
            <Cal
              calOrigin="https://cal.glass.no"
              embedJsUrl="https://cal.glass.no/embed/embed.js"
              calLink="admin/befaring"
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Calendar;

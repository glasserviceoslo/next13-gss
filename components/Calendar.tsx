'use client';

import Cal from '@calcom/embed-react';

const Calendar = () => (
  <Cal
    calOrigin="https://cal.glass.no"
    embedJsUrl="https://cal.glass.no/embed/embed.js"
    calLink="admin/befaring"
    className="hidden"
  />
);

export default Calendar;

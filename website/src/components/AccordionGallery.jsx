import React from 'react';
import Preview from '@site/src/components/Preview';

const accordionClasses = [
  'accordion-primary-small',
  'accordion-primary-medium',
  'accordion-primary-large',
  'accordion-secondary-small',
  'accordion-secondary-medium',
  'accordion-secondary-large',
];

export default function AccordionGallery() {
  return (
    <Preview>
      {accordionClasses.map((name) => (
        <details key={name} className={name}>
          <summary>Title</summary>
          <div>
            <p>Hidden content</p>
          </div>
        </details>
      ))}
    </Preview>
  );
}

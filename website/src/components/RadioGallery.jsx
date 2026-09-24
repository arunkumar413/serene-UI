import React from 'react';
import Preview from '@site/src/components/Preview';

const radioClasses = [
  'ser-radio-primary-small',
  'ser-radio-primary-medium',
  'ser-radio-primary-large',
  'ser-radio-secondary-small',
  'ser-radio-secondary-medium',
  'ser-radio-secondary-large',
];

export default function RadioGallery() {
  return (
    <Preview>
      {radioClasses.map((name) => (
        <div key={name}>
          <label htmlFor={name}>Choice</label>
          <input defaultChecked id={name} type="radio" className={name} />
        </div>
      ))}
    </Preview>
  );
}

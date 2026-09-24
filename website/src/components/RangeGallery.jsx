import React from 'react';
import Preview from '@site/src/components/Preview';

const rangeClasses = [
  'ser-range-primary-small',
  'ser-range-primary-medium',
  'ser-range-primary-large',
  'ser-range-secondary-small',
  'ser-range-secondary-medium',
  'ser-range-secondary-large',
];

export default function RangeGallery() {
  return (
    <Preview>
      {rangeClasses.map((name) => (
        <div key={name}>
          <label htmlFor={name}>Range</label>
          <input
            style={{width: '100%'}}
            id={name}
            className={name}
            min={0}
            max={10}
            type="range"
          />
        </div>
      ))}
    </Preview>
  );
}

import React from 'react';
import Preview from '@site/src/components/Preview';

const textColors = [
  'ser-text-color-primary',
  'ser-text-color-secondary',
  'ser-text-color-success',
  'ser-text-color-warning',
  'ser-text-color-danger',
];

export default function ColorGallery() {
  return (
    <Preview>
      {textColors.map((name) => (
        <h3 key={name} className={name}>
          Heading
        </h3>
      ))}
    </Preview>
  );
}

import React from 'react';
import Preview from '@site/src/components/Preview';

const inputClasses = [
  'ser-input-primary-small-filled',
  'ser-input-primary-medium-filled',
  'ser-input-primary-large-filled',
  'ser-input-secondary-small-filled',
  'ser-input-secondary-medium-filled',
  'ser-input-secondary-large-filled',
  'ser-input-primary-small-outlined',
  'ser-input-primary-medium-outlined',
  'ser-input-primary-large-outlined',
  'ser-input-secondary-small-outlined',
  'ser-input-secondary-medium-outlined',
  'ser-input-secondary-large-outlined',
];

export default function InputGallery() {
  return (
    <Preview>
      {inputClasses.map((name) => (
        <input key={name} defaultValue="Text" className={name} type="text" />
      ))}
    </Preview>
  );
}

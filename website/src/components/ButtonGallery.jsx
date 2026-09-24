import React from 'react';
import Preview from '@site/src/components/Preview';

const btnClasses = [
  'ser-btn-primary-small',
  'ser-btn-primary-medium',
  'ser-btn-primary-large',
  'ser-btn-secondary-small',
  'ser-btn-secondary-medium',
  'ser-btn-secondary-large',
  'ser-btn-primary-small-outlined',
  'ser-btn-primary-medium-outlined',
  'ser-btn-primary-large-outlined',
  'ser-btn-secondary-small-outlined',
  'ser-btn-secondary-medium-outlined',
  'ser-btn-secondary-large-outlined',
  'ser-btn-danger-small',
  'ser-btn-danger-medium',
  'ser-btn-danger-large',
  'ser-btn-warning-small',
  'ser-btn-warning-medium',
  'ser-btn-warning-large',
  'ser-btn-success-small',
  'ser-btn-success-medium',
  'ser-btn-success-large',
  'ser-btn-disabled-small',
  'ser-btn-disabled-medium',
  'ser-btn-disabled-large',
  'ser-btn-error-small-outlined',
  'ser-btn-error-medium-outlined',
  'ser-btn-error-large-outlined',
  'ser-btn-warning-small-outlined',
  'ser-btn-warning-medium-outlined',
  'ser-btn-warning-large-outlined',
  'ser-btn-success-small-outlined',
  'ser-btn-success-medium-outlined',
  'ser-btn-success-large-outlined',
];

export default function ButtonGallery() {
  return (
    <Preview>
      {btnClasses.map((name) => (
        <button key={name} className={name} type="button">
          Button
        </button>
      ))}
    </Preview>
  );
}

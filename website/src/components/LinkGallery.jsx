import React from 'react';
import Preview from '@site/src/components/Preview';

const linkClasses = [
  'ser-link-primary',
  'ser-link-btn-primary-small',
  'ser-link-btn-primary-medium',
  'ser-link-btn-primary-large',
  'ser-link-secondary',
  'ser-link-btn-secondary-small',
  'ser-link-btn-secondary-medium',
  'ser-link-btn-secondary-large',
];

export default function LinkGallery() {
  return (
    <Preview columns={4}>
      {linkClasses.map((name) => (
        <a key={name} href="#links" className={name}>
          Link
        </a>
      ))}
    </Preview>
  );
}

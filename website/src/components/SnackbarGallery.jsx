import React from 'react';
import Preview from '@site/src/components/Preview';

const snackBarClasses = [
  'ser-snackbar-success',
  'ser-snackbar-warning',
  'ser-snackbar-danger',
];

export default function SnackbarGallery() {
  return (
    <Preview columns={3}>
      {snackBarClasses.map((name) => (
        <span key={name} className={name}>
          Message
        </span>
      ))}
    </Preview>
  );
}

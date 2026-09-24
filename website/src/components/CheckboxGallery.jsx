import React from 'react';
import Preview from '@site/src/components/Preview';

const checkboxClasses = [
  'ser-checkbox-primary-small',
  'ser-checkbox-primary-medium',
  'ser-checkbox-primary-large',
  'ser-checkbox-secondary-small',
  'ser-checkbox-secondary-medium',
  'ser-checkbox-secondary-large',
];

export default function CheckboxGallery() {
  return (
    <Preview>
      {checkboxClasses.map((name) => (
        <div key={name}>
          <label htmlFor={name}>Option</label>{' '}
          <input defaultChecked className={name} id={name} type="checkbox" />
        </div>
      ))}
    </Preview>
  );
}

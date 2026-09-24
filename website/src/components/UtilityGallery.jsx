import React from 'react';
import Preview from '@site/src/components/Preview';

const textClasses = [
  'ser-text-tiny',
  'ser-text-small',
  'ser-text-medium',
  'ser-text-large',
  'ser-text-xlarge',
];

const textClasses2 = [
  'ser-text-size-1',
  'ser-text-size-2',
  'ser-text-size-3',
  'ser-text-size-4',
  'ser-text-size-5',
];

const greyClasses = [
  'ser-color-grey-1',
  'ser-color-grey-2',
  'ser-color-grey-3',
  'ser-color-grey-4',
  'ser-color-grey-5',
];

const greyBackgroundClasses = [
  'ser-bg-grey-1',
  'ser-bg-grey-2',
  'ser-bg-grey-3',
  'ser-bg-grey-4',
  'ser-bg-grey-5',
];

const shadowClasses = [
  'ser-shadow-1',
  'ser-shadow-2',
  'ser-shadow-3',
  'ser-shadow-4',
  'ser-shadow-5',
];

const paddingClasses = [
  'ser-p-1',
  'ser-p-2',
  'ser-p-3',
  'ser-p-4',
  'ser-p-5',
  'ser-p-6',
  'ser-p-7',
  'ser-p-8',
  'ser-p-9',
  'ser-p-10',
];

const marginClasses = [
  'ser-m-1',
  'ser-m-2',
  'ser-m-3',
  'ser-m-4',
  'ser-m-5',
  'ser-m-6',
  'ser-m-7',
  'ser-m-8',
  'ser-m-9',
  'ser-m-10',
];

export default function UtilityGallery() {
  return (
    <Preview columns={1} style={{alignItems: 'stretch'}}>
      <p>
        Five levels of font sizes, grey colors, grey backgrounds, and shadows.
        Add more levels in your project if you need them.
      </p>

      <h3>Font sizes</h3>
      <div style={{display: 'flex', flexDirection: 'row', gap: '2rem'}}>
        <div>
          {textClasses.map((name) => (
            <p key={name} className={name}>
              Text
            </p>
          ))}
        </div>
        <div>
          {textClasses2.map((name) => (
            <p key={name} className={name}>
              Text
            </p>
          ))}
        </div>
      </div>

      <h3>Grey colors</h3>
      {greyClasses.map((name) => (
        <p className={`ser-text-large ${name}`} key={name}>
          Text
        </p>
      ))}

      <h3>Grey background colors</h3>
      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
        {greyBackgroundClasses.map((name) => (
          <div
            className={name}
            key={name}
            style={{width: 200, height: 100, textAlign: 'center'}}
          />
        ))}
      </div>

      <h3>Shadows</h3>
      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
        {shadowClasses.map((name) => (
          <div
            className={name}
            key={name}
            style={{width: 200, height: 100, textAlign: 'center'}}
          />
        ))}
      </div>

      <h3>Paddings</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        {paddingClasses.map((name) => (
          <span
            className={`${name} ser-shadow-1`}
            key={name}
            style={{marginLeft: '1rem'}}>
            Box
          </span>
        ))}
      </div>

      <h3>Margins</h3>
      <div>
        {marginClasses.map((name) => (
          <span className={`${name} ser-shadow-1`} key={name}>
            Box
          </span>
        ))}
      </div>
    </Preview>
  );
}

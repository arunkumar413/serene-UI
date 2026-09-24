import React from 'react';
import Preview from '@site/src/components/Preview';

export default function BorderRadiusGallery() {
  return (
    <Preview>
      <button className="ser-btn-primary-small ser-round" type="button">
        Round
      </button>
      <button className="ser-btn-primary-small ser-rounder" type="button">
        Rounder
      </button>
      <button className="ser-btn-primary-small ser-roundest" type="button">
        Roundest
      </button>
      <input
        className="ser-input-primary-small-outlined ser-round"
        defaultValue="Text"
      />
      <input
        className="ser-input-primary-medium-outlined ser-rounder"
        defaultValue="Text"
      />
      <input
        className="ser-input-secondary-medium-outlined ser-roundest"
        defaultValue="Text"
      />
    </Preview>
  );
}

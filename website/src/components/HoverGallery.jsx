import React from 'react';
import Preview from '@site/src/components/Preview';

export default function HoverGallery() {
  return (
    <Preview>
      <button
        className="ser-btn-primary-small-outlined ser-primary-hover"
        type="button">
        Hover
      </button>
      <button
        className="ser-btn-secondary-small-outlined ser-secondary-hover"
        type="button">
        Hover
      </button>
    </Preview>
  );
}

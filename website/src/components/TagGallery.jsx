import React from 'react';
import Preview from '@site/src/components/Preview';

export default function TagGallery() {
  return (
    <Preview>
      <button className="ser-tag-primary-filled" type="button">
        Tag
      </button>
      <button className="ser-tag-secondary-filled" type="button">
        Tag
      </button>
      <button className="ser-tag-primary-outlined" type="button">
        Tag
      </button>
      <button className="ser-tag-secondary-outlined" type="button">
        Tag
      </button>
    </Preview>
  );
}

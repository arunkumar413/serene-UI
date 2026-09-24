import React from 'react';
import Preview from '@site/src/components/Preview';

export default function ParagraphGallery() {
  return (
    <Preview columns={1}>
      <p>
        I wish to speak a word for Nature, for absolute freedom and wildness, as
        contrasted with a freedom and culture merely civil, — to regard man as an
        inhabitant, or a part and parcel of Nature, rather than a member of
        society.
        <br />
        <br />
        -<cite> walking</cite> by Henry David Thoreau
      </p>
    </Preview>
  );
}

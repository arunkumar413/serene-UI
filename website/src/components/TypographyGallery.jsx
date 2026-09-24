import React from 'react';
import Preview from '@site/src/components/Preview';

export default function TypographyGallery() {
  return (
    <Preview columns={1}>
      
      <span className='ser-h1-p3'> 3 steps up h1 </span>
      <span className='ser-h1-p2'> 2 steps up h1 </span>
      <span className='ser-h1-p1'> 1 step up h1</span>


      <h1 className='ser-h1'>Heading 1</h1>
      <h2 className='ser-h2'>Heading 2</h2>
      <h3 className='ser-h3'>Heading 3</h3>
      <h4 className='ser-h4'>Heading 4</h4>
      <h5 className='ser-h5'>Heading 5</h5>
      <h6 className='ser-h6'>Heading 6</h6>

      <p className='ser-paragraph'>
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

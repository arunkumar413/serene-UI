import React from 'react';
import './style.css';

export default function App() {
  return (
    <div
      style={{
        width: '50%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <button className="btn primary small"> btn primary small </button>
      <button className="btn primary medium"> btn primary medium </button>
      <button className="btn primary large"> btn primary large </button>
      <button className="btn secondary small"> btn secondary small </button>
      <button className="btn secondary medium"> btn secondary medium </button>
      <button className="btn secondary large"> btn secondary large </button>
      <button className="btn primary small outlined">
        {' '}
        btn primary small outlined
      </button>
      <button className="btn secondary small outlined">
        {' '}
        btn primary small outlined
      </button>
      <button className="btn large disabled"> disabled </button>
      <button className="btn small error"> Error </button>
      <button className="btn small warning"> Error </button>
      <button className="btn small success"> Error </button>
      <button className="btn small outlined error"> Error </button>
      <button className="btn small outlined warning"> Error </button>
      <button className="btn small outlined success"> Error </button>{' '}
      <button className="btn large outlined success"> Error </button>
    </div>
  );
}

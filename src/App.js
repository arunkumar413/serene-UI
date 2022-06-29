import React from 'react';
import './style.css';

export default function App() {
  function handleChange(evt) {
    console.log(evt);
  }

  return (
    <div>
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
        <button className="btn small warning"> Warning </button>
        <button className="btn small success"> Success </button>
        <button className="btn small outlined error"> Error </button>
        <button className="btn small outlined warning"> Warning </button>
        <button className="btn small outlined success"> Success</button>{' '}
        <button className="btn large outlined success"> Success </button>
      </div>
      <h3> Inputs </h3>
      <div
        style={{
          width: '60%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <input className="input small primary filled " type="text" />
        <input className="input medium primary filled " type="text" />
        <input className="input large primary filled " type="text" />

        <input className="input small primary outlined " type="text" />
        <input className="input medium primary outlined " type="text" />
        <input className="input large primary outlined " type="text" />

        <input className="input small secondary filled " type="text" />
        <input className="input medium secondary filled " type="text" />
        <input className="input large secondary filled " type="text" />

        <input className="input small secondary outlined " type="text" />
        <input className="input medium secondary outlined " type="text" />
        <input className="input large secondary outlined " type="text" />
      </div>
    </div>
  );
}

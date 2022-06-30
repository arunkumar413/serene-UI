import React, { useEffect } from 'react';
import './style.css';

export default function App() {
  function handleChange(evt) {
    console.log(evt);
  }

  useEffect(function () {
    document.querySelectorAll('button').forEach(function (item) {
      item.addEventListener('click', function (evt) {
        console.log(evt.target.className); //copy the className
      });
    });
  }, []);

  return (
    <div>
      <h3> Buttons </h3>
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
          btn primary small outlined
        </button>
        <button className="btn primary medium outlined">
          btn primary medium outlined
        </button>
        <button className="btn primary large outlined">
          btn primary large outlined
        </button>
        <button className="btn secondary small outlined">
          btn primary small outlined
        </button>
        <button className="btn secondary medium outlined">
          btn primary medium outlined
        </button>
        <button className="btn secondary large outlined">
          btn primary large outlined
        </button>
        <button className="btn small error"> btn small error </button>
        <button className="btn medium error"> btn medium error </button>
        <button className="btn large error"> btn large error</button>

        <button className="btn small warning"> btn small warning </button>
        <button className="btn medium warning"> btn medium warning </button>
        <button className="btn large warning"> btn large warning </button>
        <button className="btn small success"> btn small success </button>
        <button className="btn medium success"> btn medium success </button>
        <button className="btn large success"> btn large success </button>
        <button className="btn small disabled"> btn small disabled </button>
        <button className="btn medium disabled"> btn medium disabled </button>
        <button className="btn large disabled"> btn large disabled </button>

        {/* <button className="btn small outlined error"> Error </button>
        <button className="btn small outlined warning"> Warning </button>
        <button className="btn small outlined success"> Success</button>{' '}
        <button className="btn large outlined success"> Success </button> */}
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
        <input
          value={'inupt small primary filled'}
          className="input small primary filled "
          type="text"
        />
        <input
          value="input medium primary filled"
          className="input medium primary filled "
          type="text"
        />
        <input
          value="input large primary filled"
          className="input large primary filled "
          type="text"
        />

        <input
          value="input small primary outlined"
          className="input small primary outlined "
          type="text"
        />
        <input
          value="input medium primary outlined"
          className="input medium primary outlined "
          type="text"
        />
        <input
          value="input large primary outlined"
          className="input large primary outlined "
          type="text"
        />

        <input
          value="input small secondary filled"
          className="input small secondary filled "
          type="text"
        />
        <input
          value="input medium secondary filled"
          className="input medium secondary filled "
          type="text"
        />
        <input
          value="input large secondary filled"
          className="input large secondary filled "
          type="text"
        />

        <input
          value="input small secondary outlined"
          className="input small secondary outlined "
          type="text"
        />
        <input
          value="input medium secondary outlined"
          className="input medium secondary outlined "
          type="text"
        />
        <input
          value="input large secondary outlined"
          className="input large secondary outlined "
          type="text"
        />
      </div>
      <div className="headings">
        <h1> Heading 1 </h1>
        <h2> Heading 2 </h2>
        <h3> Heading 3 </h3>
        <h4> heading 4 </h4> <h5> Heading 5 </h5>
        <h6> Heading 6 </h6>
        <p>
          {' '}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

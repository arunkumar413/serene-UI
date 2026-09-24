import React from 'react';
import Preview from '@site/src/components/Preview';

const rows = [
  ['Alfreds Futterkiste', 'Maria Anders', 'Germany'],
  ['Centro comercial Moctezuma', 'Francisco Chang', 'Mexico'],
  ['Ernst Handel', 'Roland Mendel', 'Austria'],
  ['Island Trading', 'Helen Bennett', 'UK'],
  ['Laughing Bacchus Winecellars', 'Yoshi Tannamuri', 'Canada'],
  ['Magazzini Alimentari Riuniti', 'Giovanni Rovelli', 'Italy'],
];

function SampleTable({headingClass}) {
  return (
    <table style={{width: '100%'}}>
      <thead>
        <tr className={headingClass}>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row[0]}>
            {row.map((cell) => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function TableGallery() {
  return (
    <Preview columns={1}>
      <h4>Primary table</h4>
      <SampleTable headingClass="ser-table-heading-row-primary" />
      <h4>Secondary table</h4>
      <SampleTable headingClass="ser-table-heading-row-secondary" />
    </Preview>
  );
}

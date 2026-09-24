import React from 'react';
import styles from './Preview.module.css';

export default function Preview({children, columns = 3, style}) {
  return (
    <div
      className={styles.preview}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        ...style,
      }}>
      {children}
    </div>
  );
}

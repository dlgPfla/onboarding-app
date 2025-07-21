// components/NumericKeypad.tsx
import React from 'react';
import styles from './NumericKeypad.module.css';

interface Props {
  onNumberClick: (value: string) => void;
  onDelete: () => void;
}

const KEYS = [
  { value: '1', label: '.' },
  { value: '2', label: 'ABC' },
  { value: '3', label: 'DEF' },
  { value: '4', label: 'GHI' },
  { value: '5', label: 'JKL' },
  { value: '6', label: 'MNO' },
  { value: '7', label: 'PQRS' },
  { value: '8', label: 'TUV' },
  { value: '9', label: 'WXYZ' },
  { value: '0', label: '', isZero: true },
];

const NumericKeypad = ({ onNumberClick, onDelete }: Props) => {
  return (
    <div className={styles.keypadWrapper}>
      <div className={styles.keypadGrid}>
        {KEYS.map(({ value, label, isZero }) => (
          <button
            key={value}
            className={`${styles.keypadButton} ${isZero ? styles.zeroButton : ''}`}
            onClick={() => onNumberClick(value)}
          >
            <div className={styles.number}>{value}</div>
            {label && <div className={styles.label}>{label}</div>}
          </button>
        ))}
        <button className={styles.keypadButton} onClick={onDelete}>
          <img src="/Button.svg" alt="delete" className={styles.deleteIcon} />
        </button>
      </div>
    </div>
  );
};

export default NumericKeypad;

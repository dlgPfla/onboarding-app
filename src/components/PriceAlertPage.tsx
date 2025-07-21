import styles from './PriceAlertPage.module.css';
import { useState } from 'react';
import NumericKeypad from './NumericKeypad';

interface PriceAlertPageProps {
  onClose: () => void;
  productId: number | null;
}

function PriceAlertPage({ onClose, productId }: PriceAlertPageProps) {
  const [inputValue, setInputValue] = useState('');

  const formatWithComma = (value: string) => {
    const number = value.replace(/[^0-9]/g, '');
    return Number(number).toLocaleString();
  };

  const handleNumberClick = (value: string) => {
    const updated = inputValue + value;
    setInputValue(updated);
  };

  const handleDelete = () => {
    const updated = inputValue.slice(0, -1);
    setInputValue(updated);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <div className={styles.box}>
          <h2 className={styles.title}>원하는 가격 알림 설정</h2>

          {/* ✅ 현재 가격 입력 영역 */}
          <div className={styles.priceBox}>
            <span className={styles.priceDisplay}>
              {inputValue ? `${formatWithComma(inputValue)}원` : '현재 가격 : 30,900원'}
            </span>
          </div>

          <p className={styles.description}>
            원하는 가격이 되면 알림을 보내드려요!<br />
            <span className={styles.subtext}>
              (광고성 수신 미동의 시 할인 알림 등록 불가)
            </span>
          </p>

          <div className={styles.buttonWrapper}>
            <button className={styles.submitBtn}>알림 등록하기</button>
          </div>
        </div>

        {/* ✅ 키패드 영역 */}
        <div className={styles.keypad}>
          <NumericKeypad
            onNumberClick={handleNumberClick}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default PriceAlertPage;

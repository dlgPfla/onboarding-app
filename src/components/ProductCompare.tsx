import React from 'react';
import styles from './ProductCompare.module.css'; // CSS 모듈 사용

const ProductCompare = () => {
  return (
    <div className={styles.compareContainer}>
      <h3 className={styles.title}>최저가 추이</h3>
<div className={styles.tabWrapper}>
  <div className={styles.tabList}>
    <span className={`${styles.tab} ${styles.selected}`}>1개월</span>
    <span className={styles.tab}>3개월</span>
    <span className={styles.tab}>6개월</span>
    <span className={styles.tab}>12개월</span>
  </div>
</div>
      <div className={styles.graphWrapper}>
        <img src="/price-graph.svg" alt="최저가 추이 그래프" className={styles.graphImage} />
      </div>


<div className={styles.priceBox}>
  <div className={styles.priceRow}>
    <img src="/Polygon 1.svg" alt="상승" className={styles.icon} />
    <span className={styles.label}>역대 최고가</span>
    <span className={styles.highPrice}>94,000원</span>
  </div>
  <div className={styles.priceRow}>
    <span className={styles.dash}>-</span>
    <span className={styles.label}>평균가</span>
    <span className={styles.averagePrice}>79,900원</span>
  </div>
  <div className={styles.priceRow}>
    <img src="/Polygon 2.svg" alt="하락" className={styles.icon} />
    <span className={styles.label}>역대 최저가</span>
    <span className={styles.lowPrice}>62,800원</span>
  </div>
</div>

<div className={styles.alertBox}>
  <span className={styles.alertText}>세일 기간에 알려드릴게요!</span>
  <button className={styles.alertButton}>알림받기</button>
</div>

<div className={styles.sellerSection}>
  <h3 className={styles.sellerTitle}>판매처</h3>
  <p className={styles.sellerSubtitle}>최저가순</p>

  {/* 판매처 박스 */}
  <div className={styles.sellerCard}>
    <div className={styles.leftInfo}>
      <img src="/kidi.png" alt="키디키디" className={styles.logo} />
      <span className={styles.brand}>키디키디</span>
      <img src="/link.svg" alt="링크" className={styles.linkIcon} />
    </div>
    <div className={styles.rightInfo}>
      <div className={styles.priceRed}>최저 62,800원</div>
      <div className={styles.delivery}>무료 배송</div>
    </div>
  </div>

  <div className={styles.sellerCard}>
    <div className={styles.leftInfo}>
      <img src="/munu.jpg" alt="무누" className={styles.logo} />
      <span className={styles.brand}>무누</span>
      <img src="/link.svg" alt="링크" className={styles.linkIcon} />
    </div>
    <div className={styles.rightInfo}>
      <div className={styles.price}>63,600원</div>
      <div className={styles.delivery}>무료 배송</div>
    </div>
  </div>

  <div className={styles.sellerCard}>
    <div className={styles.leftInfo}>
      <img src="/eland.png" alt="이랜드몰" className={styles.logo} />
      <span className={styles.brand}>이랜드몰</span>
      <img src="/link.svg" alt="링크" className={styles.linkIcon} />
    </div>
    <div className={styles.rightInfo}>
      <div className={styles.price}>65,000원</div>
      <div className={styles.delivery}>무료 배송</div>
    </div>
  </div>
</div>


    </div>



  );
};

export default ProductCompare;

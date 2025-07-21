import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding17.module.css';
import { useUserStore } from '../../stores/useUserStore';
import { useState } from 'react';
function Onboarding17() {
  const navigate = useNavigate();
  const store = useUserStore();
  const [isAlertActive, setIsAlertActive] = useState(false);
const alertItems = [
  {
    id: 1,
    brand: '쿠키',
    name: '어린이 학교 책상 / 유아 테이블',
    price: '251,100원',
    discount: '▼ 20%',
    image: '/img1.png',
  },
  {
    id: 2,
    brand: '스디',
    name: '초등학생 공부용 높이각도 조절 의자',
    price: '92,400원',
    discount: '▼ 40%',
    image: '/img2.png',
  },
  {
    id: 3,
    brand: '시코',
    name: '높이조절가능 학생 의자 세트',
    price: '221,000원',
    discount: '▼ 10%',
    image: '/img3.png',
  },
  {
    id: 4,
    brand: '송드',
    name: '교실용 책상 의자 세트',
    price: '171,000원',
    discount: '▼ 46%',
    image: '/img4.png',
  },
];

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollArea}>
        <div className={styles.container}>
          {/* 상단 바 */}
          <div className={styles.topBar}>
            <img
              src="/ep_arrow-left-bold (2).svg"
              alt="뒤로가기"
              className={styles.backIcon}
              onClick={() => navigate(-1)}
            />
            <h2 className={styles.title}>할인 알림</h2>
            <div className={styles.rightIcons}>
              <img src="/meteor-icons_search.svg" alt="검색" className={styles.icon} />
              <img src="/wish button.svg" alt="찜" className={styles.icon} />
            </div>
          </div>

          {/* 탭 영역 */}
          <div className={styles.tabWrapper}>
            <button className={`${styles.tab} ${styles.active}`}>할인 알림 관리</button>
            <button className={styles.tab}>재입고 알림 관리</button>
          </div>

          {/* 알림 카드 리스트 */}
          <div className={styles.cardGrid}>
  {alertItems.map((item) => (
    <div className={styles.card} key={item.id}>
      <img src={item.image} alt="썸네일" className={styles.thumb} />
      <div className={styles.cardContent}>
        <div className={styles.brand}>{item.brand}</div>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.priceRow}>
          <span className={styles.price}>{item.price}</span>
          <span className={styles.discount}>{item.discount}</span>
        </div>
 
        <div className={styles.alertButtons}>
          <button className={styles.blackBtn}>평균가 이하 알림</button>
          <button className={styles.grayBtn}>원하는 가격 알림</button>
        </div>
      </div>
      <img src="/alert-icon.svg" className={styles.alertIcon} alt="알림 아이콘" />
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding17;

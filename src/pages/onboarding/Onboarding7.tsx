// Onboarding7.tsx
import { useNavigate } from 'react-router-dom'; 
import styles from '../../styles/onboarding/Onboarding17.module.css';
import { useUserStore } from '../../stores/useUserStore';
import { useState } from 'react';

function Onboarding7() {
  const navigate = useNavigate();
  const store = useUserStore();

  const [selectedButtons, setSelectedButtons] = useState<{
    [key: number]: { restock: boolean };
  }>({});

  const toggleButton = (id: number, type: 'restock') => {
    setSelectedButtons((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: !prev[id]?.[type],
      },
    }));
  };

  const alertItems = [
    { id: 1, brand: '쿠키', name: '어린이 학교 책상 / 유아 테이블', price: '251,100원', discount: '▼ 20%', image: '/image.png' },
    { id: 2, brand: '스디', name: '초등학생 공부용 높이각도 조절 의자', price: '92,400원', discount: '▼ 40%', image: '/Rectangle 81 (8).svg' },
    { id: 3, brand: '시코', name: '높이조절가능 학생 의자 세트', price: '221,000원', discount: '▼ 10%', image: '/Rectangle 81 (9).svg' },
    { id: 4, brand: '송드', name: '교실용 책상 의자 세트', price: '171,000원', discount: '▼ 46%', image: '/Rectangle 81 (10).svg' },
    { id: 5, brand: '한샘', name: '어린이 책상 + 의자 세트', price: '124,800원', discount: '▼ 30%', image: '/Rectangle 81 (11).svg' },
    { id: 6, brand: '모수', name: '초등학생 놀이 책상', price: '74,800원', discount: '▼ 23%', image: '/Rectangle 81 (12).svg' },
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
            <h2 className={styles.title}>재입고 알림</h2>
            <div className={styles.rightIcons}>
              <img src="/meteor-icons_search.svg" alt="검색" className={styles.icon} />
              <img src="/wish button.svg" alt="찜" className={styles.icon} />
            </div>
          </div>

          {/* 탭 영역 */}
          <div className={styles.tabWrapper}>
            <button
              className={styles.tab}
              onClick={() => navigate('/onboarding/17')}
            >
              할인 알림 관리
            </button>
            <button className={`${styles.tab} ${styles.active}`}>재입고 알림 관리</button>
          </div>

          {/* 최신순 + 종 단독 아이콘 */}
          <div className={styles.sortRow}>
            <span className={styles.sortLabel}>최신순</span>
            <img src="/Subtract.svg" alt="아래" className={styles.smallBellIcon} />
          </div>

          {/* 알림 카드 리스트 */}
          <div className={styles.cardGrid}>
            {alertItems.map((item) => (
              <div className={styles.card} key={item.id}>
                <img src={item.image} alt="썸네일" className={styles.thumb} />
                <div className={styles.cardBellWrapper}>
                  <img src="/Ellipse 18.svg" alt="배경 원" className={styles.cardBellBg} />
                  <img src="/alert-icon.svg" alt="종 아이콘" className={styles.cardBellIcon} />
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.brand}>{item.brand}</div>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.priceRow}>
                    <span className={styles.price}>{item.price}</span>
                    <span className={styles.discount}>{item.discount}</span>
                  </div>
                  <div className={styles.alertButtons}>
                    <button
                      className={selectedButtons[item.id]?.restock ? styles.yellowBtn : styles.grayBtn}
                      onClick={() => toggleButton(item.id, 'restock')}
                    >
                      재입고 알림
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding7;

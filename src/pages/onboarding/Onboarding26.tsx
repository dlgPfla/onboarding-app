import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding26.module.css';

function Onboarding26() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {/* ✅ 고정된 상단바 */}
      <div className={styles.topBar}>
        <img
          src="/ep_arrow-left-bold (2).svg"
          alt="뒤로가기"
          className={styles.backIcon}
          onClick={() => navigate(-1)}
        />
        <h2 className={styles.title}>기저귀</h2>
        <div className={styles.rightIcons}>
          <img src="/meteor-icons_search.svg" alt="검색" className={styles.icon} />
          <img src="/wish button.svg" alt="찜" className={styles.icon} />
        </div>
      </div>

      {/* ✅ 스크롤 영역 */}
      <div className={styles.scrollArea}>
        <div className={styles.container}>
          {/* 상단 이미지 */}
          <img
            src="/Frame 427319187.svg"
            alt="기저귀 상단 이미지"
            className={styles.topImage}
          />

          {/* 추가 이미지 */}
    
        </div>
      </div>
    </div>
  );
}

export default Onboarding26;

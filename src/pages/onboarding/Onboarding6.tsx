import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding6.module.css';

function Onboarding20() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const environments = [
    { label: '기저귀/배변용품', icon: '/e6c22a4d1e7f64caf437050988ec71411be6d4a2.png' },
{ label: '젖병/수유', icon: '/b97798e22532ef3c7724528b88f62433c0b148a4.png' },
{ label: '이유식/간식', icon: '/9e248512d6adef48fa9a2c6efa8ff4e86a53b722.png' },
{ label: '스킨케어/목욕', icon: '/Lotion Bottle Streamline Twemoji Emoji.svg' },
{ label: '놀이/발달', icon: '/2fb178267fbe19c6fddee8cccc33754658ac6307.png' },
{ label: '유모차/카시트', icon: '/Sport Utility Vehicle Streamline Twemoji Emoji.svg' },
{ label: '가구/침구', icon: '/72a15f9ab5f9eed439ddc07206e91b9b1553d873.png' },
{ label: '도서/학습', icon: '/8b5c353ecdb5b6d84744d77ccc3e07ed107936ea.png' },
{ label: '외출소품', icon: '/9d996196cfcbb09af2c00a9d07cf0f232c678b0a.png' },
{ label: '전자/소형가전', icon: '/777c553e1039cc831c0f40f3f46d9ecb213e62ac.png' },
{ label: '세탁/위생', icon: '/bbde56bb0e32e2373127faa37b163e5d5ffa0e25.png' },
{ label: '안전용품', icon: '/a4da9b265aa39417aee271f5a1c52132e6d33fe3.png' },
{ label: '생활/정리용품', icon: '/4684bf6e83e456d9a15aa84e1a20577b8627fe4e.png' },
{ label: '임부용품', icon: '/055aa8deb388a0704250cbb6ffc8a82c2f3ee0bb.png' },

  ];
  

  return (
    <div className={styles.container}>
      {/* 상단 헤더 */}
      <div className={styles.header}>
        <svg
          className={styles.backIcon}
          onClick={() => navigate(-1)}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className={styles.titleText}>회원가입</span>
      </div>

      {/* 스크롤 가능한 콘텐츠 영역 */}
      <div className={styles.scrollArea}>
        <h1 className={styles.title}>
          관심 있는,<br />카테고리를 골라주세요!
        </h1>

        
      <div className={styles.grid}>
        {environments.map((env, index) => (
          <button
            key={`${env.label}-${index}`}
            className={`${styles.card} ${selected === env.label ? styles.selected : ''}`}
            onClick={() => setSelected(env.label)}
            >
              <img src={env.icon} alt={env.label} className={styles.icon} />
              <span>{env.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <div className={styles.fixedBottom}>
        <button
          className={`${styles.nextBtn} ${selected ? styles.active : ''}`}
          onClick={() => navigate('/onboarding/8')}
        >
          {selected ? '다음 단계' : '건너뛰기'}
        </button>
      </div>
    </div>
  );
}

export default Onboarding20;

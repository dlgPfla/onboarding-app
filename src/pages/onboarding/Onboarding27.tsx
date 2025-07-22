import React, { useState } from 'react'; 
import { useUserStore } from '../../stores/useUserStore';
import styles from '../../styles/onboarding/Onboarding27.module.css';
import { useNavigate } from 'react-router-dom';

function Onboarding27() {
  const name = useUserStore((state) => state.name);
  const profileImage = useUserStore((state) => state.profileImage);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('예산 계산기');
  const tabs = ['홈', '예산 계산기', '이벤트', '랭킹'];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === '홈') {
      navigate('/onboarding/12');
    } else if (tab === '예산 계산기') {
      navigate('/onboarding/34');
    }
    // 필요하다면 이벤트, 랭킹도 조건 추가 가능
  };

  return (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.profileHeader}>
        <img
          src={profileImage || '/profile.png'}
          alt="프로필"
          className={styles.profileImage}
        />
        <span className={styles.profileName}>6개월차 민하</span> {/* ✅ 수정 */}
        <div className={styles.iconGroup}>
          <img src="/meteor-icons_search.svg" alt="검색" />
          <img src="/wish button.svg" alt="찜" />
        </div>
      </div>

        <div className={styles.tabMenu}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ✅ 첫 번째 키트 조합 이미지 */}
        <img
          src="/Frame 427319016 (3).svg"
          alt="키트 조합 1"
          className={styles.kitImage}
        />

        {/* ✅ 회색 구분선 */}
        <div className={styles.divider}></div>

        {/* ✅ 두 번째 키트 조합 이미지 */}
        <img
          src="/Frame 427319042.svg"
          alt="키트 조합 2"
          className={styles.kitImage}
        />
      </div>
    </div>
  );
}

export default Onboarding27;

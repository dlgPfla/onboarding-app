import { useNavigate } from 'react-router-dom'; 
import styles from '../../styles/onboarding/Onboarding24.module.css';

function Onboarding24() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {/* ✅ 스크롤 가능한 영역을 따로 둠 */}
      <div className={styles.scrollArea}>
        {/* 상단 바 */}
        <div className={styles.topBar}>
          <img
            src="/ep_arrow-left-bold (2).svg"
            alt="뒤로가기"
            className={styles.backIcon}
            onClick={() => navigate(-1)}
          />
          <h2 className={styles.title}>카테고리</h2>
          <div className={styles.rightIcons}>
            <img
              src="/meteor-icons_search.svg"
              alt="검색"
              className={styles.icon}
            />
            <img
              src="/wish button.svg"
              alt="찜"
              className={styles.icon}
            />
          </div>
        </div>

        {/* 콘텐츠 */}
<div className={styles.container}>
  <div className={styles.imageWrapper}>
    <img
      src="/Frame 427319186.svg"
      alt="카테고리 하단 이미지"
      className={styles.bottomImage}
    />
    {/* ✅ 겹쳐진 버튼 */}
    <button
      className={styles.floatingBtn}
      onClick={() => navigate('/onboarding/26')}
    >
      →
    </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Onboarding24;

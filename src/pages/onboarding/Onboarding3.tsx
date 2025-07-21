import { useState } from 'react';  
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding3.module.css';
import ProductSummary from '../../components/ProductSummary';
import ProductCompare from '../../components/ProductCompare';
import ProductReview from '../../components/ProductReview';

function Onboarding3() {
const navigate = useNavigate();
const [activeTab, setActiveTab] = useState<'summary' | 'compare' | 'review'>('summary');
  return (
    <div className={styles.wrapper}>
      {/* ✅ 상단 고정바 */}
      <div className={styles.topBar}>
        <img
  src="/ep_arrow-left-bold (3).svg"
  alt="뒤로가기"
  className={styles.icon}
  onClick={() => navigate('/onboarding/12')}
/>
        <div className={styles.rightIcons}>
          <img src="/iconamoon_search-bold.svg" alt="검색" className={styles.icon} />
          <img src="/tabler_home-filled.svg" alt="홈" className={styles.icon} />
          <img src="/solar_heart-bold.svg" alt="찜" className={styles.icon} />
        </div>
      </div>

      {/* ✅ 스크롤 가능한 콘텐츠 영역 */}
<div className={styles.scrollArea}>
  {/* 대표 이미지 */}
  <img src="/57860ef544c6363de1580e4658ae907f3cd2dcde.jpg" className={styles.mainImage} />

  {/* 브랜드 */}
  <div className={styles.brandRow}>
    <img src="/finfin_logo.svg" className={styles.brandLogo} />
    <span className={styles.brandName}>핀핀</span>
  </div>

  {/* 상품 정보 */}
{/* 상품 정보 영역 */}
<div className={styles.productInfo}>
  {/* 상품명 + 공유 아이콘 */}
  <div className={styles.nameRow}>
    <div className={styles.productName}>키즈 책상 + 의자 세트</div>
    <img src="/Group 126.svg" alt="공유" className={styles.shareIcon} />
  </div>

  {/* 가격 위 태그 뱃지들 */}
<div className={styles.badgeRow}>
  <span className={styles.badgeRed}>
    <img src="/Group 126 (1).svg" alt="최저가 아이콘" className={styles.badgeIcon} />
    역대 최저가
  </span>
  <span className={styles.badgeBrown}>
    <img src="/Vector (4).svg" alt="불 아이콘" className={styles.badgeIcon} />
    브랜드 세일
  </span>
</div>

  {/* 가격 줄 */}
<div className={styles.priceRatingRow}>
  <div className={styles.priceRow}>
    <span className={styles.originalPrice}>79,900원</span>
    <span className={styles.finalPrice}>62,800원</span>
    <span className={styles.discount}>▼21%</span>
  </div>
  <div className={styles.rating}>
    <img src="/star-icon.svg" className={styles.starIcon} />
    <span>4.2 <span className={styles.reviewCount}>(후기 358개)</span></span>
  </div>
</div>
</div>
  {/* ✅ 탭 바 */}
  <div className={styles.tabBar}>
    <div className={`${styles.tab} ${activeTab === 'summary' ? styles.active : ''}`} onClick={() => setActiveTab('summary')}>상품 요약</div>
    <div className={`${styles.tab} ${activeTab === 'compare' ? styles.active : ''}`} onClick={() => setActiveTab('compare')}>콕콕 비교</div>
    <div className={`${styles.tab} ${activeTab === 'review' ? styles.active : ''}`} onClick={() => setActiveTab('review')}>후기</div>
    <div
      className={styles.cursor}
      style={{
        left: activeTab === 'summary' ? '0%' : activeTab === 'compare' ? '33.33%' : '66.66%',
      }}
    />
  </div>

  {/* ✅ 탭별 콘텐츠 */}
  <div className={styles.tabContent}>
    {activeTab === 'summary' && <ProductSummary />}
    {activeTab === 'compare' && <ProductCompare />}
    {activeTab === 'review' && <ProductReview />}
  </div>
</div>

      

      {/* ✅ 하단 고정 버튼바 */}
      <div className={styles.bottomBar}>
        <div className={styles.iconButton}>
          <img src="/stash_heart-light.svg" alt="하트" className={styles.heartIcon} />
          <span>2,628</span>
        </div>
        <button className={styles.alertButton}>할인 알림 등록</button>
        <button className={styles.buyButton}>최저가 구매하기</button>
      </div>
    </div>
  );
}

export default Onboarding3;

import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding13.module.css';
import { useUserStore } from '../../stores/useUserStore';

function Onboarding13() {
  const navigate = useNavigate();
  const store = useUserStore();

  return (
    <div className={styles.wrapper}>
      {/* 스크롤 가능한 콘텐츠 영역 */}
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
            <div></div>
            <div className={styles.rightIcons}>
              <img src="/meteor-icons_search.svg" alt="검색" className={styles.icon} />
              <img src="/wish button.svg" alt="찜" className={styles.icon} />
            </div>
          </div>

          {/* 프로필 섹션 */}
          <div className={styles.profileSection}>
  <div className={styles.profileImg} />
  <div className={styles.profileRow}>
    <div className={styles.profileName}>6개월 민하 엄마</div>
    <button className={styles.editBtn}>프로필 편집</button>
  </div>
</div>

{/* 추천 박스 */}
<div className={styles.recommendBox}>
  <div className={styles.recommendTitle}>민하를 위한 추천 유모차 둘러보기</div>
  <p className={styles.recommendDesc}>
    유모차를 살 때가 된 민하를 위해 인기있는 유모차를 정리해봤어요
  </p>
</div>

{/* 쇼핑 정보 */}
<div className={styles.sectionBox}>
  <h3 className={styles.sectionTitle}>나의 쇼핑 정보</h3>
  <ul className={styles.sectionList}>
    <li>최근 본 상품</li>
    <li>최근 렌즈 검색한 상품</li>
    <li>좋아요 등록한 상품</li>
    <li>구매한 상품 리뷰 등록하기</li>
  </ul>
</div>

{/* 계정 정보 */}
<div className={styles.sectionBox}>
  <h3 className={styles.sectionTitle}>나의 계정정보</h3>
  <ul className={styles.sectionList}>
    <li>회원 정보 수정</li>
    <li>우리 아이 정보 수정</li>
    <li>설정</li>
  </ul>
</div>

{/* 고객센터 */}
<div className={styles.sectionBox}>
  <h3 className={styles.sectionTitle}>고객센터</h3>
  <ul className={styles.sectionList}>
    <li>1:1 문의</li>
    <li>상품 Q&A 내역</li>
    <li>공지사항</li>
  </ul>
</div>


          <p className={styles.centerDesc}>
            하단의 1:1 문의, 고객센터 전화하기를 통해서 상담이 가능합니다.
          </p>
          <p className={styles.centerTime}>
            고객센터 운영시간: 평일 10:00~18:00 <br />
            (점심시간: 12:00~13:00 제외)
          </p>

          {/* 버튼들 */}
          <div className={styles.bottomButtons}>
            <button className={styles.yellowBtn}>1:1 문의</button>
            <button className={styles.yellowBtn}>고객센터 전화하기</button>
          </div>
          <button className={styles.logoutBtn}>로그아웃</button>

          {/* ✅ 하단 바 (container 안쪽) */}

          </div>
        </div>
      </div>

  );
}

export default Onboarding13;

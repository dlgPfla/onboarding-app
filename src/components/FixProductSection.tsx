// components/FixProductSection.tsx
import styles from './FixProductSection.module.css';

interface Props {
  show: boolean;
  onClose: () => void;
}

export default function FixProductSection({ show, onClose }: Props) {
  return (
    <div className={`${styles.fixTab} ${show ? styles.open : ''}`}>
      {/* 닫기 버튼 */}
      <button className={styles.closeBtn} onClick={onClose}>
        ✕
      </button>

      {/* 안내 박스 */}
      <div className={styles.yellowNotice}>
        <h3>상품 고정하기</h3>
        <p>
          꼭 포함하고 싶은 상품이 있다면 고정해보세요.<br />
          해당 상품은 추천 구성에 반드시 포함돼요.
        </p>
      </div>

      {/* 흰 배경 영역 */}
      <div className={styles.fullWhiteBackground}>
        <img
          className={styles.emptyImage}
          src="/Frame 427318924.svg"
          alt="검색 돋보기 일러스트"
        />

        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="품목 검색"
          />
          <img
            src="/basil_search-outline.svg"
            alt="검색 아이콘"
            className={styles.searchIcon}
          />
        </div>

        <img
          src="/Frame 427319143 (2).svg"
          alt="아기 검색 일러스트"
          className={styles.emptyImageBottom}
        />

        <div className={styles.emptyText}>원하시는 상품을 검색해보세요</div>
      </div>
    </div>
  );
}

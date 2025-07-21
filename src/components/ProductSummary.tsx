import styles from './ProductSummary.module.css';

function ProductSummary() {
  return (
    <div className={styles.summarySection}>
      {/* ✅ 추천 박스 */}
      <div className={styles.recommendWrapper}>
        <div className={styles.recommendTitle}>이런 아이에게 추천해요!</div>
        <div className={styles.recommendBox}>
          <img src="/twemoji_baby.svg" alt="아기 아이콘" className={styles.recommendIcon} />
          피부가 예민하고, 한글을 배우기 시작한 3세 이상 어린이
        </div>
      </div>

      {/* ✅ AI 키워드 요약 */}
      <div className={styles.keywordSection}>
        <div className={styles.keywordHeader}>
          <h4>AI 키워드 요약</h4>
          <span className={styles.keywordSource}>🛈 코코 data</span>
        </div>

        <div className={styles.tagWrapper}>
          <img src="/Frame 427319139.svg" alt="AI 태그 장식" className={styles.tagOverlay} />
          <div className={styles.tags}>
            <span className={styles.tagGreen}># 48개월 추천</span>
            <span className={styles.tagGreen}># KC 인증</span>
            <span className={styles.tagGreen}># 멀티 기능</span>
            <span className={styles.tagRed}># 직접 조립</span>
            <span className={styles.tagRed}># 느린 배송</span>
          </div>
        </div>
      </div>

      {/* Q&A 요약 */}
          <div className={styles.keywordSection}>
        <div className={styles.keywordHeader}>
          <h4>Q&A 요약</h4>
          <span className={styles.keywordSource}>🛈 코코 data</span>
        </div>

<div className={styles.qna}>
  <div className={styles.questionColumn}>
    <div className={styles.qBubble}>배송은 언제 보내주시나요?</div>
    <div className={styles.qBubble}>물에 젖으면 변형이 일어나나요?</div>
    <div className={styles.qBubble}>따로따로 구매는 불가능한가요?</div>
  </div>
  
  <div className={styles.answerColumn}>
    <div className={styles.aBubble}>주문 후 영업일 기준 1일 내에 출고됩니다.</div>
    <div className={styles.aBubble}>생활 방수는 되지만,<br/>장시간 노출 시 변형 우려가 있습니다.</div>
    <div className={styles.aBubble}>불가능합니다.</div>
  </div>
</div>
</div>



<div className={styles.reviewSummary}>
  <h4>리뷰 요약</h4>
  <div className={styles.reviewBox}>
    <div className={styles.reviewSubTitle}>
      <span className={styles.infoIcon}>🛈</span> 코코 요약
    </div>
    <p className={styles.reviewText}>
      테이블과 의자 <strong>높이 조절이 가능</strong>해서 아이들 놀이할 때도 사용할 수 있고, <br/> 공부할 때도 사용할 수 있어서 좋아요.<br/>
      <strong>모서리 마감도</strong> 잘 되어있어 아이들 사용하는 데 걱정 없어요.
    </p>
  </div>
</div>

<div className={styles.materialInfo}>
  <h4>상품 성분</h4>

  {/* 첫 번째 박스: 재질 + 성분 리스트 */}
  <div className={styles.materialBox}>
    <div className={styles.materialHeader}>
      <span className={styles.materialTitle}>재질</span>
      <span className={styles.materialTag}>안전</span>
      <span className={styles.materialTag}>KC 인증</span>
    </div>
    <ul className={styles.materialList}>
      <li>고밀도 폴리에틸렌 (HDPE)</li>
      <li>폴리프로필렌 (PP)</li>
    </ul>
  </div>

  {/* 두 번째 박스: 안내문구 */}
  <div className={styles.noticeBox}>
    <p className={styles.noticeMain}>
      아토피가 있는 민준이가 사용하기에도 안전해요!
    </p>
    <p className={styles.noticeSub}>
      AI 분석은 참고만 하시길 바랍니다.<br />
      자세한 내용은 판매처에 문의해주세요.
    </p>
  </div>
</div>
</div>
  );
}

export default ProductSummary;

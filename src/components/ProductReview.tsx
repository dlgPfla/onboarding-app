import React from 'react';
import styles from './ProductReview.module.css';

const ProductReview = () => {
  return (
    <div className={styles.reviewContainer}>
      <h3 className={styles.reviewTitle}>상품 별점</h3>
      <img src="/ratingDist.svg" alt="별점 분포" className={styles.ratingImage} />

      <p className={styles.reviewSubTitle}>
        [핀핀] 키즈 책상 + 의자 세트 사용해봤다면
      </p>

      <div className={styles.reviewButton}>내 사진 후기 작성하기</div>

      {/* 후기 요약 영역 이미지로 대체 */}
      <img
        src="/Frame 427319135 (2).svg"
        alt="후기 요약 이미지"
        className={styles.reviewSummaryImage}
      />
    </div>
  );
};

export default ProductReview;

// src/pages/Onboarding/Onboarding1.tsx
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding1.module.css';
import OnboardingLayout from '../../components/OnboardingLayout';

function Onboarding1() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* 배경 동그라미 5개 중 2개 우선 삽입 */}
      <img
        src="/Ellipse 5.svg"
        alt="yellow circle"
        style={{
          position: 'absolute',
          top: '100px',
          right: '-20px',
          width: '115px',
          height: '115px',
          filter: 'blur(2px)',
          zIndex: 0,
        }}
      />
      <img
        src="/Ellipse 6 (1).png"
        alt="green circle"
        style={{
          position: 'absolute',
          top: '210px',
          left: '-20px',
          width: '79px',
          height: '79px',
          filter: 'blur(2px)',
          zIndex: 0,
        }}
      />
<img
  src={`/Ellipse 7.svg`}
  alt="ellipse-green-2"
  style={{
    position: 'absolute',
    top: '480px',
    left: '250px',
    width: '75px',
    height: '75px',
    filter: 'blur(2px)',
    opacity: 1,
    zIndex: 0,
  }}
/>

<img
  src={`/Ellipse 8 (1).svg`}
  alt="ellipse-yellow-2"
  style={{
    position: 'absolute',
    top: '630px',
    right: '280px',
    width: '96px',
    height: '96px',
    filter: 'blur(2px)',
    opacity: 1,
    zIndex: 0,
  }}
/>

<img
  src={`/Ellipse 9.svg`}
  alt="ellipse-yellow-3"
  style={{
    position: 'absolute',
    bottom: '30px',
    left: '300px',
    width: '98px',
    height: '98px',
    filter: 'blur(2px)',
    opacity: 1,
    zIndex: 0,
  }}
/>
      {/* 나머지 3개 동그라미 자리 확보 (위치 조정 예정) */}
      {/* <img src="/Ellipse 7.svg" ... /> */}
      {/* <img src="/Ellipse 8 (1).svg" ... /> */}
      {/* <img src="/Ellipse 9.svg" ... /> */}

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

      {/* 메인 콘텐츠 */}
      <div className={styles.content}>
        <div className={styles.titleGroup}>
          <div className={styles.titleLine1}>만나서 반갑습니다!</div>
          <div className={styles.titleLine2}>현재 상태를 알려주세요</div>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.button} onClick={() => navigate('/onboarding/14')}>
            임신 준비 중이에요
          </button>
          <button className={styles.button} onClick={() => navigate('/onboarding/14')}>
            아기가 태어날 예정이에요
          </button>
          <button className={styles.button} onClick={() => navigate('/onboarding/2')}>
            아기를 키우고 있어요
          </button>
        </div>
      </div>

      {/* 하단 안내 */}
      <div className={styles.footer}>
        회원가입 후 언제든 마이페이지에서<br />정보를 수정할 수 있어요!
      </div>
    </div>
  );
}

export default Onboarding1;

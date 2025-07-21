import React, { useState } from 'react';
import { useUserStore } from '../../stores/useUserStore';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding34.module.css';

const categories = [
  { label: '기저귀/배변용품', icon: '/Baby Medium Light Skin Tone Streamline Twemoji Emoji.svg', tags: ['물티슈', '기저귀', '배변훈련팬티', '기저귀 휴지통'] },
  { label: '젖병/수유', icon: '/Baby Bottle Streamline Twemoji Emoji.svg', tags: [] },
  { label: '이유식/간식', icon: '/Lollipop Streamline Twemoji Emoji.svg', tags: [] },
  { label: '스킨케어/목욕', icon: '/Lotion Bottle Streamline Twemoji Emoji.svg', tags: [] },
  { label: '놀이/발달', icon: '/Teddy Bear Streamline Twemoji Emoji.svg', tags: [] },
  { label: '유모차/카시트', icon: '/Sport Utility Vehicle Streamline Twemoji Emoji.svg', tags: [] },
  { label: '가구/침구', icon: '/Bed Streamline Twemoji Emoji.svg', tags: [] },
  { label: '도서/학습', icon: '/Books Streamline Twemoji Emoji.svg', tags: [] },
  { label: '외출소품', icon: '/Handbag Streamline Twemoji Emoji.svg', tags: [] },
  { label: '전자/소형가전', icon: '/Electric Plug Streamline Twemoji Emoji.svg', tags: [] },
  { label: '세탁/위생', icon: '/Bubbles Streamline Twemoji Emoji.svg', tags: [] },
  { label: '안전용품', icon: '/Unlocked Streamline Twemoji Emoji.svg', tags: [] },
  { label: '생활/정리용품', icon: '/File Cabinet Streamline Twemoji Emoji.svg', tags: [] },
  { label: '임부용품', icon: '/Pregnant Woman Light Skin Tone Streamline Twemoji Emoji.svg', tags: [] },
];

function Onboarding34() {
  const name = useUserStore((state) => state.name);
  const profileImage = useUserStore((state) => state.profileImage);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('예산 계산기');
  const [budgetInput, setBudgetInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === '홈') navigate('/onboarding/12');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    const formatted = raw.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setBudgetInput(formatted ? `${formatted} 원` : '');
  };

  const handleCategoryClick = (label: string) => {
    setSelectedCategory((prev) => (prev === label ? null : label));
  };

  return (
    <div className={styles.container}>
      <div className={styles.scrollWrapper}>
        <div className={styles.profileHeader}>
          <img src={profileImage} alt="프로필" className={styles.profileImage} />
          <span className={styles.profileName}>{name}</span>
          <div className={styles.iconGroup}>
            <img src="/meteor-icons_search.svg" alt="검색" />
            <img src="/wish button.svg" alt="찜" />
          </div>
        </div>

        <div className={styles.tabMenu}>
          {['홈', '예산 계산기', '이벤트', '랭킹'].map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.scrollContent}>
          <div className={styles.budgetWrapper}>
            <div className={styles.noticeImageWrapper}>
              <img
                src="/Frame 427319017.svg"
                alt="예산 안내 배너"
                className={styles.noticeImage}
              />
            </div>
            <div className={styles.budgetLabel}>예산을 설정해주세요</div>
            <input
              type="text"
              inputMode="numeric"
              className={styles.budgetInput}
              value={budgetInput}
              onChange={handleChange}
            />
          </div>

          <div className={styles.itemSection}>
            <div className={styles.itemTitle}>품목을 선택해주세요</div>
            <div className={styles.searchWrapper}>
              <input type="text" placeholder="품목 검색" className={styles.searchInput} />
              <img src="/basil_search-outline.svg" alt="검색" className={styles.searchIcon} />
            </div>

            <div className={styles.buttonRow}>
              <button className={styles.actionButton}>
                <div className={styles.iconTextWrapper}>
                  <img src="/Vector.svg" className={styles.icon} alt="고정" />
                  <img src="/divider.png" className={styles.divider} alt="구분선" />
                  <span className={styles.buttonText}>상품 고정하기</span>
                </div>
              </button>
              <button className={styles.actionButton}>
                <div className={styles.iconTextWrapper}>
                  <img src="/wish button.svg" className={styles.icon} alt="찜" />
                  <img src="/divider.png" className={styles.divider} alt="구분선" />
                  <span className={styles.buttonText}>찜한 상품 불러오기</span>
                </div>
              </button>
            </div>

            <div className={styles.categoryGrid}>
              {categories.map((category, index) => {
                const isSelected = selectedCategory === category.label;
                return (
                  <React.Fragment key={category.label}>
                    <div
                      className={`${styles.categoryItemWrapper} ${isSelected ? styles.selectedWrapper : ''}`}
                    >
                      <button
                        onClick={() => handleCategoryClick(category.label)}
                        className={`${styles.categoryItem} ${isSelected ? styles.selected : ''}`}
                      >
                        <div className={styles.categoryIconWrapper}>
                          <img src={category.icon} alt={category.label} className={styles.categoryIcon} />
                        </div>
                        <div className={styles.categoryLabel}>{category.label}</div>
                      </button>
                    </div>

                    {/* ✅ 카테고리 4번째(0~3) 이후에 태그 삽입 */}
                    {index === 3 && selectedCategory && (
                      <div className={styles.fullWidthRow}>
                        <div className={styles.tagListRow}>
                          {categories.find((c) => c.label === selectedCategory)?.tags.map((tag) => (
                            <div
                              key={tag}
                              className={`${styles.tagItem} ${selectedTags.includes(tag) ? styles.tagSelected : ''}`}
                              onClick={() => handleTagClick(tag)}
                            >
                              {tag} <span className={styles.plus}>+</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {selectedTags.length > 0 && (
              <div className={styles.bottomBarContainer}>
                <div className={styles.selectedTagsBar}>
                  {selectedTags.map((tag) => (
                    <div key={tag} className={styles.selectedTag}>
                      {tag}
                      <button className={styles.removeButton} onClick={() => handleTagClick(tag)}>×</button>
                    </div>
                  ))}
                </div>
                <button className={styles.recommendBtn}>예산에 맞게 구성 추천받기</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding34;

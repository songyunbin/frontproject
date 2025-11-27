import { useNavigate } from 'react-router-dom';
import '../styles/page.css';
import feature1Image from '../assets/talkdoc-feature1.png';
import feature2Image from '../assets/talkdoc-feature2.png';
import feature3Image from '../assets/talkdoc-feature3.png';

function ProjectRefresh() {
  const navigate = useNavigate();

  const features = [
    {
      title: '서재 기능',
      description: '알라딘 API와 연동하여 서재에서 원하는 책을 검색하고, 읽고싶은 책이나 현재 읽고있는 책으로 등록할 수 있는 기능입니다.',
      image: feature1Image,
      tags: ['서재', '알라딘 API', '찜']
    },
    {
      title: '총 독서시간 기록',
      description: '타이머탭에서 타이머를 실행한 상태에서 독서를 하면 그 달의 누적 독서 시간이 달력에 뜨게하였습니다.',
      image: feature2Image,
      tags: ['타이머', '달력', '누적기록']
    },
    {
      title: '미션/챌린지 기능',
      description: '톡독의 메인기능으로 독서챌린지를 사용자가 등록하여 독서를 독려하는 기능입니다. 미션탭과 챌린지탭으로 분리하여 앱에서 생성하는 독서미션과 사용자가 직접 등록할 수 있는 챌린지 기능입니다.',
      image: feature3Image,
      tags: ['챌린지', '메인기능', '독서독려']
    }
  ];

  return (
    <section id="project-detail" className="section">
      <div className="container">
        <button 
          className="back-btn" 
          onClick={() => navigate('/')}
        >
          메인으로 돌아가기
        </button>

        <h1 className="project-detail-title">독서를 독려해주는 챌린지 어플 "톡독"</h1>
        <p className="project-detail-subtitle">Flutter, Firebase를 이용한 팀 프로젝트</p>
        
        <div className="detail-content">
          <div className="project-info">
            <p>
              <strong>기간:</strong> 2025.04 - 2025.06 (3개월)<br/>
              <strong>기술 스택:</strong> Flutter, Dart, Firebase, Firestore, AndroidStudio
            </p>
          </div>

          <h2>주요 기능</h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-tags">
                    {feature.tags.map((tag, i) => (
                      <span key={i} className="feature-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <h2>나의 기여도</h2>
          <div className="contribution-box">
            <p>
              저는 소셜로그인 기능과 타이머 기능, 미션 기능과 내 정보 기능에 기여하였습니다. 전반적으로 팀원 전체가 프론트엔드와 백엔드를 둘 다 담당하였습니다.
            </p>
            <ul className="contribution-list">
              <li>타이머, 누적독서 기록 기능 구현</li>
              <li>앱에서 랜덤으로 생성되는 미션 기능 구현</li>
              <li>소셜로그인(카카오, 네이버, 구글 등..)구현</li>
            
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectRefresh;
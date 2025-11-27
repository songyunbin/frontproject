import { useNavigate } from 'react-router-dom';
import '../styles/aiproject.css';

function ProjectRefresh() {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: '📽️',
      title: '영상분류',
      description: 'numpy전처리와 OpenCV를 이용하여 계란이 깨졌는지, 정상인지 사진을 분류했습니다.',
      tags: ['분류', '인공지능']
    },
    {
      icon: '🛠️',
      title: '코랩, 카글이용',
      description: 'kaggle에서 데이터를 받아오고 colab을 이용하여 인공지능 수업시간에 배운 툴에 보다 익숙해질 수 있었습니다.',
      tags: ['툴', '데이터']
    },

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

        <h1 className="project-detail-title">인공지능 프로젝트</h1>
        <p className="project-detail-subtitle">깨진계란 사진을 분류하는 영상분류 개인 프로젝트</p>
        
        <div className="detail-content">
          <div className="project-info">
            <p>
              <strong>기간:</strong> 2025.06 (1개월)<br/>
              <strong>사용한 언어:</strong> Python, OpenCV
            </p>
          </div>

          <h2>프로젝트 설명</h2>
          
          <div className="features-grid-text">
            {features.map((feature, index) => (
              <div key={index} className="feature-card-text">
                <div className="feature-icon">{feature.icon}</div>
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
              영상을 분류하는 프로젝트를 했습니다.
            </p>
            <ul className="contribution-list">
              <li>kaggle에서 데이터 다운</li>
              <li>python과 OpenCV를 이용한 영상 분류 기능 구현</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectRefresh;
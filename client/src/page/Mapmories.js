import { useNavigate } from 'react-router-dom';
import '../styles/page.css';
import feature1Image from '../assets/map-feature1.png';
import feature2Image from '../assets/map-feature2.png';
import feature3Image from '../assets/map-feature3.png';

function ProjectRefresh() {
  const navigate = useNavigate();

  const features = [
    {
      title: '달력 기록',
      description: '사용자가 글을 쓴 날짜를 달력에 표시하여 한 눈에 볼 수 있게 했습니다.',
      image: feature1Image,
      tags: ['달력', '날짜기록', '일기']
    },
    {
      title: '사진 글쓰기',
      description: '글쓰기 기능에 글뿐만 아니라 사진을 첨부할 수 있게 하여 그 날에 있었던일을 보다 더 기억하기 쉽도록 하였습니다.',
      image: feature2Image,
      tags: ['사진', '추억', '기록']
    },
    {
      title: '사용자 위치 표시',
      description: '글쓰기를 할 때 위치등록을 할 수 있게 해 그 위치를 지도에 마커로 표시하여 위치기록을 할 수 있게 하였습니다.',
      image: feature3Image,
      tags: ['위치', '지도', '장소기록']
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

        <h1 className="project-detail-title">사진 기록 앱</h1>
        <p className="project-detail-subtitle">사진으로 소중한 순간을 기억할 수 있는 "맵모리즈"</p>
        
        <div className="detail-content">
          <div className="project-info">
            <p>
              <strong>기간:</strong> 2025.06 - 2025.07 (2개월)<br/>
              <strong>기술 스택:</strong> Flutter, Firebase, AndroidStudio
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
              저는 회원가입, 로그인, 위치를 지도에 마커로 표시할 수 있는 기능을 담당했습니다.
            </p>
            <ul className="contribution-list">
              <li>이메일을 이용한 회원가입, 로그인 기능 구현</li>
              <li>위치 등록 기능 구현</li>
              <li>등록된 위치를 지도에 마커로 표시하는 기능 구현</li>
            
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectRefresh;
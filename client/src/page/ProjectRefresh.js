import { useNavigate } from 'react-router-dom';
import '../styles/page.css';
import feature1Image from '../assets/refresh-feature1.png';
import feature2Image from '../assets/refresh-feature2.png';
import feature3Image from '../assets/refresh-feature3.png';

function ProjectRefresh() {
  const navigate = useNavigate();

  const features = [
    {
      title: '중간지점도우미',
      description: '새로고침의 메인기능으로 구매자와 판매자가 위치를 등록하면 두 사람의 중간지점을 계산해 좌표로 화면에 표시해주는 기능입니다.',
      image: feature1Image,
      tags: ['거래지점도우미', '메인기능', 'CRUD']
    },
    {
      title: '글쓰기',
      description: '판매자가 글을 쓸 수 있는 기본기능입니다.',
      image: feature2Image,
      tags: ['글쓰기', '기본기능']
    },
    {
      title: '실시간채팅',
      description: '실시간 1:1 채팅 기능으로 판매자와 구매자가 즉시 소통할 수 있습니다.',
      image: feature3Image,
      tags: ['실시간', '채팅']
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

        <h1 className="project-detail-title">중고거래 웹사이트 "새로고침"</h1>
        <p className="project-detail-subtitle">Spring과 React로 구현한 팀 프로젝트</p>
        
        <div className="detail-content">
          <div className="project-info">
            <p>
              <strong>기간:</strong> 2024.9 ~ 2024.11 (3개월)<br/>
              <strong>기술 스택:</strong> React, Spring Boot, MySQL, MariaDB, Firebase
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
              저는 주로 백엔드를 담당했으며 UI/UX 수정에도 기여했습니다. 특히 메인기능인
              중간지점도우미 기능을 구현하였습니다.
            </p>
            <ul className="contribution-list">
              <li>React 기반 UI 컴포넌트 설계 및 구현</li>
              <li>메인기능인 중간지점도우미 기능 구현</li>
              <li>Spring Boot와 REST API 연동</li>
              <li>사용자 경험 개선을 위한 폼 유효성 검사</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectRefresh;
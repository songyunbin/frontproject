import '../styles/portfolio.css';
import projectImage1 from '../assets/project1.png'; 
import projectImage2 from '../assets/project2.png'; 
import projectImage3 from '../assets/project3.png'; 
import projectImage4 from '../assets/project4.png'; 


function Portfolio() {
  const projects = [
    { 
      title: '중고거래 웹사이트', 
      desc: 'Spring과 React 로 구현한 중고거래 "새로고침"',
      tech: ['React', 'Spring', 'MySQL'],
      image: projectImage1, 
      link: '/portfolio/project-refresh' 
    },
    { 
      title: '사진 기록 앱', 
      desc: '사진으로 소중한 순간을 기억할 수 있는 "맵모리즈"',
      tech: ['React', 'API'],
      image: projectImage2,
      link: '/portfolio/mapmories' 
    },
    { 
      title: '독서챌린지 어플', 
      desc: '독서를 독려해주는 챌린지 어플 "톡독"',
      tech: ['React', 'Express'],
      image: projectImage3,
      link: '/portfolio/talkdoc'
    },
    { 
      title: '인공지능 프로젝트', 
      desc: 'OpenCV를 이용한 영상분류 프로젝트',
      tech: ['React', 'CSS'],
      image: projectImage4,
      link: '/portfolio/aiproject'
    },
  ];

  return (
    <section id="portfolio" className="section section-gray">
      <div className="container">
        <div className="fade-in-scroll">
          <h2 className="section-title">Portfolio</h2>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.link} 
                className="project-card-link"
              >
                <div className="project-card">
                  <div className="project-img">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.desc}</p>
                    <div className="tech-tags">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
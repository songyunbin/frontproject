import meImg from "../assets/me.jpg";
import "../styles/about.css"; 

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="fade-in-scroll">
          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            <div className="about-img">
              <img src={meImg} alt="me" />
            </div>
            <div className="about-text">
              <h3 className="about-subtitle">송윤빈</h3>
              <p className="paragraph">
                안녕하세요! 프론트엔드 개발에 흥미가 많은 송윤빈입니다. <br />새로운 기술을 배우는 것을 즐기며, 사용자 경험을 최적화하는 것에 중점을 둡니다.
              </p>
            </div>
          </div>

          <hr />

          <div className="cards-container">
            <div className="card about-card">
              <h3 className="card-title">자격증</h3>
              <ul className="card-list">
                <li>정보처리산업기사 (2025.09.12)</li>
              </ul>
            </div>

            <div className="card about-card">
              <h3 className="card-title">학력 사항</h3>
              <ul className="card-list">
                <li>부천북고등학교 졸업 <br />
                  (2018.03 ~ 2021.02)</li>
                <li>인하공업전문대학교 컴퓨터정보공학과 졸업
                  (2023.03 ~ 2026.02)</li>
              </ul>
            </div>

            <div className="card about-card">
              <h3 className="card-title">외국어능력</h3>
              <div className="skill-bar-container">
                <div className="skill-item">
                  <span className="skill-name">영어</span>
                  <div className="skill-bar">
                    <div className="skill-level english" style={{ width: '40%' }}></div>
                  </div>
                  <span className="skill-percentage">40%</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">일본어</span>
                  <div className="skill-bar">
                    <div className="skill-level japanese" style={{ width: '10%' }}></div>
                  </div>
                  <span className="skill-percentage">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
import '../styles/contact.css';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="fade-in-scroll">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <p className="contact-text">
              문의사항이 있으시면 언제든 연락주세요!
            </p>
            <div className="contact-links">
              <a href="mailto:kimonero22@naver.com" className="contact-item">
                <div className="contact-icon">📧</div>
                <strong>Email</strong>
              </a>
              <a href="https://github.com/songyunbin" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">💻</div>
                <strong>GitHub</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
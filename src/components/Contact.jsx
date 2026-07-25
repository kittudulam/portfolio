import "../Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h1>Contact Me</h1>

      <p className="contact-description">
        I'm always interested in research collaborations,
        internships, software development and machine learning opportunities.
      </p>

      <div className="contact-grid">

        <a
            href="mailto:skdulamedn@gmail.com"
            className="contact-card"
        >
            <h2>📧 Email</h2>
            <p>skdulamedn@gmail.com</p>
        </a>

        <a
          href="https://github.com/kittudulam"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h2>💻 GitHub</h2>
          <p>github.com/kittudulam</p>
        </a>

        <a
          href="https://www.linkedin.com/in/sai-keerthana-dulam-4875b6318"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h2>💼 LinkedIn</h2>
          <p>linkedin.com/in/sai-keerthana-dulam-4875b6318</p>
        </a>

        <a
          href=" https://hackerrank.com/profile/skdulamedn"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h2>🏆 HackerRank</h2>
          <p>hackerrank.com/profile/skdulamedn</p>
        </a>

      </div>

    </section>
  );
}

export default Contact;
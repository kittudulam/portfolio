import "../Certificates.css";

function Certificates() {
  return (
    <section id="certifications" className="certificates">

      <h1>Certifications</h1>

      <p className="cert-description">
        Certifications that strengthened my knowledge in programming,
        machine learning and software development.
      </p>

      <div className="certificate-grid">

        <div className="certificate-card">
          <h2>🏆 Stanford Code in Place</h2>
          <h3>Stanford University</h3>
          <p>Python Programming</p>
          <a
            href="/certificates/stanford.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button>View Certificate</button>
          </a>
        </div>

        <div className="certificate-card">
          <h2>🥇 Human Computer Interaction</h2>
          <h3>NPTEL</h3>
          <p>Gold Elite</p>
          <a
            href="/certificates/hci.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button>View Certificate</button>
          </a>
        </div>

        <div className="certificate-card">
          <h2>🥈 Python for Data Science</h2>
          <h3>NPTEL</h3>
          <p>Silver Elite</p>
          <a
            href="/certificates/python.pdf"
            target="_blank"
            rel="noopener noreferrer"
           >
           <button>View Certificate</button>
           </a>
        </div>

        <div className="certificate-card">
          <h2>💼 InternPe Internship</h2>
          <h3>InternPe</h3>
          <p>Python Development Intern</p>
          <a
            href="/certificates/internpe.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button>View Certificate</button>
          </a>
        </div>

      </div>

    </section>
  );
}

export default Certificates;
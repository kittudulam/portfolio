import "../Project.css";
function Project() {
  return (
    <section id="projects" className="projects">

      <h1>Featured Project</h1>

      <div className="project-card">

        <img
          src="/project.png"
          alt="Cardiovascular Risk Prediction"
          className="project-image"
        />

        <div className="project-content">

          <h2>Explainable Cardiovascular Risk Prediction</h2>
          <p className="status">
                Research submitted to <strong>BMC Public Health</strong>
          </p>
          <div className="project-highlights">

            <span>⭐ ROC-AUC: <strong>0.915</strong></span>

            <span>🤖 Models: <strong>3</strong></span>

            <span>📂 Datasets: <strong>2</strong></span>

            <span>🧠 SHAP Explainability</span>

          </div>

          
          <p>
            An Explainable Artificial Intelligence (XAI) based machine learning
            system for predicting cardiovascular disease risk using Logistic
            Regression, SHAP analysis, calibration analysis and Odds Ratio
            interpretation.
          </p>

          <div className="tech-stack">

            <span>Python</span>

            <span>Scikit-learn</span>

            <span>SHAP</span>

            <span>Pandas</span>

            <span>NumPy</span>

            <span>Matplotlib</span>

          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/kittudulam/Explainable-Cardiovascular-Risk-Prediction"
              target="_blank"
              rel="noopener noreferrer"
            >
            <a
              href="https://github.com/kittudulam/Explainable-Cardiovascular-Risk-Prediction"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button>💻 GitHub</button>
            </a>
            </a>

            <a href="/paper.pdf"
               target="_blank"
               rel="noreferrer">
              <button>📄 Research Paper</button>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Project;
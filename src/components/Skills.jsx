import "../Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">

    <h1>Technical Skills</h1>

    <p className="skills-description">
        Technologies I use to build machine learning models,
        analyse data and develop modern software applications.
    </p>

    <div className="skill-category">

        <h2>Programming Languages</h2>

        <div className="skills-grid">

            <div className="skill-card">🐍 Python</div>
            <div className="skill-card">📜 JavaScript</div>

        </div>

    </div>

    <div className="skill-category">

        <h2>Frontend Development</h2>

        <div className="skills-grid">

            <div className="skill-card">⚛ React</div>
            <div className="skill-card">🌐 HTML & CSS</div>

        </div>

    </div>

    <div className="skill-category">

        <h2>Machine Learning & AI</h2>

        <div className="skills-grid">

            <div className="skill-card">🤖 Machine Learning</div>
            <div className="skill-card">🧠 Explainable AI</div>
            <div className="skill-card">📊 Scikit-learn</div>

        </div>

    </div>

    <div className="skill-category">

        <h2>Data & Visualisation</h2>

        <div className="skills-grid">

            <div className="skill-card">🗄 SQL</div>
            <div className="skill-card">📈 Matplotlib</div>
            <div className="skill-card">📊 Data Analytics</div>

        </div>

    </div>

</section>
  );
}

export default Skills;
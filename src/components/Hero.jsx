import "../Hero.css"
import profile from "../assets/profile.jpeg";
function Hero() {
  return (
    
    <section className="hero">

        <div className="hero-image">
        <img
            src={profile}
            alt="Sai Keerthana Dulam"
        />
        </div>

        <div className="hero-content">

        <p className="greeting">Hello, I'm</p>

        <h1>Sai Keerthana Dulam</h1>

        <h2>Computer Science Undergraduate</h2>

        <p>National Institute of Technology Patna</p>

        <p>
            Machine Learning | Data Analytics | Explainable AI
        </p>

        <p className="intro">
            Passionate about building intelligent AI solutions
            for healthcare and real-world applications.
        </p>

        <div className="buttons">
            <a
                href="/Kittu_Resume_25072026.pdf"
                download
        >
                <button>📄 Download Resume</button>
            </a>
            <a href="#projects">
                <button>💻 View Projects</button>
            </a>
        </div>

        </div>

    </section>
    );
}

export default Hero;
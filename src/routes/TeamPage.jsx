import { Link } from "react-router-dom";
import "./teampage.scss";

function TeamPage() {
  return (
    <main>
      <nav>
        <div className="navbar">
          <Link to="/">
            <img src="/logo.png" alt="Flame Yoga Club" />
          </Link>
          <div className="links-container">
            <Link to="/">Home</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/events">Events</Link>
          </div>
          <a
            className="social"
            href="https://www.instagram.com/flameyogaclub?igsh=anA1Z2g4MTU3aDl0"
            target="_blank"
          >
            Join Us
          </a>
        </div>
      </nav>
      <div className="section-1">
        <div className="row-1">
          <img src="/sharbani-team.png" alt="Sharbani Ghosh Roy" />
          <h1>
            Sharbani Ghosh Roy
            <span>President</span>
          </h1>
        </div>
        <div className="inverse-bg">
          <div className="row-1 inverse">
            <img src="/aarushi-team.png" alt="Aarushi Bishnoi" />
            <h1>
              Aarushi Bishnoi
              <span>Vice President</span>
            </h1>
          </div>
        </div>
        <div className="row-1">
          <img src="/adit-team.png" alt="Sharbani Ghosh Roy" />
          <h1>
            Adit Jain
            <span>Secretary</span>
          </h1>
        </div>
        <div className="inverse-bg">
          <div className="row-1 inverse">
            <img src="/shreya-team.png" alt="Aarushi Bishnoi" />
            <h1>
              Shreya Kaleeswaran
              <span>Treasurer</span>
            </h1>
          </div>
        </div>
        <div className="row-1">
          <img src="/naman-team.png" alt="Sharbani Ghosh Roy" />
          <h1>
            Naman Bhawnani
            <span>PR Head</span>
          </h1>
        </div>
        <div className="inverse-bg">
          <div className="row-1 inverse">
            <img src="/kajol-team.png" alt="Aarushi Bishnoi" />
            <h1>
              Kajol Mandal
              <span>Faculty Mentor</span>
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TeamPage;

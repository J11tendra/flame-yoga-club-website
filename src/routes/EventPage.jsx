import { Link } from "react-router-dom";
import "./eventpage.scss";

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
      <div className="card-grid">
        <div className="card-container">
          <img src="/interhouse.png" alt="InterHouse Competition" />
          <div className="txt-container">
            <h4>InterHouse Yoga Competition</h4>
          </div>
        </div>
        <div className="card-container">
          <img src="/master-classes.png" alt="InterHouse Competition" />
          <div className="txt-container">
            <h4>Master Classes</h4>
          </div>
        </div>
        <div className="card-container">
          <img src="/kurukshetra.png" alt="InterHouse Competition" />
          <div className="txt-container">
            <h4>Kurukshetra</h4>
          </div>
        </div>
        <div className="card-container">
          <img src="/yoga-team.png" alt="InterHouse Competition" />
          <div className="txt-container">
            <h4>FLAME Yoga Team</h4>
          </div>
        </div>
      </div>
      <footer>
        <span className="head-footer">Contact Zen Mode</span>
        <span className="mail-footer">
          Email:
          <a href=""> yogaclub@flame.edu.in</a>
        </span>
        <span className="social-footer">
          <a
            href="https://www.instagram.com/flameyogaclub?igsh=anA1Z2g4MTU3aDl0"
            target="_blank"
          >
            <img src="/Instagram-icon.png" alt="insta-flame-yoga-club" />
          </a>
        </span>
      </footer>
    </main>
  );
}

export default TeamPage;

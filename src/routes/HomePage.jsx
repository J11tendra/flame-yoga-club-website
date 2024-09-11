import { Link } from "react-router-dom";
import "./homepage.scss";

function HomePage() {
  return (
    <main>
      <div className="section-bg">
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
        <h1>FLAME Yoga Club</h1>
      </div>
      <div className="section-2">
        <p>
          The Flame Yoga club is dedicated to promoting wellness, be it physical
          or mental. The club welcomes everyone, and encourages them to find
          that special connection with themselves that will allow them to find
          peace, balance, and the potential for growth. Through various
          activities and events, the Flame Yoga Club aims to create a safe space
          for relaxation, exploration, and personal transformation.
        </p>
      </div>
      <div className="section-3">
        <img src="/team.png" alt="team" />
        <div className="txt-container">
          <div className="wrapper">
            <h3>Meet Our Team</h3>
            <p>
              Our team of experienced and certified yoga instructors is
              dedicated to guide you on your yoga journey.
            </p>
          </div>
          <Link to="/team" className="more-btn">
            Know More
          </Link>
        </div>
      </div>
      <div className="section-4">
        <img src="/upcoming-events.png" alt="events" />
        <div className="txt-container">
          <div className="wrapper">
            <h3>Our Upcoming Events</h3>
            <p>
              We believe in the profound physical, mental, and spiritual
              benefits yoga can offer and are committed to create an inclusive
              and welcoming space.
            </p>
          </div>
          <Link to="/events" className="more-btn">
            Know More
          </Link>
        </div>
      </div>
      <footer>
        <span className="head-footer">Contact Zen Mode</span>
        <span className="mail-footer">
          Email:
          <a href=""> yogaclub@flame.edu.in</a>
        </span>
        <span className="social-footer">
          <a href="https://www.instagram.com/flameyogaclub" target="_blank">
            <img src="/Instagram-icon.png" alt="insta-flame-yoga-club" />
          </a>
        </span>
      </footer>
    </main>
  );
}

export default HomePage;

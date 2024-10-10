import React, { useState, useEffect } from "react";
import "./eventpage.scss";
import { Link } from "react-router-dom";

function EventPage() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  // Array of image arrays - each entry corresponds to a card's images
  const slidesData = [
    [
      { imgSrc: "/interhouse1.png", title: "InterHouse Yoga Competition" },
      { imgSrc: "/interhouse2.png", title: "InterHouse Yoga Competition" },
      { imgSrc: "/interhouse3.png", title: "InterHouse Yoga Competition" },
    ],
    [
      {
        imgSrc: "/master-class-1.JPG",
        title: "Master Classes",
      },
      { imgSrc: "/master-class-2.JPG", title: "Master Classes" },
      { imgSrc: "/master-class-3.JPG", title: "Master Classes" },
    ],
    [
      { imgSrc: "/arm-strengthing-1.jpg", title: "Arm Strengthing" },
      { imgSrc: "/arm-strengthing-2.jpg", title: "Arm Strengthing" },
      { imgSrc: "/arm-strengthing-3.JPG", title: "Arm Strengthing" },
      { imgSrc: "/arm-strengthing-4.JPG", title: "Arm Strengthing" },
    ],
    [
      { imgSrc: "/yoga-team1.png", title: "FLAME Yoga Team" },
      { imgSrc: "/yoga-team2.png", title: "FLAME Yoga Team" },
      { imgSrc: "/yoga-team3.png", title: "FLAME Yoga Team" },
    ],
  ];

  // Cards corresponding to the images
  const cards = [
    { imgSrc: "/interhouse.JPG", title: "InterHouse Yoga Competition" },
    { imgSrc: "/master-class.png", title: "Master Classes" },
    { imgSrc: "/kurukshetra.png", title: "Arm Strengthing" },
    { imgSrc: "/yoga-team.JPG", title: "FLAME Yoga Team" },
  ];

  // Open the slider with a specific set of images for the clicked card
  const openSlider = (index) => {
    setCurrentImages(slidesData[index]); // Set the images for this card
    setCurrentSlide(0); // Start with the first slide
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === currentImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? currentImages.length - 1 : prevSlide - 1
    );
  };

  // Close the slider with the Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeSlider();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

      {/* Card Grid */}
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card-container"
            onClick={() => openSlider(index)} // Open the slider with this card's images
          >
            <img className="card-img" src={card.imgSrc} alt={card.title} />
            <div className="txt-container">
              <h4>{card.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Slider */}
      {isSliderOpen && (
        <div className="fullscreen-slider" onClick={closeSlider}>
          <button className="close-slider" onClick={closeSlider}>
            &times;
          </button>
          <div
            className="slider-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button className="prev" onClick={prevSlide}>
              &#10094;
            </button>
            <div className="slide">
              <img
                src={currentImages[currentSlide].imgSrc}
                alt={currentImages[currentSlide].title}
                className="img-style"
              />
              <h4>{currentImages[currentSlide].title}</h4>
            </div>
            <button className="next" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default EventPage;

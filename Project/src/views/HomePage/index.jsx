// src/views/HomePage/index.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import bgImage from "../../assets/images/bgf.jpg";
import "./style.css";

const HomePage = () => {
  useEffect(() => {
    // Initialize scroll animations
    const sections = document.querySelectorAll(".animate-section");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="home-page">
      <Header />
      <Navbar />

      <main className="home-content">
        {/* Hero Section with Fullscreen Image */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Experience the Magic of Flight</h1>
            <p className="hero-subtitle">
              Breathtaking views, unforgettable moments, and the peaceful
              serenity of floating above the world
            </p>
            <Link to="/booking" className="cta-button">
              Book Your Adventure
            </Link>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="welcome-section animate-section">
          <div className="container">
            <div className="welcome-content">
              <h2>Welcome to SkyHigh Balloon Adventures</h2>
              <div className="divider"></div>
              <p>
                Join us on a journey through the skies and discover the world
                from a whole new perspective. Our balloon flights offer a unique
                combination of adventure, tranquility, and breathtaking
                panoramic views.
              </p>
              <p>
                Whether you're celebrating a special occasion, looking for a
                unique gift, or simply want to experience the wonder of hot air
                ballooning, we have the perfect flight for you.
              </p>
            </div>
          </div>
        </section>

        {/* Image Showcase Section */}
        <section className="image-showcase animate-section">
          <div className="showcase-item">
            <div className="showcase-image image-placeholder"></div>
            <div className="showcase-caption">
              <h3>Nature’s Canvas</h3>
              <p>Drift over rolling hills and endless horizons</p>
            </div>
          </div>
          <div className="showcase-item">
            <div className="showcase-image image-placeholder2"></div>
            <div className="showcase-caption">
              <h3>Sunset Splendor</h3>
              <p>Witness dawn and dusk's vibrant glow from above the clouds</p>
            </div>
          </div>
          <div className="showcase-item">
            <div className="showcase-image image-placeholder3"></div>
            <div className="showcase-caption">
              <h3>Special Occasions</h3>
              <p>
                Celebrate your milestone moments with an unforgettable
                experience
              </p>
            </div>
          </div>
        </section>

        {/* Video Section Placeholder */}
        <section className="video-section animate-section">
  <div className="container">
    <h2>Experience the Journey</h2>
    <div className="divider"></div>
    <div className="video-container">
      <video className="video-placeholder" autoPlay muted loop>
        <source src="\vidio\vidio2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  </div>
</section>

        {/* Features Section */}
        <section className="features-section animate-section">
          <div className="container">
            <h2>Why Choose SkyHigh Balloons?</h2>
            <div className="divider"></div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon safety-icon"></div>
                <h3>Safety First</h3>
                <p>
                  FAA certified pilots with thousands of flight hours and
                  rigorous safety protocols
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon experience-icon"></div>
                <h3>Experienced Crew</h3>
                <p>Our team has over 15 years of hot air balloon experience</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon location-icon"></div>
                <h3>Stunning Locations</h3>
                <p>Fly over breathtaking landscapes and picturesque scenery</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon memory-icon"></div>
                <h3>Memorable Experience</h3>
                <p>
                  Champagne toast and flight certificate included with every
                  adventure
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Preview Section */}
        <section className="booking-preview animate-section">
          <div className="container">
            <div className="booking-content">
              <h2>Ready for Takeoff?</h2>
              <p>
                Book your balloon adventure today and create memories that will
                last a lifetime. Special packages available for couples,
                families, and private events.
              </p>
              <Link to="/booking" className="cta-button">
                Check Availability
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section animate-section">
          <div className="container">
            <h2>What Our Adventurers Say</h2>
            <div className="divider"></div>
            <div className="testimonials-carousel">
              <div className="testimonial-card">
                <div className="testimonial-quote">
                 * "The most amazing experience of my life! Floating above the
                  clouds was surreal and the views were absolutely
                  breathtaking."
                </div>
                <div className="testimonial-author">- Sarah M.</div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-quote">
                 * "Our pilot was knowledgeable and fun. The champagne toast at
                  the end made the experience even more special."
                </div>
                <div className="testimonial-author">- James T.</div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-quote">
                 * "I proposed to my girlfriend during our balloon flight and it
                  was perfect! The crew helped make it extra special."
                </div>
                <div className="testimonial-author">- Michael R.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width Image Section */}
        <section className="fullwidth-image animate-section">
          {/* You'll add actual image later */}
          <div className="parallax-image"></div>
          <div className="image-overlay">
            <div className="overlay-content">
              <h2>Adventure Awaits Above</h2>
              <Link to="/booking" className="cta-button light">
                Start Your Journey
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import './Home.css';

const programsList = [
  {
    id: "baby-care",
    color: "bg-blue",
    icon: "/media/story_animation_1-1.png",
    title: "Baby Care",
    desc: "Focusing on sensory play and primary caregiving for babies 12–18 months. We follow your child’s natural routine to ensure a gentle, secure start in Calmar."
  },
  {
    id: "toddler-care",
    color: "bg-purple",
    icon: "/media/story_animation_2-1.png",
    title: "Toddler Care",
    desc: "Designed for ages 18 months to 3 years. We fuel curiosity through play-based discovery, language building, and potty training support in a energetic environment."
  },
  {
    id: "pre-school",
    color: "bg-pink",
    icon: "/media/story_animation_3-1.png",
    title: "Pre-School",
    desc: "For ages 3 to 4.5 years. Our curriculum uses STEM and early literacy to help children think critically and work together through creative projects."
  },
  {
    id: "after-school",
    color: "bg-teal",
    icon: "/media/story_animation_4.png",
    title: "Kindergarten",
    desc: "The ultimate bridge to Grade 1 for ages 4.5 to 6. We focus on literacy, classroom routines, to ensure your child is \"School Ready.\""
  },
  {
    id: "after-school",
    color: "bg-orange",
    icon: "/media/story_animation_5-2.png",
    title: "Out Of School Care",
    desc: "A safe and supportive Out of School Care Program for children aged 6–12, with pick-up and drop-off services available."
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      heading: "The Journey of a Thousand Miles Starts with a",
      highlight: "Single Step.",
      description: "Welcome to First Path Daycare, Calmar’s premier center for early childhood excellence. We provide a nurturing environment where your child’s safety and growth are our highest priorities.",
      image: "/media/Banner_one.jpeg"
    },
    {
      heading: "Cultivating Curiosity Through",
      highlight: "Play-Based Learning.",
      description: "Our research-backed curriculum empowers infants, toddlers, and preschoolers to explore the world with confidence and creativity.",
      image: "/media/Banner_two.jpg"
    },
    {
      heading: "A Home-Away-From-Home for",
      highlight: "Calmar Families.",
      description: "Join a community that values inclusive education, nutritious growth, and the unique personality of every child.",
      image: "/media/Banner_three.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="home-page animate-up">

      {/* Hero Section */}
      <section className="hero">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="hero-overlay"></div>
            <div className="container hero-content">
              <h1>
                {slide.heading} <span className="highlight">{slide.highlight}</span>
              </h1>
              <p>{slide.description}</p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">Book a Tour</Link>
              </div>
            </div>
          </div>
        ))}
        

      </section>

      {/* Programs Overview */}
      <section className="programs-overview">
        <div className="container">
          <div className="section-header">
            <h2>Tailored Learning for Every Milestone</h2>
            <p>Discover our age-specific childcare programs designed to foster growth from infancy to school age. We combine play-based exploration with expert care.</p>
          </div>
        </div>

        <div className="programs-marquee-container">
          <div className="programs-marquee-track">
              {/* Duplicate array for seamless infinite marquee scroll */}
              {[...programsList, ...programsList].map((prog, idx) => (
                <div key={idx} className={`program-card custom-card ${prog.color} marquee-card`}>
                  <div className="program-icon-wrapper">
                    <img src={prog.icon} alt={`${prog.title} Icon`} />
                  </div>
                  <div className="program-info">
                    <h3>{prog.title}</h3>
                    <p>{prog.desc}</p>
                    <Link to={`/programs/${prog.id}`} className="program-link">Read More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Intro Features */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Heart size={32} /></div>
              <h3>Nurturing Care</h3>
              <p>A home-away-from-home that values the unique personality of every child in our community.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Shield size={32} /></div>
              <h3>Safe Environment</h3>
              <p>Your child’s safety and well-being are our absolute highest priorities every single day.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><BookOpen size={32} /></div>
              <h3>Play-Based Learning</h3>
              <p>Our research-backed curriculum empowers infants, toddlers, and preschoolers to explore creatively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Highlight */}
      <section className="home-gallery">
        <div className="container">
          <div className="section-header text-center" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '15px' }}>Our Photo Gallery</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Take a glimpse into the joyful, learning-filled environment at First Path Daycare.</p>
          </div>
          <div className="gallery-preview">
            <img src="/media/DSC06038-opt.jpg" alt="Daycare activity 1" loading="lazy" />
            <img src="/media/DSC06042-opt.jpg" alt="Daycare activity 2" loading="lazy" />
            <img src="/media/DSC06066-opt.jpg" alt="Daycare activity 3" loading="lazy" />
            <img src="/media/DSC06070-opt.jpg" alt="Daycare activity 4" loading="lazy" />
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/gallery" className="btn btn-primary">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="home-faq" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Floating WOW Icons */}
        <img src="/media/story_animation_1-1.png" alt="" className="floating-icon delay-1" style={{ top: '10%', left: '2%', width: '80px', opacity: 0.4, zIndex: 0 }} />
        <img src="/media/story_animation_2-1.png" alt="" className="floating-icon delay-2" style={{ top: '30%', right: '2%', width: '70px', opacity: 0.4, zIndex: 0 }} />
        <img src="/media/story_animation_3-1.png" alt="" className="floating-icon delay-3" style={{ bottom: '20%', left: '3%', width: '90px', opacity: 0.4, zIndex: 0 }} />
        <img src="/media/story_animation_4.png" alt="" className="floating-icon delay-4" style={{ bottom: '15%', right: '5%', width: '85px', opacity: 0.4, zIndex: 0 }} />
        <img src="/media/Graphic.png" alt="" className="floating-icon delay-2" style={{ top: '50%', left: '4%', width: '120px', opacity: 0.3, zIndex: 0 }} />
        <img src="/media/OBJECTS.png" alt="" className="floating-icon delay-1" style={{ top: '70%', right: '3%', width: '100px', opacity: 0.3, zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="section-header text-center" style={{ textAlign: 'center', margin: '0 auto 40px', maxWidth: '800px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '15px' }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Everything you need to know about our daycare.</p>
          </div>
          <div className="faq-list">
            {[
              { q: "Do you offer subsidies?", a: "Yes! We are a fully licensed facility, which means families may be eligible for the Alberta Child Care Subsidy and the Federal-Provincial Child Care Grant (Affordability Grant). We are happy to assist you with the information needed for your application to help make quality childcare affordable." },
              { q: "What is your staff-to-child ratio?", a: "We strictly adhere to (and often exceed) the licensing standards set by the Province of Alberta. This ensures that every child receives the individual attention, supervision, and care they deserve." },
              { q: "Are meals and snacks provided?", a: "Yes. We provide nutritious, kid-friendly snacks throughout the day. Our menus are designed to meet Canada’s Food Guide requirements, focusing on fresh fruits, vegetables, whole grains, and proteins." },
              { q: "What is your 'Sick Child' policy?", a: "The health and safety of our community are paramount. To prevent the spread of illness, we ask that children who have a fever, undiagnosed rash, or persistent cough stay home until they are symptom-free for 24 hours." },
              { q: "How do you handle transition or 'separation anxiety' for new children?", a: "We know that the first few days can be emotional. We encourage a 'gradual entry' process where your child can visit for shorter periods to get comfortable. Our educators are experts at soothing transitions." },
              { q: "Is your facility secure?", a: "Absolutely. Safety is our #1 priority. Our center features secure, monitored entry points. Only authorized parents, guardians, and staff are permitted access." }
            ].map((faq, idx) => (
              <details key={idx} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

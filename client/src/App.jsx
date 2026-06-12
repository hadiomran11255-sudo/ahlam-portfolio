import { motion } from 'framer-motion';
import {
  Camera,
  Mail,
  MapPin,
  Phone,
  PlayCircle,
  Sparkles
} from 'lucide-react';
import { photoWork, profile, services, videoWork } from './portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function MediaCard({ item, type }) {
  const isVideo = type === 'video';

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="media-card"
    >
      {type === 'photo' && item.image ? (
        <img src={item.image} alt={item.title} className="media-image" />
      ) : isVideo && item.videoUrl ? (
        <video src={item.videoUrl} controls className="media-image">
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="media-placeholder">
          {isVideo ? <PlayCircle size={38} /> : <Camera size={38} />}
          <span>{isVideo ? 'Video placeholder' : 'Photo placeholder'}</span>
        </div>
      )}

      <div className="media-body">
        <p className="eyebrow">{item.category}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </motion.article>
  );
}

function App() {
  const hasRealEmail = profile.email && !profile.email.toLowerCase().includes('add your email');
  const mailSubject = encodeURIComponent('Portfolio Inquiry - Ahlam Cheryala');
  const mailBody = encodeURIComponent(
    'Hello Ahlam,\n\nI viewed your portfolio and would like to contact you.\n\n'
  );
  const contactHref = hasRealEmail
    ? `mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`
    : '#contact';

  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="brand">AC</a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-bg-glow" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="hero-content"
        >
          <p className="eyebrow">Wedding Experience & Venue Coordination</p>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="hero-text">{profile.intro}</p>

          <div className="hero-actions">
            <a href="#work" className="btn primary">Explore Portfolio</a>
            <a href={contactHref} className="btn secondary">Start a Conversation</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="hero-card signature-card"
        >
          <Sparkles size={34} />
          <p className="mini-label">Portfolio Focus</p>
          <h3>Soft details. Clear timelines. Confident execution.</h3>
          <p>
            Planning support, venue styling, supplier follow-up, guest flow, and calm event-day coordination.
          </p>
        </motion.div>
      </section>

      <section id="about" className="section split-section">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Brief of My Work</p>
          <h2>Designing wedding days that feel elegant, organized, and personal.</h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="large-copy"
        >
          {profile.about}
        </motion.p>
      </section>

      <section id="work" className="section">
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>Work Highlights</h2>
     
        </div>

        <div className="subheading-row">
          <h3>Photos</h3>
         
        </div>

        <div className="media-grid">
          {photoWork.map((item) => (
            <MediaCard key={item.title} item={item} type="photo" />
          ))}
        </div>

        <div className="subheading-row video-row-title">
          <h3>Videos</h3>
          
        </div>

        <div className="media-grid two-col">
          {videoWork.map((item) => (
            <MediaCard key={item.title} item={item} type="video" />
          ))}
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">What I Handle</p>
          <h2>Wedding planning and venue management responsibilities</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <motion.div
              key={service}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="service-card"
            >
              <Sparkles size={24} />
              <span>{service}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact Me</p>
            <h2>Open to wedding, venue, and event opportunities.</h2>
           
          </div>

          <div className="contact-list">
            {hasRealEmail ? (
              <a href={`mailto:${profile.email}`}>
                <Mail size={20} /> {profile.email}
              </a>
            ) : (
              <span>
                <Mail size={20} /> {profile.email}
              </span>
            )}
            <span>
              <Phone size={20} /> {profile.phone}
            </span>
            <span>
              <Camera size={20} /> {profile.instagram}
            </span>
            <span>
              <MapPin size={20} /> {profile.location}
            </span>
          </div>

          <a href={contactHref} className="btn primary full-width">
            Contact Ahlam
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;

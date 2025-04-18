import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Blog from './Blog';
import Projects from './Projects';
import './App.css';

const PRIMARY_COLOR = '#007AFF';
const TEXT_COLOR = '#e0e0e0';
const BACKGROUND_COLOR = '#121212';
const HEADER_FOOTER_COLOR = '#1f1f1f';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

const AnimatedBox = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
    style={{
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '2rem',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: TEXT_COLOR
    }}
  >
    {children}
  </motion.div>
);

const Home = () => (
  <section
    style={{
      background: BACKGROUND_COLOR,
      padding: '60px 20px',
      color: TEXT_COLOR,
      fontFamily: 'Poppins, sans-serif'
    }}
  >
    <AnimatedBox>
      <h2 style={{ fontSize: '2rem' }}>About Me</h2>
      <p>Master's student at UT Austin by day. Tech enthusiast at night.</p>
      <p>Started with Halo and a love for gaming, ended up in machine learning and AI research.</p>
      <p>Now, I focus on developing intelligent systems and exploring how AI can drive innovation and improve everyday life.</p>
    </AnimatedBox>

    <AnimatedBox>
      <h2 style={{ marginTop: '1rem' }}>Proficiencies</h2>
      <ul className="skills-list">
        <li><strong>Languages:</strong> Python, JavaScript, C++, Java</li>
        <li><strong>AI/ML:</strong> scikit-learn, PyTorch, TensorFlow, Keras, NumPy, pandas, Matplotlib</li>
        <li><strong>Cybersecurity:</strong> Wireshark, Metasploit, Kali Linux, Nmap</li>
        <li><strong>Web:</strong> HTML, CSS, React, Node.js, Flask</li>
        <li><strong>Databases:</strong> MySQL, MongoDB, SQLite</li>
        <li><strong>Tools:</strong> Git, GitHub, Jupyter Notebooks, VS Code</li>
        <li><strong>Cloud:</strong> AWS, Google Colab</li>
      </ul>
    </AnimatedBox>

    <AnimatedBox>
      <h2>Hackathon Winner</h2>
      <p>I'm excited to share that my team and I recently won a hackathon with an innovative "brainrot" twist to applying to internships. Click below to explore the details of this award-winning project!</p>
      <Link to="/projects"><button style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: PRIMARY_COLOR, border: 'none', color: '#fff', fontWeight: 'bold' }}>Learn More</button></Link>
    </AnimatedBox>

    <AnimatedBox>
      <h2>Check out the latest blog posts on AI below!</h2>
      <div className="blog-container" id="blog-container">
        {/* Blog articles will be dynamically loaded here */}
      </div>
      <Link to="/blog">
        <button style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: PRIMARY_COLOR, border: 'none', color: '#fff', fontWeight: 'bold' }}>View More Articles</button>
      </Link>
    </AnimatedBox>

    <div style={{ marginTop: '3rem', color: TEXT_COLOR }}>
      <h2 id="contact">Contact Me</h2>
      <p>Email: <a href="mailto:Gabe.Cespedes11@gmail.com" style={{ color: PRIMARY_COLOR }}>Gabe.Cespedes11@gmail.com</a></p>
    </div>
  </section>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const playGruntSound = () => {
    const audio = document.getElementById("grunt-audio");
    audio.currentTime = 0;
    audio.play();
  };

  const Header = () => (
    <header style={{ backgroundColor: HEADER_FOOTER_COLOR, padding: '1rem', color: TEXT_COLOR, fontFamily: 'Poppins, sans-serif' }}>
      <h1 style={{ margin: 0 }}>Gabriel Cespedes</h1>
      <p style={{ margin: '0.5rem 0' }}>Artificial Intelligence | Machine Learning | Cybersecurity</p>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <li><Link style={{ color: PRIMARY_COLOR, textDecoration: 'none' }} to="/">Home</Link></li>
          <li><Link style={{ color: PRIMARY_COLOR, textDecoration: 'none' }} to="/projects">Projects</Link></li>
          <li><Link style={{ color: PRIMARY_COLOR, textDecoration: 'none' }} to="/blog">Blog</Link></li>
          <li><a style={{ color: PRIMARY_COLOR, textDecoration: 'none' }} href="/#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );

  const Footer = () => (
    <footer style={{ backgroundColor: HEADER_FOOTER_COLOR, color: TEXT_COLOR, padding: '1rem', textAlign: 'center' }}>
      <p>&copy; 2025 Gabriel Cespedes</p>
    </footer>
  );

  return (
    <Router>
      <div className="App" style={{ backgroundColor: BACKGROUND_COLOR, minHeight: '100vh' }}>
        <Header />
        <AnimatedRoutes />
        <button id="grunt-button" onClick={playGruntSound} style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: PRIMARY_COLOR, border: 'none', borderRadius: '50%', padding: '12px', fontSize: '1.5rem', cursor: 'pointer', color: '#fff' }}>
          <span role="img" aria-label="party popper">🎉</span>
        </button>
        <audio id="grunt-audio">
          <source src={`${process.env.PUBLIC_URL}/grunt-birthday-party.mp3`} type="audio/mpeg" />
        </audio>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
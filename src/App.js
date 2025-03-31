import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Blog from './Blog';
import Projects from './Projects';

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

const Home = () => (
  <>
    <>
      <section id="about">
        <h2>About Me</h2>
        <p>Master's student at UT Austin by day. Tech enthusiast at night.</p>
        <p>Started with Halo and a love for gaming, ended up in machine learning and AI research.</p>
        <p>Now, I focus on developing intelligent systems and exploring how AI can drive innovation and improve everyday life.</p>

        <h2>Proficiencies</h2>
        <ul className="skills-list">
          <li><strong>Languages:</strong> Python, JavaScript, C++, Java</li>
          <li><strong>AI/ML:</strong> scikit-learn, PyTorch, TensorFlow, Keras, NumPy, pandas, Matplotlib</li>
          <li><strong>Cybersecurity:</strong> Wireshark, Metasploit, Kali Linux, Nmap</li>
          <li><strong>Web:</strong> HTML, CSS, React, Node.js, Flask</li>
          <li><strong>Databases:</strong> MySQL, MongoDB, SQLite</li>
          <li><strong>Tools:</strong> Git, GitHub, Jupyter Notebooks, VS Code</li>
          <li><strong>Cloud:</strong> AWS, Google Colab</li>
        </ul>
      </section>

      <section id="projects-preview">
        <h2>Hackathon Winner</h2>
        <p>I'm excited to share that my team and I recently won a hackathon with an innovative "brainrot" twist to applying to internships. Click below to explore the details of this award-winning project!</p>
        <Link to="/projects"><button>Learn More</button></Link>
      </section>

      <section id="blog">
        <h2>Check out the latest blog posts on AI below!</h2>
        <div className="blog-container" id="blog-container">
          {/* Blog articles will be dynamically loaded here */}
        </div>
        <Link to="/blog" className="btn">View More Articles</Link>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:Gabe.Cespedes11@gmail.com">Gabe.Cespedes11@gmail.com</a></p>
      </section>
    </>
  </>
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
    <header>
      <h1>Gabriel Cespedes</h1>
      <p>Artificial Intelligence | Machine Learning | Cybersecurity</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );

  const Footer = () => (
    <footer>
      <p>&copy; 2025 Gabriel Cespedes</p>
    </footer>
  );

  return (
    <Router>
      <div className="App">
        <Header />
        <AnimatedRoutes />
        <button id="grunt-button" onClick={playGruntSound}>
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

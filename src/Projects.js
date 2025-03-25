import React from 'react';
import './App.css'; 

function ProjectsPage() {
  return (
    <div>
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-container">

          <article className="project-item highlight">
            <h3>Brainrot Jia SEED Hackathon Winner (2024)</h3>
            <img src="images/hackathon-award.jpg" alt="Brainrot Hackathon Award" />
            <ul>
              <li>Developed a creative solution to streamline internship applications using API calls, web scraping, and automation.</li>
              <li>Earned top accolades with awards like “Memenome Best Don Pollo-themed Hack” and “This Project is Awesome.”</li>
            </ul>
            <ul>
              <li><strong>Technologies:</strong> API Integration, Web Scraping, Automation</li>
              <li><strong>Awards:</strong> Hackathon Winner, Memenome Best Don Pollo-themed Hack, This Project is Awesome</li>
            </ul>
            <a href="https://wercooked.com/" className="btn">Learn More</a>
          </article>

          <article className="project-item">
            <h3>Deep Residual MLP Classifier</h3>
            <ul>
              <li>Engineered a PyTorch model with residual connections achieving 84% validation accuracy.</li>
              <li>Optimized with data augmentation to boost efficiency by 30%.</li>
            </ul>
          </article>

          {/* Add other projects similarly */}
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Gabriel Cespedes</p>
      </footer>
    </div>
  );
}

export default ProjectsPage;

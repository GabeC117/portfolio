import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

const PRIMARY_COLOR = '#007AFF';
const TEXT_COLOR = '#e0e0e0';
const BACKGROUND_COLOR = '#121212';

const projects = [
  {
    title: "Brainrot Jia SEED Hackathon Winner (2024)",
    description: [
      "Developed a creative solution to streamline internship applications using API calls, web scraping, and automation.",
      "Earned top accolades with awards like “Memenome Best Don Pollo-themed Hack” and “This Project is Awesome.”"
    ],
    tech: "API Integration, Web Scraping, Automation",
    awards: "Hackathon Winner, Memenome Best Don Pollo-themed Hack, This Project is Awesome",
    link: "https://wercooked.com/",
  },
  {
    title: "SuperTuxKart Deep Image Classifier",
    description: [
      "Designed and implemented a convolutional classifier for the SuperTuxKart dataset using PyTorch, achieving >90% accuracy across 6 object classes.",
      "Leveraged data augmentation, classification loss functions, and TensorBoard logging to monitor training and validate performance."
    ],
    tech: "PyTorch, Convolutional Neural Networks, Data Augmentation, TensorBoard"
  },
  {
    title: "Multi-task U-Net for Road Segmentation and Depth Estimation",
    description: [
      "Developed a multi-task U-Net model in PyTorch for semantic segmentation and depth estimation, achieving mIoU > 75% and depth MAE < 0.05.",
      "Built an end-to-end training pipeline with advanced data augmentation, skip connections, and TensorBoard monitoring."
    ],
    tech: "PyTorch, U-Net, Semantic Segmentation, Depth Estimation, TensorBoard"
  },
  {
    title: "Deep Residual MLP Classifier for Image Classification",
    description: [
      "Developed a PyTorch-based MLP with residual connections, reaching 84% validation accuracy.",
      "Boosted training efficiency by 30% via data augmentation and preprocessing techniques."
    ],
    tech: "PyTorch, MLP, Residual Connections, Data Augmentation"
  },
  {
    title: "Kernel Regression with Gaussian RBF Kernel",
    description: [
      "Built a regression model with Gaussian RBF and 5-fold CV, improving test accuracy by 20%.",
      "Applied the median trick, reducing compute time by 15%."
    ],
    tech: "Gaussian RBF, Kernel Methods, Cross-Validation, Optimization"
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{
      background: BACKGROUND_COLOR,
      padding: '60px 20px',
      color: TEXT_COLOR,
      fontFamily: 'Poppins, sans-serif'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Projects</h2>
      <div className="projects-container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {projects.map((project, index) => (
          <motion.div
            className="project-item"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '16px 20px',
              fontSize: '0.95rem',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              transition: 'transform 0.3s ease',
              color: TEXT_COLOR
            }}
          >
            <h3 style={{ color: '#fff', fontSize: '1.2rem' }}>{project.title}</h3>
            <ul>
              {project.description.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
            {project.tech && <p><strong>Technologies:</strong> {project.tech}</p>}
            {project.awards && <p><strong>Awards:</strong> {project.awards}</p>}
            {project.link && <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: PRIMARY_COLOR, color: '#fff', padding: '8px 12px', borderRadius: '6px', display: 'inline-block', marginTop: '10px', textDecoration: 'none', fontWeight: 'bold' }}>Learn More</a>}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

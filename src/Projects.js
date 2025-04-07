import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

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
      background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
      padding: '60px 20px',
      color: 'white',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Projects</h2>
      <div className="projects-container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {projects.map((project, index) => (
          <motion.div
            className="project-item"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.18)'
            }}
          >
            <h3 style={{ color: '#fff' }}>{project.title}</h3>
            <ul>
              {project.description.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
            {project.tech && <p><strong>Technologies:</strong> {project.tech}</p>}
            {project.awards && <p><strong>Awards:</strong> {project.awards}</p>}
            {project.link && <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">Learn More</a>}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

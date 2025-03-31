import React from 'react';
import './App.css';

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
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <article className="project-item" key={index}>
            <h3>{project.title}</h3>
            <ul>
              {project.description.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
            {project.tech && <p><strong>Technologies:</strong> {project.tech}</p>}
            {project.awards && <p><strong>Awards:</strong> {project.awards}</p>}
            {project.link && <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">Learn More</a>}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
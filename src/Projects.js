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
    title: "Waypoint Prediction for Self-Driving Cars using MLP and Transformer Models",
    description: [
      "Engineered PyTorch-based models (MLP, Transformer) for autonomous trajectory prediction using structured ETL pipelines with custom preprocessing logic and positional encodings.",
      "Implemented model tuning with custom L1 loss and learning rate scheduling, optimizing data accuracy and reducing simulation error."
    ],
    tech: "PyTorch, Transformers, MLP, Positional Encoding, Learning Rate Scheduling",
    video: "9C00SBgzXFw"
  },
  {
    title: "AI-Driven Plan of Care for Occupational and Physical Therapists",
    description: [
      "Developed a clinical support tool using OpenAI's GPT-4o and GPT-4o-mini to generate structured Plans of Care (PoCs) from therapist evaluation notes, improving clarity, specificity, and adherence to treatment protocols.",
      "Evaluated five prompt engineering strategies across two AI models, creating an automated auditing framework to score outputs on seven clinical metrics; results informed best practices for integrating LLMs into healthcare documentation workflows."
    ],
    tech: "OpenAI GPT-4o, Prompt Engineering, AI in Healthcare"
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
  }
];

const Projects = () => (
  <section
    id="projects"
    style={{
      background: BACKGROUND_COLOR,
      padding: '60px 20px',
      color: TEXT_COLOR,
      fontFamily: 'Poppins, sans-serif'
    }}
  >
    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Projects</h2>
    <div
      className="projects-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}
    >
      {projects.map(({ title, description, tech, awards, video, link }, index) => (
        <motion.div
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
          <h3 style={{ color: '#fff', fontSize: '1.2rem' }}>{title}</h3>
          <ul>{description.map((point, i) => <li key={i}>{point}</li>)}</ul>
          {tech && <p><strong>Technologies:</strong> {tech}</p>}
          {awards && <p><strong>Awards:</strong> {awards}</p>}
          {video && (
            <div style={{ marginTop: '1rem' }}>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${video}`}
                title="YouTube video demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '8px' }}
              ></iframe>
            </div>
          )}
          {link && (
            <a
              href={link}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: PRIMARY_COLOR,
                color: '#fff',
                padding: '8px 12px',
                borderRadius: '6px',
                display: 'inline-block',
                marginTop: '10px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Learn More
            </a>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;

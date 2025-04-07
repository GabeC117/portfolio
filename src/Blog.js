import React, { useEffect } from 'react';

function BlogPage() {
  useEffect(() => {
    const blogContainer = document.getElementById("blog-container");

    async function fetchArticles() {
      const sources = [
        "https://api.rss2json.com/v1/api.json?rss_url=https://arxiv.org/rss/cs.AI",
        "https://api.rss2json.com/v1/api.json?rss_url=https://towardsdatascience.com/feed"
      ];

      try {
        let articles = [];
        for (const source of sources) {
          const response = await fetch(source);
          const data = await response.json();
          if (data.items) {
            articles = articles.concat(data.items);
          }
        }

        articles.slice(0, 11).forEach(article => {
          const articleElement = document.createElement("div");
          articleElement.classList.add("blog-post");
          articleElement.style = `
            background: rgba(255, 255, 255, 0.08);
            color: white;
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 2rem;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.18);
          `;
          articleElement.innerHTML = `
            <h3><a href="${article.link}" target="_blank" style="color: #80d0c7; text-decoration: none;">${article.title}</a></h3>
          `;
          blogContainer.appendChild(articleElement);
        });
      } catch (err) {
        blogContainer.innerHTML = "<p style='color:white;'>Failed to load articles.</p>";
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <section id="blog" style={{
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        padding: '60px 20px',
        color: 'white',
        fontFamily: 'Poppins, sans-serif'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Latest AI Articles</h2>
        <div className="blog-container" id="blog-container" style={{ maxWidth: '800px', margin: '0 auto' }}></div>
      </section>

      <section id="contact" style={{
        background: '#0f2027',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center',
        fontFamily: 'Poppins, sans-serif'
      }}>
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:Gabe.Cespedes11@gmail.com" style={{ color: '#80d0c7' }}>Gabe.Cespedes11@gmail.com</a></p>
      </section>

      <footer style={{
        background: '#203a43',
        color: 'white',
        padding: '10px',
        textAlign: 'center'
      }}>
        <p>&copy; 2025 Gabriel Cespedes</p>
      </footer>
    </div>
  );
}

export default BlogPage;
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
          articleElement.innerHTML = `
            <h3><a href="${article.link}" target="_blank">${article.title}</a></h3>
          `;
          blogContainer.appendChild(articleElement);
        });
      } catch (err) {
        blogContainer.innerHTML = "<p>Failed to load articles.</p>";
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <section id="blog">
        <h2>Latest AI Articles</h2>
        <div className="blog-container" id="blog-container"></div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:Gabe.Cespedes11@gmail.com">Gabe.Cespedes11@gmail.com</a></p>
      </section>

      <footer>
        <p>&copy; 2025 Gabriel Cespedes</p>
      </footer>
    </div>
  );
}

export default BlogPage;

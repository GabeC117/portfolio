document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("#nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});


//For blog.html
document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");
    const isBlogPage = window.location.pathname.includes("blog.html");
    const articleLimit = isBlogPage ? 11 : 5;

    async function fetchArticles() {
        const sources = [
            "https://api.rss2json.com/v1/api.json?rss_url=https://arxiv.org/rss/cs.AI",
            "https://api.rss2json.com/v1/api.json?rss_url=https://www.technologyreview.com/feed/",
            "https://api.rss2json.com/v1/api.json?rss_url=https://ai.googleblog.com/feeds/posts/default",
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
            
            // Sort articles by publication date (newest first)
            articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
            
            // Display limited number of articles
            articles.slice(0, articleLimit).forEach(article => {
                const articleElement = document.createElement("div");
                articleElement.classList.add("blog-post");
                articleElement.innerHTML = `
                    <h3><a href="${article.link}" target="_blank">${article.title}</a></h3>
                `;
                blogContainer.appendChild(articleElement);
            });
        } catch (error) {
            console.error("Error fetching articles:", error);
            blogContainer.innerHTML = "<p>Failed to load articles.</p>";
        }
    }

    fetchArticles();
});

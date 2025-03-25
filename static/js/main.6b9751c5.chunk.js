(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),o=(a(17),a(7),a(3)),i=a(1);var s=function(){return Object(n.useEffect)(()=>{const e=document.getElementById("blog-container");!async function(){const t=["https://api.rss2json.com/v1/api.json?rss_url=https://arxiv.org/rss/cs.AI","https://api.rss2json.com/v1/api.json?rss_url=https://towardsdatascience.com/feed"];try{let n=[];for(const e of t){const t=await fetch(e),a=await t.json();a.items&&(n=n.concat(a.items))}n.slice(0,11).forEach(t=>{const a=document.createElement("div");a.classList.add("blog-post"),a.innerHTML=`\n            <h3><a href="${t.link}" target="_blank">${t.title}</a></h3>\n          `,e.appendChild(a)})}catch(a){e.innerHTML="<p>Failed to load articles.</p>"}}()},[]),l.a.createElement("div",null,l.a.createElement("section",{id:"blog"},l.a.createElement("h2",null,"Latest AI Articles"),l.a.createElement("div",{className:"blog-container",id:"blog-container"})),l.a.createElement("section",{id:"contact"},l.a.createElement("h2",null,"Contact Me"),l.a.createElement("p",null,"Email: ",l.a.createElement("a",{href:"mailto:Gabe.Cespedes11@gmail.com"},"Gabe.Cespedes11@gmail.com"))),l.a.createElement("footer",null,l.a.createElement("p",null,"\xa9 2025 Gabriel Cespedes")))};var m=function(){return l.a.createElement("div",null,l.a.createElement("section",{id:"projects"},l.a.createElement("h2",null,"Projects"),l.a.createElement("div",{className:"projects-container"},l.a.createElement("article",{className:"project-item highlight"},l.a.createElement("h3",null,"Brainrot Jia SEED Hackathon Winner (2024)"),l.a.createElement("img",{src:"images/hackathon-award.jpg",alt:"Brainrot Hackathon Award"}),l.a.createElement("ul",null,l.a.createElement("li",null,"Developed a creative solution to streamline internship applications using API calls, web scraping, and automation."),l.a.createElement("li",null,"Earned top accolades with awards like \u201cMemenome Best Don Pollo-themed Hack\u201d and \u201cThis Project is Awesome.\u201d")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Technologies:")," API Integration, Web Scraping, Automation"),l.a.createElement("li",null,l.a.createElement("strong",null,"Awards:")," Hackathon Winner, Memenome Best Don Pollo-themed Hack, This Project is Awesome")),l.a.createElement("a",{href:"https://wercooked.com/",className:"btn"},"Learn More")),l.a.createElement("article",{className:"project-item"},l.a.createElement("h3",null,"Deep Residual MLP Classifier"),l.a.createElement("ul",null,l.a.createElement("li",null,"Engineered a PyTorch model with residual connections achieving 84% validation accuracy."),l.a.createElement("li",null,"Optimized with data augmentation to boost efficiency by 30%."))))),l.a.createElement("footer",null,l.a.createElement("p",null,"\xa9 2025 Gabriel Cespedes")))};var u=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(()=>l.a.createElement("header",null,l.a.createElement("h1",null,"Gabriel Cespedes"),l.a.createElement("p",null,"Artificial | Machine Learning | Cybersecurity"),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/projects"},"Projects")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/blog"},"Blog")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#contact"},"Contact"))))),null),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",element:l.a.createElement(()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"about"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"Master's student at UT Austin by day. Tech enthusiast at night."),l.a.createElement("p",null,"Started with Halo and a love for gaming, ended up in machine learning and AI research."),l.a.createElement("p",null,"Now, I focus on developing intelligent systems and exploring how AI can drive innovation and improve everyday life."),l.a.createElement("h2",null,"Proficiencies"),l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",null,l.a.createElement("strong",null,"Languages:")," Python, JavaScript, C++, Java"),l.a.createElement("li",null,l.a.createElement("strong",null,"AI/ML:")," scikit-learn, PyTorch, TensorFlow, Keras, NumPy, pandas, Matplotlib"),l.a.createElement("li",null,l.a.createElement("strong",null,"Cybersecurity:")," Wireshark, Burp Suite, Metasploit, Kali Linux, Nessus, Nmap"),l.a.createElement("li",null,l.a.createElement("strong",null,"Web:")," HTML, CSS, React, Node.js, Flask"),l.a.createElement("li",null,l.a.createElement("strong",null,"Databases:")," MySQL, MongoDB, SQLite"),l.a.createElement("li",null,l.a.createElement("strong",null,"Tools:")," Git, GitHub, Jupyter Notebooks, VS Code, Postman, Docker (basics)"),l.a.createElement("li",null,l.a.createElement("strong",null,"Cloud:")," AWS (basic EC2/S3), Google Colab"))),l.a.createElement("section",{id:"projects-preview"},l.a.createElement("h2",null,"Hackathon Winner"),l.a.createElement("p",null,'I\'m excited to share that my team and I recently won a hackathon with an innovative "brainrot" twist to applying to internships. Click below to explore the details of this award-winning project!'),l.a.createElement(o.b,{to:"/projects"},l.a.createElement("button",null,"Learn More"))),l.a.createElement("section",{id:"blog"},l.a.createElement("h2",null,"Check out the latest blog posts on AI below!"),l.a.createElement("div",{className:"blog-container",id:"blog-container"}),l.a.createElement(o.b,{to:"/blog",className:"btn"},"View More Articles")),l.a.createElement("section",{id:"contact"},l.a.createElement("h2",null,"Contact Me"),l.a.createElement("p",null,"Email: ",l.a.createElement("a",{href:"mailto:Gabe.Cespedes11@gmail.com"},"Gabe.Cespedes11@gmail.com")))),null)}),l.a.createElement(i.a,{path:"/projects",element:l.a.createElement(m,null)}),l.a.createElement(i.a,{path:"/blog",element:l.a.createElement(s,null)})),l.a.createElement("button",{id:"grunt-button",onClick:()=>{const e=document.getElementById("grunt-audio");e.currentTime=0,e.play()}},"\ud83c\udf89"),l.a.createElement("audio",{id:"grunt-audio"},l.a.createElement("source",{src:"/portfolio/grunt-birthday-party.mp3",type:"audio/mpeg"})),l.a.createElement(()=>l.a.createElement("footer",null,l.a.createElement("p",null,"\xa9 2025 Gabriel Cespedes")),null)))};var E=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),E()},7:function(e,t,a){},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.6b9751c5.chunk.js.map
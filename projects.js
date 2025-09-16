// 定义项目数组
const projects = [
  // proj 1
  {
    title: "AI Chatbot initiatives",
    img: "/assets/img/project-AI-chatbot.avif",
    desc: "A Toronto Hydro version ChatGPT 🐚",
    skills: "Cross-Functional Collaboration, Process Documentation, AI Testing & Validation",
    accomplishments: [
      "Validated AI chatbot responses against safety documents to identify mismatches and improve accuracy."
    ]
  },
  // proj 2
  {
    title: "Mapper",
    img: "/assets/img/project-mapper.webp",
    desc: "An interactive map based on EZGL and C++",
    skills: "C++, Git, Linux environments",
    accomplishments: [
      "basic searching functionality (intersections, roads), Different themes (light, dark), New user tutorial guide, Simple navigation (shows the path and directions)."
    ]
  },
  // proj 3
  {
    title: "Sentiment Analysis",
    img: "/assets/img/project-sentiment.jpg",
    desc: "A simple application to evaluate the emotions behind text 🫧",
    skills: "Python (PyTorch), Google Colab",
    accomplishments: [
      "Users could enter a sentence in the input prompt line, and the system will return the most related emtions out of neutral, positive, and negative."
    ]
  },
  // proj 4
  {
    title: "Automatic Essay Scoring",
    img: "/assets/img/project-aim_bert-bias.png",
    desc: "cross-prompt automated essay scoring.",
    skills: "Python, LLM, beautifulsoup",
    accomplishments: [
      "It developed a Python-based tool leveraging natural language processing for efficient essay evaluation. The system provides objective essay scores and auto-generates feedback, reducing manual assessment time, enhancing grading consistency, and offering actionable insights for writers to improve their content. The idea of this project is based on the original model of GPT-2 and GPT-3 and diffusion model."
    ]
  }
];

// generate card
function createProjectCard(p) {
  return `
    <div class="col s12 m6 l4">
      <div class="card medium cream-card">
        <div class="card-image waves-effect waves-block waves-light">
          <img alt="${p.title}" src="${p.img}" style="height: 100%; object-fit: cover;">
        </div>
        <div class="card-content">
          <span class="card-title activator teal-text hoverline">
            ${p.title}
            <i class="mdi-navigation-more-vert right"></i>
          </span>
          <p>${p.desc}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text">
            <small>Accomplishments</small>
            <i class="mdi-navigation-close right"></i>
          </span>
          <ul>
            <li><b>Skills:</b> ${p.skills}</li>
            ${p.accomplishments.map(a => `<li>${a}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
}

// when loading put into html
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("recent-projects");
  container.innerHTML = projects.map(p => createProjectCard(p)).join("");
});

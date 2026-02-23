import { Workflow, Leaf, BotMessageSquare, Code2 } from 'lucide-react'
import './Projects.css'

const projects = [
    {
        icon: <Workflow strokeWidth={1.5} size={64} />,
        title: 'Harmonic Halo – Enterprise Workflow Management',
        tags: ['MERN', 'Socket.IO', 'Redis', 'Docker', 'AWS EC2'],
        desc: 'Built a multi-role SaaS platform with RESTful APIs, real-time collaboration via Socket.IO, and an AI Assistant module with trigger-based workflow automation. Implemented enterprise features including analytics dashboards, workload bottleneck detection, time tracking, and webhook integrations, deployed on AWS EC2 with Docker and Nginx.',
        github: 'https://github.com/Jeyasaravanan18',
        live: null,
    },
    {
        icon: <Leaf strokeWidth={1.5} size={64} />,
        title: 'AyurHeal – Ayurvedic Medication Recommendation',
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        desc: 'Designed RESTful backend services and database schemas to support a recommendation workflow for Ayurvedic medications. Implemented business logic and data handling suitable for real-world healthcare use cases using the full MERN stack.',
        github: 'https://github.com/Jeyasaravanan18',
        live: null,
    },
    {
        icon: <BotMessageSquare strokeWidth={1.5} size={64} />,
        title: 'Academic Chatbot',
        tags: ['JavaScript', 'NLP', 'Backend APIs', 'AI Services'],
        desc: 'Built an intent-based chatbot demonstrating exposure to AI-driven applications and API integration. Leverages NLP concepts and API-based AI services to answer academic queries with contextual understanding.',
        github: 'https://github.com/Jeyasaravanan18',
        live: null,
    },
    {
        icon: <Code2 strokeWidth={1.5} size={64} />,
        title: 'Online Code Editor',
        tags: ['React.js', 'JavaScript', 'HTML', 'CSS'],
        desc: 'Developed a browser-based code editor focusing on modular components, real-time UI logic, and clean software architecture. Supports live preview and syntax highlighting for a seamless in-browser coding experience.',
        github: 'https://github.com/Jeyasaravanan18',
        live: null,
    },
]

const certifications = [
    { name: 'Oracle Cloud Infrastructure', issuer: 'Oracle', year: '2025' },
    { name: 'AWS Solutions Architecture Job Simulation', issuer: 'Forage', year: '2025' },
    { name: 'Data Analytics Job Simulation', issuer: 'Forage', year: '2025' },
]

const Projects = () => {
    return (
        <section id="projects">
            <div className="projects-masthead">
                <div className="projects-masthead-meta">
                    <span>Vol. 1</span>
                    <span>The Developer Gazette</span>
                    <span>Est. 2023</span>
                </div>
                <h2 className="projects-main-title">Featured Works</h2>
                <p className="projects-quote">
                    "A collection of fine engineering and digital craftsmanship for the modern era."
                </p>
            </div>

            <hr className="projects-rule" />

            <div className="projects-grid">
                {projects.map((project, i) => (
                    <div className="project-card" key={i}>
                        <div className="project-img-wrap">
                            <div className="project-img-placeholder">{project.icon}</div>
                        </div>

                        <div className="project-tags">
                            {project.tags.map((tag, j) => (
                                <span className="project-tag" key={j}>{tag}</span>
                            ))}
                        </div>

                        <h3 className="project-title">{project.title}</h3>

                        <p className="project-desc">{project.desc}</p>

                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                                GitHub ↗
                            </a>
                            {project.live && (
                                <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                                    Live Demo ↗
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Certifications */}
            <div className="certifications-section">
                <div className="certifications-title">Certifications</div>
                <hr className="projects-rule" />
                <div className="certifications-grid">
                    {certifications.map((cert, i) => (
                        <div className="cert-card" key={i}>
                            <span className="cert-icon">🏅</span>
                            <div>
                                <div className="cert-name">{cert.name}</div>
                                <div className="cert-meta">{cert.issuer} · {cert.year}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

import { Code, Layout, Database, Cloud, Sparkles, Terminal } from 'lucide-react'
import './SkillTree.css'

const skillCategories = [
    {
        title: 'Programming & Backend',
        icon: <Code size={32} />,
        skills: ['Python', 'Java', 'JavaScript', 'Node.js', 'Express.js', 'REST API Development'],
    },
    {
        title: 'Frontend',
        icon: <Layout size={32} />,
        skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'Component Architecture'],
    },
    {
        title: 'Databases & Data',
        icon: <Database size={32} />,
        skills: ['MongoDB', 'MySQL', 'SQL', 'Data Modeling', 'Query Optimization', 'Mongoose ODM'],
    },
    {
        title: 'Cloud & DevOps',
        icon: <Cloud size={32} />,
        skills: ['AWS (EC2, S3, basics)', 'Docker', 'Jenkins (CI/CD)', 'Nginx', 'Redis', 'Linux'],
    },
    {
        title: 'AI & Automation',
        icon: <Sparkles size={32} />,
        skills: ['AI-powered Chatbots', 'API-based AI Services', 'GenAI Exposure', 'NLP Concepts', 'Socket.IO', 'Webhook Integrations'],
    },
    {
        title: 'Tools & Practices',
        icon: <Terminal size={32} />,
        skills: ['Git & GitHub', 'Postman', 'Agile Development', 'Debugging', 'Problem Solving', 'Swagger / API Docs'],
    },
]

const Skills = () => {
    return (
        <section id="skills">
            <div className="skills-inner">
                <div className="skills-header">
                    <h2 className="skills-main-title">Technical Expertise</h2>
                    <p className="skills-sub-label">Premium Quality • Established 2023</p>
                </div>
                <hr className="skills-rule" />

                <div className="skills-grid">
                    {skillCategories.map((cat, i) => (
                        <div className="skill-card" key={i}>
                            <div className="skill-card-icon">{cat.icon}</div>
                            <div className="skill-card-title">{cat.title}</div>
                            <span className="skill-card-accent"></span>
                            <ul className="skill-list">
                                {cat.skills.map((skill, j) => (
                                    <li key={j}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills

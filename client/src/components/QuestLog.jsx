import { Briefcase, BookOpen, Zap, Rocket } from 'lucide-react'
import './QuestLog.css'

const journeyData = [
    {
        year: 'INTERN\n2025',
        icon: <Briefcase size={24} />,
        title: 'Web Development Intern',
        label: 'Prodigy Infotech (Virtual) · Jun – Jul 2025',
        desc: 'Developed frontend and backend modules using modern JavaScript frameworks and REST APIs. Assisted in database integration, API testing, debugging, and performance improvements.',
        highlights: [
            'Built frontend & backend modules with JS frameworks',
            'REST API development and integration',
            'Database integration, debugging & performance tuning',
        ],
    },
    {
        year: 'FIRST\nYEAR',
        icon: <BookOpen size={24} />,
        title: 'The Beginning',
        label: 'Entered Engineering with Curiosity · 2023',
        desc: 'Started exploring HTML, CSS, React, and Node.js at National Engineering College, Kovilpatti. Built my first portfolio and began experimenting with UI design and full-stack concepts.',
        highlights: [
            'First portfolio website',
            'Introduction to frontend development',
            'Began learning MERN stack fundamentals',
        ],
    },
    {
        year: 'SECOND\nYEAR',
        icon: <Zap size={24} />,
        title: 'Going Deeper',
        label: 'Mastering Full Stack & Cloud · 2024',
        desc: 'Dived deep into full-stack development with MongoDB, Express, React, and Node.js. Built real-world applications including an enterprise workflow management system with role-based access control, Socket.IO, and Docker.',
        highlights: [
            'Built Harmonic Halo – Enterprise SaaS on AWS EC2',
            'Learned REST API design & Socket.IO real-time features',
            'Earned Oracle Cloud & AWS Architecture certifications',
        ],
    },
    {
        year: 'THIRD\nYEAR',
        icon: <Rocket size={24} />,
        title: 'Production Ready',
        label: 'Shipping AI-Powered Products · 2025',
        desc: 'Started deploying applications to production on AWS EC2. Integrated AI features, built recommendation systems, and earned industry certifications in cloud and data analytics.',
        highlights: [
            'Deployed apps to AWS EC2 with Docker & Nginx',
            'Built AyurHeal – AI-powered healthcare recommendation',
            'Data Analytics Job Simulation – Forage (2025)',
        ],
    },
]

const Journey = () => {
    return (
        <section id="journey">
            <div className="journey-header">
                <div className="journey-title-wrap">
                    <h2 className="journey-title">My Tech Journey</h2>
                </div>
            </div>

            <div className="journey-timeline">
                {journeyData.map((item, i) => (
                    <div className="journey-item" key={i}>
                        {i % 2 === 0 ? (
                            <>
                                <div className="journey-card">
                                    <div className="journey-year-badge">
                                        {item.year.split('\n').map((line, j) => (
                                            <span key={j}>{line}</span>
                                        ))}
                                    </div>
                                    <div className="journey-card-title">{item.title}</div>
                                    <div className="journey-card-label">{item.label}</div>
                                    <p className="journey-card-desc">{item.desc}</p>
                                    <div className="journey-highlights-label">Highlights</div>
                                    <ul className="journey-highlights">
                                        {item.highlights.map((h, j) => <li key={j}>{h}</li>)}
                                    </ul>
                                </div>
                                <div className="journey-node">
                                    <div className="journey-node-inner">{item.icon}</div>
                                </div>
                                <div className="journey-spacer"></div>
                            </>
                        ) : (
                            <>
                                <div className="journey-spacer"></div>
                                <div className="journey-node">
                                    <div className="journey-node-inner">{item.icon}</div>
                                </div>
                                <div className="journey-card">
                                    <div className="journey-year-badge">
                                        {item.year.split('\n').map((line, j) => (
                                            <span key={j}>{line}</span>
                                        ))}
                                    </div>
                                    <div className="journey-card-title">{item.title}</div>
                                    <div className="journey-card-label">{item.label}</div>
                                    <p className="journey-card-desc">{item.desc}</p>
                                    <div className="journey-highlights-label">Highlights</div>
                                    <ul className="journey-highlights">
                                        {item.highlights.map((h, j) => <li key={j}>{h}</li>)}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Journey

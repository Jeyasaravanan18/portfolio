import { BrainCircuit, Bot, Cpu } from 'lucide-react'
import profilePhoto from '../assets/profile.jpg'
import './Hero.css'

const Hero = () => {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="about">
            {/* Masthead */}
            <div className="hero-masthead">
                <div className="hero-masthead-meta">
                    <span>Vol. 1 — No. 1</span>
                    <span>Kovilpatti Edition</span>
                    <span>Price: Attention</span>
                </div>
                <h1 className="hero-title">The Tech Chronicle</h1>
                <div className="hero-tagline">
                    <span>"All the Code That's Fit to Push"</span>
                    <span className="hero-tagline-dot"></span>
                    <span>Est. 2023</span>
                </div>
            </div>

            {/* Hero Body */}
            <div className="hero-body">
                {/* Left column */}
                <div className="hero-left">
                    <div>
                        <span className="hero-breaking-badge">Breaking News</span>
                    </div>

                    <h2 className="hero-headline">
                        Jeya Saravanan R<br />
                        <span className="hero-headline-accent">Redefines</span><br />
                        Engineering
                    </h2>

                    <div className="hero-content">
                        <div className="hero-photo-wrap">
                            <img
                                src={profilePhoto}
                                alt="Jeya Saravanan R"
                                className="hero-photo"
                            />
                            <span className="hero-fig-label">FIG. 1</span>
                            <p className="hero-photo-caption">Jeya Saravanan R, captured in his natural habitat.</p>
                        </div>

                        <div className="hero-text-block">
                            <p className="hero-subtitle">
                                Full Stack Developer specializing in MERN Stack, Cloud, and AI-powered solutions.
                            </p>

                            <p className="hero-description">
                                Kovilpatti — In a stunning display of digital craftsmanship, Jeya Saravanan R has emerged as a leading figure in full-stack web development. A Computer Science Engineering student at National Engineering College, he builds RESTful APIs, scalable SaaS platforms, and AI-powered applications that push the boundaries of what is possible with code.
                            </p>

                            <div className="hero-cta-row">
                                <button className="btn-primary" onClick={() => scrollTo('projects')}>
                                    View Projects →
                                </button>
                                <button className="btn-secondary" onClick={() => scrollTo('contact')}>
                                    Contact Me
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right sidebar */}
                <aside className="hero-sidebar">
                    <div className="hero-sidebar-title">Latest Inventions</div>
                    <div className="hero-sidebar-subtitle">Patents Pending</div>

                    <div className="hero-sidebar-item">
                        <BrainCircuit className="hero-sidebar-icon" size={42} strokeWidth={1.5} />
                        <div>
                            <div className="hero-sidebar-item-title">Agentic AI Systems</div>
                            <div className="hero-sidebar-item-desc">LangChain, LangGraph & Multi-Agent Orchestration.</div>
                        </div>
                    </div>

                    <div className="hero-sidebar-item">
                        <Bot className="hero-sidebar-icon" size={42} strokeWidth={1.5} />
                        <div>
                            <div className="hero-sidebar-item-title">Generative AI</div>
                            <div className="hero-sidebar-item-desc">RAG Pipelines, LLM Integration & Prompt Engineering.</div>
                        </div>
                    </div>

                    <div className="hero-sidebar-item">
                        <Cpu className="hero-sidebar-icon" size={42} strokeWidth={1.5} />
                        <div>
                            <div className="hero-sidebar-item-title">Fullstack Engineering</div>
                            <div className="hero-sidebar-item-desc">Scalable Web & Mobile App Development.</div>
                        </div>
                    </div>

                    <div className="hero-sidebar-cta">
                        <div className="hero-sidebar-cta-label">Need a Developer?</div>
                        <div className="hero-sidebar-cta-quote">"Quality Code at Reasonable Rates"</div>
                        <button className="hero-sidebar-cta-btn" onClick={() => scrollTo('contact')}>
                            Contact Now
                        </button>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default Hero

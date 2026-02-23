import { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sender: form.name,
                    message: form.message
                }),
            });

            if (response.ok) {
                setSent(true)
                setTimeout(() => setSent(false), 4000)
                setForm({ name: '', email: '', subject: '', message: '' })
            } else {
                console.error('Failed to send transmission');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    return (
        <section id="contact">
            <div className="contact-inner">
                <p className="contact-label">Get In Touch</p>
                <h2 className="contact-title">Let's Build<br />Something Great</h2>
                <hr className="contact-rule" />
                <p className="contact-desc">
                    Whether you have a project in mind, want to collaborate, or just want to say hello —
                    my inbox is always open. I'll get back to you as soon as possible.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input
                                className="form-input"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input
                                className="form-input"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="subject">Subject</label>
                        <input
                            className="form-input"
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="What's this about?"
                            value={form.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea
                            className="form-textarea"
                            id="message"
                            name="message"
                            placeholder="Tell me about your project or idea..."
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className="contact-submit" type="submit">
                        {sent ? '✓ Message Sent!' : 'Send Message →'}
                    </button>
                </form>

                <div className="contact-socials">
                    <a href="https://github.com/Jeyasaravanan18" target="_blank" rel="noreferrer" className="contact-social-link">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                        </svg>
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/jeya-saravanan-87ab47286" target="_blank" rel="noreferrer" className="contact-social-link">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>
                    <a href="mailto:sarjeya18@gmail.com" className="contact-social-link">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                        sarjeya18@gmail.com
                    </a>
                    <a href="https://jeya-portfolio.vercel.app" target="_blank" rel="noreferrer" className="contact-social-link">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                        Portfolio
                    </a>
                </div>

                <div className="contact-footer">
                    © 2025 Jeya Saravanan R · sarjeya18@gmail.com · +91 9345502563 · Built with React
                </div>
            </div>
        </section>
    )
}

export default Contact

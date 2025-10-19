import { SectionTitle } from "./SectionTitle";

export const Contact = () => (
    <section id="contact" className="section-padding section-dark contact-section">
      <div className="section-inner">
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="hero-description" style={{ fontSize: '1.25rem', maxWidth: '40rem', margin: '0 auto 2rem' }}>
            Have a project in mind or just want to say hi? Send me a message, and I'll get back to you as soon as possible.
        </p>
        <form className="contact-form">
            <div>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="form-input"
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Your Email"
                    className="form-input"
                />
            </div>
            <div>
                <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="form-textarea"
                ></textarea>
            </div>
            <button
                type="submit"
                className="submit-button"
            >
                Send Message
            </button>
        </form>
      </div>
    </section>
);
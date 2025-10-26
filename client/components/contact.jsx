import { SectionTitle } from "./SectionTitle";
import '../src/styles/Contact.css';
import { Colors } from "../constants/Colors";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";
import observe from '../animations/obsorveObject.js';
import '../animations/animations.css';

export const Contact = () => {
    const { theme } = useTheme();

    useEffect(() => {
        const animationObjects = document.querySelectorAll('.animation');
        animationObjects.forEach((obj) => { observe(obj)});
    })

    return (
        <section id="contact" className={`section-padding section-${theme} contact-section`}>
        <div className="section-inner">
            <SectionTitle>Get In Touch</SectionTitle>
            <p className="hero-description animation" style={{
                fontSize: '1.25rem', 
                maxWidth: '40rem', 
                margin: '0 auto 2rem',
                color: `${Colors[theme].textSecondary}`
        }   }>
                Have a project in mind or just want to say hi? Send me a message, and I'll get back to you as soon as possible.
            </p>
            <form className="contact-form animation" style={{
                backgroundColor: `${Colors[theme].cardBackground}`,
                border: `1px solid ${Colors[theme].border}`
            }}>
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="form-input animation"
                        style={{
                            backgroundColor: `${Colors[theme].formInputBackground}`, /* gray-700 */
                            color: `${Colors[theme].textPrimary}`,
                            border: `1px solid ${Colors[theme].border}`
                        }}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="form-input animation"
                        style={{
                            backgroundColor: `${Colors[theme].formInputBackground}`, /* gray-700 */
                            color: `${Colors[theme].textPrimary}`,
                            border: `1px solid ${Colors[theme].border}`
                        }}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        className="form-textarea animation"
                        style={{
                            backgroundColor: `${Colors[theme].formInputBackground}`, /* gray-700 */
                            color: `${Colors[theme].textPrimary}`,
                            border: `1px solid ${Colors[theme].border}`
                        }}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="submit-button animation"
                >
                    Send Message
                </button>
            </form>
        </div>
        </section>
    )
}
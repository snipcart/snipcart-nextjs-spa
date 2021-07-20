import styles from '../styles/Contact.module.scss';

export default function Contact() {
    return (
        <div className={styles.contact}>
            <h2 className={styles.contact__title}>Any questions? <span className={styles.colored}>Contact us.</span>
            </h2>
            <p className={styles.contact__paragraph}>We are looking forward to hearing from you. Feel free to contact us
                if you have any questions!</p>
            <a href="https://snipcart.com/contact-feedback">
                <button>Contact Us</button>
            </a>
        </div>
    )
}

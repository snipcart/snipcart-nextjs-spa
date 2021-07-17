import styles from '../styles/Footer.module.scss'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <p>
                Next.js app with a&nbsp;<a href="https://snipcart.com">Snipcart</a>&nbsp;- powered store
                    <a className={styles.__left} href="https://github.com/snipcart/snipcart-nextjs">Github</a>
            </p>
        </footer>
    )
}
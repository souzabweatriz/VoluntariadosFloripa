import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.infoGrid}>
					<div className={`${styles.item} ${styles.brandBlock}`}>
						<div className={styles.brandRow}>
							<Image
								src="/images/logo.png"
								alt="Logo Voluntarios Floripa"
								width={48}
								height={48}
								className={styles.logo}
							/>
							<h3 className={styles.brand}>Voluntarios Floripa</h3>
						</div>
						<p className={styles.subtitle}>Conectando pessoas para transformar realidades.</p>
					</div>

					<div className={styles.item}>
						<span className={styles.label}>Instagram</span>
						<a
							href="https://www.instagram.com/voluntariosfloripaa"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							@voluntariosfloripaa
						</a>
					</div>

					<div className={styles.item}>
						<span className={styles.label}>Bazar online Instagram</span>
						<a
							href="https://www.instagram.com/bazarongvoluntarios"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							@bazarongvoluntarios
						</a>
					</div>

					<div className={styles.item}>
						<span className={styles.label}>Localizacao</span>
						<p className={styles.text}>
							Rodovia Antonio Luiz Moura Gonzaga, 4587, Florianopolis, Santa Catarina
						</p>
					</div>

					<div className={styles.item}>
						<span className={styles.label}>Contato</span>
						<a href="mailto:contato@voluntariosfloripa.com.br" className={styles.link}>
							contato@voluntariosfloripa.com.br
						</a>
						<a href="tel:+554884452262" className={styles.link}>
							(48) 8445-2262
						</a>
					</div>
				</div>

				<div className={styles.bottomBar}>
					<p className={styles.bottomText}>Voluntarios Floripa © 2026</p>
				</div>
			</div>
		</footer>
	);
}

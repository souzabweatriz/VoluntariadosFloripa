import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Image from "next/image";
import styles from "./sobre.module.css";

export default function SobrePage() {
	return (
		<div className={styles.page}>
			<Header />

			<main className={styles.mainContent}>
				<section className={styles.heroSection}>
					<p className={styles.badge}>Nossa História</p>
					<h1 className={styles.title}>Um projeto social nascido da fé, do amor e da transparência</h1>
					<p className={styles.subtitle}>
						Nosso Projeto Social começou devido a uma promessa pela vida de um dos nossos filhos,
						Pietro, em 2011. Essa história pessoal se transformou em missão coletiva.
					</p>
					<div className={styles.heroStats}>
						<article className={styles.heroStatItem}>
							<p className={styles.heroStatNumber}>2011</p>
							<p className={styles.heroStatLabel}>Origem do projeto social</p>
						</article>
						<article className={styles.heroStatItem}>
							<p className={styles.heroStatNumber}>10+ anos</p>
							<p className={styles.heroStatLabel}>História de acolhimento</p>
						</article>
						<article className={styles.heroStatItem}>
							<p className={styles.heroStatNumber}>100+</p>
							<p className={styles.heroStatLabel}>Famílias atendidas por mês</p>
						</article>
					</div>
				</section>

				<section className={styles.storySection}>
					<h2 className={styles.sectionTitle}>Como tudo começou</h2>
					<p className={styles.text}>
						Em 2011, durante a gravidez, descobrimos um problema cerebral no Pietro. Diante desse
						momento desafiador, fizemos uma promessa pela vida dele. A partir dessa vivência,
						nasceu o compromisso de ajudar outras famílias com verdade, acolhimento e esperança.
					</p>
					<p className={styles.text}>
						Com o tempo, muitas pessoas passaram a se identificar com a nossa história e com a forma
						como conduzimos as ações: com transparência, prestação de contas e responsabilidade.
						Depois de 10 anos de trabalho social, decidimos formalizar a Instituição.
					</p>
				</section>

				<section className={styles.journeySection}>
					<h2 className={styles.sectionTitle}>Nossa jornada</h2>
					<ol className={styles.timeline}>
						<li className={styles.timelineItem}>
							<span className={styles.timelineYear}>2011</span>
							<p className={styles.timelineText}>
								Começamos com uma promessa de vida e transformamos fé em ação social.
							</p>
						</li>
						<li className={styles.timelineItem}>
							<span className={styles.timelineYear}>2021</span>
							<p className={styles.timelineText}>
								Após uma década de trabalho comunitário, formalizamos a Instituição.
							</p>
						</li>
						<li className={styles.timelineItem}>
							<span className={styles.timelineYear}>Hoje</span>
							<p className={styles.timelineText}>
								Seguimos com transparência, prestação de contas e presença ativa junto às famílias.
							</p>
						</li>
					</ol>
				</section>

				<section className={styles.manifestoSection}>
					<p className={styles.manifestoText}>
						&ldquo;Cada ação nasce do cuidado com pessoas reais. Nossa transparência não é discurso,
						é compromisso diário com quem confia em nós.&rdquo;
					</p>
				</section>

				<section className={styles.valuesSection}>
					<h2 className={styles.sectionTitle}>Missão, Visão e Valores</h2>
					<div className={styles.valuesGrid}>
						<article className={styles.valueCard}>
							<h3 className={styles.valueTitle}>Missão</h3>
							<p className={styles.valueText}>
								Acolher e apoiar famílias em vulnerabilidade com transparência, responsabilidade
								e ação contínua, promovendo dignidade e qualidade de vida.
							</p>
						</article>

						<article className={styles.valueCard}>
							<h3 className={styles.valueTitle}>Visão</h3>
							<p className={styles.valueText}>
								Ser referência em impacto social humanizado na Grande Florianópolis,
								ampliando o alcance das ações e fortalecendo redes de solidariedade.
							</p>
						</article>

						<article className={styles.valueCard}>
							<h3 className={styles.valueTitle}>Valores</h3>
							<p className={styles.valueText}>
								Fé, empatia, transparência, prestação de contas, compromisso com as crianças,
								respeito a cada familia e trabalho coletivo.
							</p>
						</article>
					</div>
				</section>

				<section className={styles.familySection}>
					<h2 className={styles.sectionTitle}>Nossa líder</h2>
					<div className={styles.peopleGrid}>
						<article className={styles.personCard}>
							<div className={styles.profileImageWrap}>
								<Image
									src="/images/stefane.jpeg"
									alt="Stefane, presidente da ONG Voluntários Floripa"
									width={420}
									height={420}
									className={styles.profileImage}
								/>
							</div>
							<h3 className={styles.personName}>Stefane</h3>
							<p className={styles.personRole}>Líder da ONG Voluntários Floripa</p>
							<p className={styles.personText}>
								Atua de forma voluntária, à frente da ONG, coordenando as ações e o trabalho diário.
							</p>
						</article>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

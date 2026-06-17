<template>
    <main class="home">
        <AppHeader />
        <section id="home" class="hero">
            <div class="hero__blobs" aria-hidden="true">
                <div class="blob blob--purple" />
                <div class="blob blob--pink" />
                <div class="blob blob--orange" />
                <div class="blob blob--yellow" />
                <div class="blob blob--red" />
                <div class="blob blob--peach" />
            </div>
            <div class="hero__inner">
                <div class="hero__content">
                    <span class="hero__eyebrow">Associação sem fins lucrativos · Florianópolis</span>
                    <h1 class="hero__title">Construindo hoje,<br>um futuro melhor</h1>
                    <p class="hero__desc">
                        Ajudamos famílias em situação de vulnerabilidade social com
                        alimentação, cuidado e apoio em Florianópolis. Acreditamos que
                        pequenos gestos constroem histórias e que cada criança merece
                        uma oportunidade desde 2011.
                    </p>
                    <div class="hero__actions">
                        <RouterLink to="/doacao" class="btn btn--primary">Doe agora</RouterLink>
                        <button class="btn btn--ghost" @click="showSobreModal = true">
                            Conhecer nossa história
                        </button>
                    </div>
                </div>

                <div class="hero__photo-wrap">
                    <img src="../../public/hero-photo.png" alt="Voluntária pintando o rosto de uma criança sorridente"
                        class="hero__photo" />
                </div>
            </div>
            <div class="stats-bar">
                <div class="stats-bar__inner">
                    <div class="stat">
                        <span class="stat__value">1.200+</span>
                        <span class="stat__label">Famílias atendidas</span>
                    </div>
                    <div class="stat__divider" />
                    <div class="stat">
                        <span class="stat__value">10+</span>
                        <span class="stat__label">Anos de impacto</span>
                    </div>
                    <div class="stat__divider" />
                    <div class="stat">
                        <span class="stat__value">300+</span>
                        <span class="stat__label">Voluntários</span>
                    </div>
                </div>
            </div>
        </section>

        <div v-if="showSobreModal" class="modal-overlay" @click.self="showSobreModal = false">
            <div class="modal">
                <button class="modal__close" @click="showSobreModal = false" aria-label="Fechar">
                    <i class="pi pi-times" />
                </button>

                <h2 class="modal__title">Nossa história</h2>

                <p class="sobre__body">
                    A Associação Voluntários Florianópolis é muito mais do que uma organização social: é uma rede de
                    esperança que transforma vidas todos os dias. Reconhecida como a Melhor ONG de Florianópolis em
                    2025, a instituição dedica seus esforços à proteção e ao desenvolvimento de crianças e
                    adolescentes em situação de vulnerabilidade, além de oferecer apoio essencial a mães solo e
                    famílias com crianças com deficiência.
                </p>

                <p class="sobre__body">
                    Com amor, compromisso e responsabilidade social, a associação atende cerca de mil famílias nas
                    cidades de Florianópolis e São José, levando não apenas auxílio material, mas também dignidade,
                    acolhimento e oportunidades para um futuro melhor. Entre suas ações estão a distribuição de
                    alimentos, enxovais para bebês, gás de cozinha, assistência jurídica, apoio psicológico e
                    programas de encaminhamento profissional que ajudam famílias a conquistarem independência e
                    qualidade de vida.
                </p>

                <p class="sobre__body">
                    Mantida exclusivamente por doações e pelo trabalho de voluntários, a Voluntários Florianópolis é
                    um exemplo inspirador de solidariedade e impacto social. Cada doação recebida, cada hora de
                    voluntariado e cada gesto de apoio contribuem para a construção de uma comunidade mais justa,
                    humana e acolhedora.
                </p>

                <p class="sobre__body sobre__highlight">
                    Juntos, podemos transformar desafios em oportunidades e fazer a diferença na vida de quem mais
                    precisa.
                </p>
            </div>
        </div>

        <div v-if="showLocalModal" class="modal-overlay" @click.self="showLocalModal = false">
            <div class="modal modal--local">
                <button class="modal__close" @click="showLocalModal = false" aria-label="Fechar">
                    <i class="pi pi-times" />
                </button>

                <h2 class="modal__title">Venha nos conhecer</h2>

                <div class="local-info">
                    <div class="local-info__item">
                        <i class="pi pi-map-marker"></i>
                        <div>
                            <strong>Endereço</strong>
                            <p>Rodovia Dr. Antônio Luiz Moura Gonzaga, 4587 - Rio Tavares, Florianópolis - SC, 88048-300
                            </p>
                        </div>
                    </div>

                    <div class="local-info__item">
                        <i class="pi pi-phone"></i>
                        <div>
                            <strong>Telefone</strong>
                            <p>
                                <a href="https://wa.me/5548984452262" target="_blank" rel="noopener noreferrer">
                                    (48) 98445-2262
                                </a>
                            </p>
                        </div>
                    </div>

                    <div class="local-info__item">
                        <i class="pi pi-clock"></i>
                        <div>
                            <strong>Horário de funcionamento</strong>
                            <p>Segunda a sexta · 09:00 às 18:00</p>
                        </div>
                    </div>
                </div>

                <div class="local-map">
                    <iframe
                        src="https://www.google.com/maps?q=Rodovia+Dr.+Ant%C3%B4nio+Luiz+Moura+Gonzaga,+4587+-+Rio+Tavares,+Florian%C3%B3polis+-+SC,+88048-300&output=embed"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <a href="https://www.google.com/maps/dir/?api=1&destination=Rodovia+Dr.+Ant%C3%B4nio+Luiz+Moura+Gonzaga,+4587+-+Rio+Tavares,+Florian%C3%B3polis+-+SC,+88048-300"
                    target="_blank" rel="noopener noreferrer" class="btn btn--primary local-map__btn">
                    Ver rotas no Google Maps
                </a>
            </div>
        </div>

        <section class="pillars">
            <div class="pillars__inner">
                <p class="section-eyebrow">O QUE FAZEMOS</p>
                <h2 class="section-title">Os pilares que<br>transformam vidas</h2>

                <div class="pillars__grid">
                    <article v-for="pillar in pillars" :key="pillar.title" class="pillar-card">
                        <div class="pillar-card__icon" :style="{ background: pillar.color }">
                            <i :class="pillar.icon" />
                        </div>
                        <h3 class="pillar-card__title">{{ pillar.title }}</h3>
                        <p class="pillar-card__desc">{{ pillar.desc }}</p>
                    </article>
                </div>
            </div>
        </section>
        <section id="sobre" class="about">
            <div class="about__inner">
                <div class="about__text">
                    <p class="section-eyebrow">SOBRE NÓS</p>
                    <h2 class="section-title about__title">Uma história nascida do<br>amor e da solidariedade</h2>
                    <p class="about__body">
                        A Associação Voluntários Florianópolis nasceu do amor, da fé e da solidariedade. Nossa história
                        começou em 2011, após a descoberta de um problema cerebral em um dos filhos da família
                        fundadora, ainda durante a gestação. Diante daquele momento delicado, foi feita uma promessa
                        pela vida do pequeno Pietro — e foi dessa promessa que surgiu o propósito de ajudar outras
                        pessoas.
                    </p>
                    <p class="about__body">
                        Com o passar dos anos, muitas famílias começaram a se identificar com a nossa história, com o
                        trabalho realizado e principalmente com os valores de transparência, acolhimento e compromisso
                        social. Depois de mais de uma década realizando ações solidárias de forma independente, em 2021
                        nasceu oficialmente a Associação Voluntários Florianópolis.
                    </p>
                    <p class="about__body">
                        Hoje, somos uma instituição formada por pessoas que acreditam no poder da empatia e da
                        transformação social. Nossa missão é proporcionar mais qualidade de vida para famílias em
                        situação de vulnerabilidade social extrema, através da entrega de alimentos, enxovais, gás de
                        cozinha, apoio emergencial, orientação, encaminhamento para oportunidades de emprego e
                        assistência em diversas necessidades do dia a dia.
                    </p>
                    <button class="btn btn--outline-purple" @click="showLocalModal = true">
                        Venha nos conhecer
                        <i class="pi pi-map-marker" />
                    </button>
                </div>

                <div class="about__media">
                    <video class="about__photo" controls autoplay muted loop>
                        <source src="/OngVideo.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeos.
                    </video>

                    <div class="about__video-badge">
                        <a href="https://www.instagram.com/reel/DNicPBgAE7d/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                            target="_blank" rel="noopener noreferrer" class="play-btn"
                            aria-label="Assistir vídeo no Instagram">
                            <i class="pi pi-play"></i>
                        </a>

                        <span>Hoje nós estamos na<br>casa de uma família</span>
                    </div>
                </div>
            </div>
        </section>
        <section id="causas" class="causas">
            <div class="causas__blob-bg">
                <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 L1440,0 L1440,600 L0,600 Z" fill="#5a3e9b" />
                    <path
                        d="M-80,420 C60,360 200,480 340,440 C480,400 520,300 420,240 C320,180 160,220 80,300 C0,380 -80,380 -80,420 Z"
                        fill="#d63fbe" opacity="0.85" />
                    <path d="M1100,0 C1200,20 1480,60 1480,180 C1480,300 1360,340 1280,280 C1200,220 1160,80 1100,0 Z"
                        fill="#f0a500" opacity="0.9" />
                </svg>
            </div>

            <div class="causas__inner">
                <span class="causas__eyebrow">AÇÕES SOCIAIS</span>
                <h2 class="causas__title">Causas que lutamos</h2>

                <div class="causas__grid">
                    <div v-for="(causa, i) in causas" :key="i" class="card">
                        <div class="card__img-wrap">
                            <img :src="causa.img" :alt="causa.title" class="card__img" />

                            <a :href="`https://wa.me/5548984452262?text=Olá! Gostaria de saber mais sobre ${causa.title}.`"
                                target="_blank" rel="noopener noreferrer" class="card__cta">
                                {{ causa.cta }}
                            </a>
                        </div>

                        <h3 class="card__title">{{ causa.title }}</h3>
                        <p class="card__desc">{{ causa.desc }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="campanhas" class="campanhas">
            <div class="campanhas__inner">
                <div class="campanhas__header">
                    <div>
                        <span class="campanhas__eyebrow">PROJETOS</span>
                        <h2 class="campanhas__title">Campanhas</h2>
                    </div>

                    <a href="https://instagram.com/voluntariosfloripaa" target="_blank" rel="noopener noreferrer"
                        class="campanhas__ig-btn">
                        <i class="pi pi-instagram"></i>
                        Confira mais no Instagram
                    </a>
                </div>

                <div class="campanhas__grid">
                    <router-link v-for="(post, i) in posts" :key="i" to="/campanhas" class="post-card"
                        :class="`post-card--${post.theme}`">
                        <img :src="post.img" :alt="post.alt" class="post-card__img" />

                        <div class="post-card__overlay">
                            <span class="post-card__label">Ver campanha</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>
        <AppFooter />
    </main>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import imgBazar from '../../public/bazar.png'
import imgDoacao from '../../public/doacao.png'
import imgApoio from '../../public/apoio.png'
import imgGas from '../../public/campanhas/gas.png'
import imgDesafio from '../../public/campanhas/desafio.png'
import imgBrecho from '../../public/campanhas/brecho.png'
import imgDoe from '../../public/campanhas/doe.png'
import App from '../App.vue'
import { ref } from 'vue'

const showSobreModal = ref(false)
const showLocalModal = ref(false)

const posts = [
    { img: imgGas, alt: 'Doe um gás', link: '#', theme: 'a' },
    { img: imgDesafio, alt: 'Você está desafiado(a)', link: '#', theme: 'b' },
    { img: imgBrecho, alt: 'Doação para o brechó', link: '#', theme: 'c' },
    { img: imgDoe, alt: 'Nos ajude a seguir ajudando', link: '#', theme: 'd' },
]

const causas = [
    {
        img: imgBazar,
        cta: 'Doar para o bazar',
        title: 'Nosso bazar solidário',
        desc: 'O bazar da ONG Voluntários Floripa ajuda a arrecadar recursos para manter nossos projetos sociais ativos. Além de contribuir com a causa, a comunidade também encontra roupas e itens a preços acessíveis.',
    },
    {
        img: imgDoacao,
        cta: 'Quero contribuir',
        title: 'Doação de alimentos',
        desc: 'Arrecadamos e distribuímos alimentos para famílias em situação de vulnerabilidade social em Florianópolis. Com a ajuda de voluntários e parceiros, conseguimos levar mais dignidade e segurança alimentar para quem precisa.',
    },
    {
        img: imgApoio,
        cta: 'Quero ser voluntário',
        title: 'Apoio técnico e profissional',
        desc: 'Oferecemos suporte na criação e atualização de currículos, além de orientações para quem deseja se preparar melhor para o mercado de trabalho. Nosso objetivo é ajudar cada pessoa a destacar suas competências e conquistar novas oportunidades profissionais.',
    },
]

const pillars = [
    {
        icon: 'pi pi-heart',
        color: '#f472b6',
        title: 'Alimentação e cuidado',
        desc: 'Entregamos cestas básicas e alimentos frescos para famílias em situação de vulnerabilidade em Florianópolis, garantindo nutrição e dignidade para adultos e crianças.'
    },
    {
        icon: 'pi pi-users',
        color: '#a78bfa',
        title: 'Apoio comunitário',
        desc: 'Promovemos encontros e atividades que fortalecem os laços da comunidade, criando redes de apoio mútuo que vão além das necessidades imediatas.'
    },
    {
        icon: 'pi pi-star',
        color: '#fb923c',
        title: 'Desenvolvimento social',
        desc: 'Oferecemos orientação, encaminhamento para oportunidades de emprego e assistência nas diversas necessidades do dia a dia das famílias assistidas.'
    }
]
</script>

<style scoped>
.home {
    --purple: #6b4fa0;
    --purple-dark: #5a3f8a;
    --pink: #e91e8c;
    --orange: #f97316;
    --yellow: #eab308;
    --red: #ef4444;
    --peach: #fca5a5;
    --white: #ffffff;
    --gray-50: #f9f9fb;
    --gray-100: #f0ebf8;
    --text: #1e1e2e;
    --text-muted: #64648a;
    margin-top: 5rem;
    font-family: 'Segoe UI', system-ui, sans-serif;
    overflow-x: hidden;
}

/* ────────────────────────────────────────
   MODAIS
──────────────────────────────────────── */
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(30, 30, 46, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1.5rem;
}

.modal {
    background: #fff;
    border-radius: 1.25rem;
    max-width: 40rem;
    width: 100%;
    max-height: 85vh;
    overflow-y: auto;
    padding: 2.5rem;
    position: relative;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);
}

.modal--local {
    max-width: 36rem;
}

.modal__close {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: var(--gray-100);
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--text);
    font-size: 0.9rem;
    transition: background 0.2s;
}

.modal__close:hover {
    background: #e2dcf0;
}

.modal__title {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text);
    margin: 0 0 1.25rem;
}

.sobre__body {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.8;
    margin: 0 0 1.1rem;
}

.sobre__highlight {
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0;
}

.local-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.local-info__item {
    display: flex;
    gap: 0.85rem;
    align-items: flex-start;
}

.local-info__item i {
    font-size: 1.1rem;
    color: var(--purple);
    margin-top: 0.2rem;
    flex-shrink: 0;
}

.local-info__item strong {
    display: block;
    font-size: 0.85rem;
    color: var(--text);
    margin-bottom: 0.2rem;
}

.local-info__item p {
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin: 0;
}

.local-info__item a {
    color: var(--purple);
    text-decoration: none;
    font-weight: 600;
}

.local-info__item a:hover {
    text-decoration: underline;
}

.local-map {
    width: 100%;
    aspect-ratio: 16/10;
    border-radius: 1rem;
    overflow: hidden;
    margin-bottom: 1.25rem;
}

.local-map__btn {
    width: 100%;
}

@media (max-width: 600px) {
    .modal {
        padding: 1.75rem;
        border-radius: 1rem;
    }

    .local-map {
        aspect-ratio: 4/3;
    }
}

.causas {
    position: relative;
    overflow: hidden;
    padding: 5rem 0 4rem;
}

.causas__blob-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.causas__blob-bg svg {
    width: 100%;
    height: 100%;
}

.causas__inner {
    position: relative;
    z-index: 1;
    width: 90%;
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
}

.causas__eyebrow {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: #f0a500;
    text-transform: uppercase;
}

.causas__title {
    font-size: clamp(1.6rem, 4vw, 2rem);
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 2rem;
    line-height: 1.2;
}

.causas__grid {
    width: 100%;
    display: flex;
    gap: 1.5rem;
    align-items: stretch;
    flex-wrap: wrap;
}

/* ── Card ── */
.card {
    flex: 1 1 16rem;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    background: #ffffff;
    border-radius: 1rem;
    overflow: hidden;
    padding-bottom: 1.5rem;
}

.card__img-wrap {
    position: relative;
    width: 100%;
}

.card__img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    display: block;
}

.card__cta {
    position: absolute;
    bottom: 0.75rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(90, 62, 155, 0.92);
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
    padding: 0.4rem 1rem;
    border-radius: 999rem;
    text-decoration: none;
    backdrop-filter: blur(0.25rem);
    transition: background 0.2s;
    max-width: calc(100% - 1.5rem);
    overflow: hidden;
    text-overflow: ellipsis;
}

.card__cta:hover {
    background: rgba(64, 42, 120, 0.98);
}

.card__title {
    font-size: 1rem;
    font-weight: 700;
    color: #2d2d2d;
    margin: 0;
    padding: 0 1.25rem;
    line-height: 1.3;
}

.card__desc {
    font-size: 0.82rem;
    color: #555;
    line-height: 1.6;
    margin: 0;
    padding: 0 1.25rem;
}


/* ── Shared ── */
.section-eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: var(--purple);
    text-transform: uppercase;
}

.section-title {
    font-size: clamp(1.6rem, 5vw, 2.5rem);
    font-weight: 800;
    color: var(--text);
    line-height: 1.15;
    margin: 0 0 1.5rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.7rem 1.5rem;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    transition: transform 0.15s, background 0.2s, box-shadow 0.2s;
    cursor: pointer;
    border: none;
    text-align: center;
}

.btn:hover {
    transform: translateY(-2px);
}

.btn--primary {
    background: var(--yellow);
    color: #1e1e2e;
    box-shadow: 0 4px 14px rgba(234, 179, 8, 0.35);
}

.btn--primary:hover {
    background: #ca9c06;
}

.btn--ghost {
    background: rgba(255, 255, 255, 0.15);
    color: var(--white);
    border: 1.5px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(4px);
}

.btn--ghost:hover {
    background: rgba(255, 255, 255, 0.25);
}

.btn--outline-purple {
    background: transparent;
    color: var(--purple);
    border: 2px solid var(--purple);
}

.btn--outline-purple:hover {
    background: var(--gray-100);
}


.hero {
    position: relative;
    background: var(--purple);
    overflow: hidden;
    min-height: 560px;
}

/* Blobs */
.hero__blobs {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(0px);
}

/* Organic blob shapes via clip-path / border-radius tricks */
.blob--purple {
    width: 420px;
    height: 380px;
    background: #5a3f8a;
    right: -60px;
    top: -80px;
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
}

.blob--pink {
    width: 280px;
    height: 240px;
    background: #e91e8c;
    right: 200px;
    top: -30px;
    border-radius: 45% 55% 60% 40% / 55% 45% 55% 45%;
}

.blob--orange {
    width: 200px;
    height: 200px;
    background: #f97316;
    right: 80px;
    top: 160px;
    border-radius: 55% 45% 40% 60% / 45% 55% 45% 55%;
}

.blob--yellow {
    width: 160px;
    height: 140px;
    background: #eab308;
    left: -40px;
    bottom: 60px;
    border-radius: 50% 50% 60% 40% / 60% 40% 60% 40%;
}

.blob--red {
    width: 200px;
    height: 180px;
    background: #ef4444;
    right: 320px;
    top: 120px;
    border-radius: 40% 60% 50% 50% / 50% 50% 60% 40%;
}

.blob--peach {
    width: 180px;
    height: 160px;
    background: #fca5a5;
    right: 100px;
    bottom: 80px;
    border-radius: 55% 45% 45% 55% / 45% 55% 45% 55%;
    opacity: 0.7;
}

.hero__inner {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem 1.5rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3rem;
}

.hero__eyebrow {
    display: inline-block;
    background: var(--yellow);
    color: #1e1e2e;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 0.3rem 0.9rem;
    border-radius: 999px;
    margin-bottom: 1.25rem;
    text-transform: uppercase;
}

.hero__title {
    font-size: clamp(2rem, 8vw, 3.5rem);
    font-weight: 900;
    color: var(--white);
    line-height: 1.1;
    margin: 0 0 1.25rem;
}

.hero__desc {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.7;
    margin: 0 0 2rem;
    max-width: 480px;
}

.hero__actions {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
}

.hero__photo-wrap {
    display: flex;
    justify-content: center;
    min-width: 0;
}

.hero__photo {
    width: 100%;
    max-width: 480px;
    height: 360px;
    object-fit: cover;
    border-radius: 1.5rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

/* Stats bar */
.stats-bar {
    position: relative;
    z-index: 1;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.stats-bar__inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.25rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
}

.stat__value {
    font-size: 1.6rem;
    font-weight: 900;
    color: var(--white);
    line-height: 1;
}

.stat__label {
    font-size: 0.72rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    text-align: center;
}

.stat__divider {
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.25);
}

/* ────────────────────────────────────────
   PILLARS
──────────────────────────────────────── */
.pillars {
    background: var(--white);
    padding: 5rem 0;
}

.pillars__inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.pillars__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 0.5rem;
}

.pillar-card {
    background: var(--gray-50);
    border: 1px solid #ede9f5;
    border-radius: 1.25rem;
    padding: 2rem 1.75rem;
    transition: transform 0.2s, box-shadow 0.2s;
}

.pillar-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(107, 79, 160, 0.1);
}

.pillar-card__icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.1rem;
    font-size: 1.2rem;
    color: var(--white);
}

.pillar-card__title {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text);
    margin: 0 0 0.6rem;
}

.pillar-card__desc {
    font-size: 0.88rem;
    color: var(--text-muted);
    line-height: 1.7;
    margin: 0;
}

/* ────────────────────────────────────────
   ABOUT
──────────────────────────────────────── */
.about {
    background: var(--gray-50);
    padding: 5rem 0;
    border-top: 1px solid #ede9f5;
}

.about__inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about__title {
    font-size: clamp(1.5rem, 4.5vw, 2.2rem);
}

.about__body {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.8;
    margin: 0 0 1rem;
}

.about__text .btn {
    margin-top: 1rem;
}

.about__media {
    position: relative;
    min-width: 0;
}

.about__photo {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 1.5rem;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
    display: block;
}

.about__video-badge {
    position: absolute;
    bottom: -1.25rem;
    left: -1.25rem;
    background: var(--white);
    border-radius: 1rem;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    font-size: 0.78rem;
    color: var(--text-muted);
    line-height: 1.4;
    max-width: calc(100% - 1.5rem);
}

.play-btn {
    text-decoration: none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: var(--purple);
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    flex-shrink: 0;
    transition: background 0.2s, transform 0.15s;
}

.play-btn:hover {
    background: var(--purple-dark);
    transform: scale(1.08);
}

.campanhas {
    background: #fafafa;
    padding: 4rem 0;
}

.campanhas__inner {
    width: 90%;
    max-width: 72rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.campanhas__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
}

.campanhas__eyebrow {
    display: block;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: #6b4fa0;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
}

.campanhas__title {
    font-size: clamp(1.4rem, 4vw, 1.75rem);
    font-weight: 800;
    color: #1a1a1a;
    margin: 0;
}

.campanhas__ig-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #6b4fa0;
    color: #fff;
    text-decoration: none;
    padding: 0.55rem 1.25rem;
    border-radius: 999rem;
    font-size: 0.85rem;
    font-weight: 600;
    white-space: nowrap;
    transition: background 0.2s, transform 0.15s;
}

.campanhas__ig-btn:hover {
    background: #5a3f8a;
    transform: translateY(-0.0625rem);
}

/* ── Grid ── */
.campanhas__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.post-card {
    flex: 1 1 calc(50% - 0.5rem);
    min-width: 0;
    border-radius: 0.75rem;
    overflow: hidden;
    position: relative;
    display: block;
    aspect-ratio: 1 / 1;
    cursor: pointer;
}

.post-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
}

.post-card:hover .post-card__img {
    transform: scale(1.04);
}

.post-card__overlay {
    position: absolute;
    inset: 0;
    background: rgba(90, 62, 155, 0);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 1.25rem;
    transition: background 0.3s;
}

.post-card:hover .post-card__overlay {
    background: rgba(90, 62, 155, 0.55);
}

.post-card__label {
    color: #fff;
    font-size: 0.85rem;
    font-weight: 700;
    background: rgba(0, 0, 0, 0.35);
    padding: 0.35rem 1rem;
    border-radius: 999rem;
    opacity: 0;
    transform: translateY(0.5rem);
    transition: opacity 0.25s, transform 0.25s;
}

.post-card:hover .post-card__label {
    opacity: 1;
    transform: translateY(0);
}

/* ────────────────────────────────────────
   RESPONSIVE
──────────────────────────────────────── */
@media (max-width: 900px) {
    .hero__inner {
        grid-template-columns: 1fr;
        text-align: center;
        padding-top: 4rem;
    }

    .hero__desc {
        margin: 0 auto 2rem;
    }

    .hero__actions {
        justify-content: center;
    }

    .hero__photo {
        height: 260px;
    }

    .hero__photo-wrap {
        order: -1;
    }

    .pillars__grid {
        grid-template-columns: 1fr;
    }

    .about__inner {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    .about__video-badge {
        bottom: 0.75rem;
        left: 0.75rem;
    }

    .about__photo {
        width: min(100%, 350px);
        aspect-ratio: 9/16;
        margin: 0 auto;
    }

    .about__media {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .causas__grid {
        flex-direction: column;
    }

    .card {
        flex: 1 1 auto;
    }
}

@media (max-width: 600px) {
    .home {
        margin-top: 4rem;
    }

    .hero {
        min-height: auto;
    }

    .hero__inner {
        padding: 3rem 1.25rem 2rem;
        gap: 2rem;
    }

    .hero__eyebrow {
        font-size: 0.65rem;
    }

    .hero__photo {
        height: 200px;
        border-radius: 1rem;
    }

    .hero__actions {
        flex-direction: column;
        width: 100%;
    }

    .hero__actions .btn {
        width: 100%;
    }

    .stats-bar__inner {
        flex-direction: column;
        gap: 1.25rem;
        padding: 1.5rem 1.25rem;
    }

    .stat__divider {
        width: 40px;
        height: 1px;
    }

    .blob--red,
    .blob--peach,
    .blob--orange {
        display: none;
    }

    .blob--purple {
        width: 260px;
        height: 240px;
    }

    .blob--pink {
        width: 180px;
        height: 160px;
        right: 120px;
    }

    .blob--yellow {
        width: 110px;
        height: 100px;
    }

    .pillars,
    .about,
    .causas,
    .campanhas {
        padding: 3rem 0;
    }

    .pillars__inner,
    .about__inner,
    .campanhas__inner {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }

    .pillar-card {
        padding: 1.5rem 1.25rem;
    }

    .causas__inner {
        width: 100%;
        padding: 0 1.25rem;
        box-sizing: border-box;
    }

    .campanhas__header {
        flex-direction: column;
        align-items: flex-start;
    }

    .campanhas__ig-btn {
        width: 100%;
        justify-content: center;
    }

    .post-card {
        flex: 1 1 100%;
    }

    .about__video-badge {
        font-size: 0.72rem;
        padding: 0.6rem 0.85rem;
        gap: 0.5rem;
    }

    .play-btn {
        width: 36px;
        height: 36px;
        font-size: 0.8rem;
    }
}
</style>
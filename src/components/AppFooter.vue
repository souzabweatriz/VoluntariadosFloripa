<template>
    <footer id="contato" class="footer">
        <div class="footer__wave" aria-hidden="true">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#3d2a72" />
            </svg>
        </div>

        <div class="footer__body">
            <div class="footer__inner">
                <div class="footer__col footer__col--brand">
                    <div class="footer__logo">
                        <img src="../../public/logo.svg" alt="Voluntários Floripa" class="footer__logo-img" />
                        <span class="footer__logo-text">
                            <span class="footer__logo-name">Voluntários</span>
                            <span class="footer__logo-city">Floripa</span>
                        </span>
                    </div>
                    <p class="footer__tagline">
                        Movidos pelo amor, transformamos vidas em Florianópolis através da solidariedade e do
                        voluntariado.
                    </p>
                    <div class="footer__social">
                        <a href="#" aria-label="Facebook" class="footer__social-link">
                            <i class="pi pi-facebook" />
                        </a>
                        <a href="https://instagram.com/voluntariosfloripaa" target="_blank" rel="noopener"
                            aria-label="Instagram" class="footer__social-link">
                            <i class="pi pi-instagram" />
                        </a>
                        <a href="https://wa.me/5548984452262" target="_blank" rel="noopener" aria-label="WhatsApp"
                            class="footer__social-link">
                            <i class="pi pi-whatsapp" />
                        </a>
                    </div>
                </div>

                <!-- Coluna 2: Links -->
                <div class="footer__col">
                    <h4 class="footer__col-title">Navegação</h4>
                    <ul class="footer__links">
                        <li v-for="link in navLinks" :key="link.to">
                            <RouterLink :to="link.to" class="footer__link">{{ link.label }}</RouterLink>
                        </li>
                    </ul>
                </div>

                <!-- Coluna 3: Como ajudar -->
                <div class="footer__col">
                    <h4 class="footer__col-title">Como ajudar</h4>
                    <ul class="footer__links">
                        <li v-for="item in helpLinks" :key="item.label">
                            <a :href="item.href" class="footer__link">{{ item.label }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Coluna 4: Contato + PIX -->
                <div class="footer__col">
                    <h4 class="footer__col-title">Contato</h4>
                    <ul class="footer__contact-list">
                        <li>
                            <i class="pi pi-phone" />
                            <a href="tel:+5548984452262" class="footer__link">(48) 9 8445-2262</a>
                        </li>
                        <li>
                            <i class="pi pi-envelope" />
                            <a href="mailto:contato@voluntariosfloripa.com.br"
                                class="footer__link">contato@voluntariosfloripa.com.br</a>
                        </li>
                    </ul>

                    <div class="footer__pix">
                        <span class="footer__pix-label">PIX · CNPJ</span>
                        <span class="footer__pix-key">41254766000180</span>
                        <div class="footer__bank">
                            <span>Banco do Brasil</span>
                            <span>AG: 4397-4 · CC: 25177-1</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Bottom bar -->
        <div class="footer__bottom">
            <div class="footer__bottom-inner">
                <span>© {{ year }} Voluntários Floripa · CNPJ 41.254.766/0001-80</span>
                <span class="footer__bottom-love">Feito com <i class="pi pi-heart-fill footer__heart"
                        aria-hidden="true" /> pela equipe Synaptix</span>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { computed } from 'vue'

const year = computed(() => new Date().getFullYear())

const navLinks = [
    { label: 'Início', to: '/' },
    { label: 'Sobre nós', to: '/sobre' },
    { label: 'Como ajudar', to: '/como-ajudar' },
    { label: 'Contato', to: '/contato' },
]

const helpLinks = [
    { label: 'Doe para o bazar', href: "https://wa.me/5548984452262" },
    { label: 'Doe alimentos', href: "https://wa.me/5548984452262" },
    { label: 'Seja voluntário', href: "https://wa.me/5548984452262" },
    { label: 'Faça uma doação', href: '/doacao' },
]
</script>

<style scoped>
/* ── Base ── */
.footer {
    background: #3d2a72;
    color: #e8dffa;
    margin: 0;
    padding: 0;
}

/* ── Wave ── */
.footer__wave {
    width: 100%;
    line-height: 0;
    display: block;
    background: #fafafa;
}

.footer__wave svg {
    width: 100%;
    height: 5rem;
    display: block;
}

/* ── Body ── */
.footer__body {
    padding: 3.5rem 0 2.5rem;
}

.footer__inner {
    width: 90%;
    max-width: 72rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
}

/* ── Colunas ── */
.footer__col {
    flex: 1 1 10rem;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
}

.footer__col--brand {
    flex: 1 1 18rem;
}

/* Logo */
.footer__logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
}

.footer__logo-img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
}

.footer__logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
}

.footer__logo-name {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
}

.footer__logo-city {
    font-size: 1rem;
    font-weight: 700;
    color: #f0a500;
}

.footer__tagline {
    font-size: 0.83rem;
    line-height: 1.65;
    color: #c5b8e8;
    margin: 0;
    max-width: 22rem;
}

/* Social */
.footer__social {
    display: flex;
    gap: 0.75rem;
}

.footer__social-link {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    border: 0.0625rem solid rgba(255, 255, 255, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e8dffa;
    font-size: 1rem;
    text-decoration: none;
    transition: background 0.2s, border-color 0.2s;
}

.footer__social-link:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.5);
}

/* Col titles */
.footer__col-title {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #f0a500;
    margin: 0;
}

/* Links */
.footer__links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
}

.footer__link {
    color: #c5b8e8;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s;
}

.footer__link:hover {
    color: #fff;
}

/* Contact list */
.footer__contact-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.footer__contact-list li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: #c5b8e8;
}

.footer__contact-list .pi {
    font-size: 0.85rem;
    color: #f0a500;
    flex-shrink: 0;
}

/* PIX box */
.footer__pix {
    margin-top: 0.5rem;
    background: rgba(255, 255, 255, 0.08);
    border: 0.0625rem solid rgba(255, 255, 255, 0.15);
    border-radius: 0.75rem;
    padding: 0.85rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.footer__pix-label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #f0a500;
}

.footer__pix-key {
    font-size: 1rem;
    font-weight: 800;
    color: #fff;
    letter-spacing: 0.04em;
}

.footer__bank {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    font-size: 0.72rem;
    color: #a898d4;
    margin-top: 0.25rem;
}

/* ── Bottom bar ── */
.footer__bottom {
    border-top: 0.0625rem solid rgba(255, 255, 255, 0.1);
    padding: 1rem 0;
}

.footer__bottom-inner {
    width: 90%;
    max-width: 72rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: #a898d4;
}

.footer__bottom-love {
    display: flex;
    align-items: center;
    gap: 0.3rem;
}

.footer__heart {
    color: #e05c8a;
    font-size: 0.7rem;
}

/* ── Responsivo ── */
@media (max-width: 48rem) {
    .footer__inner {
        flex-direction: column;
        gap: 2rem;
    }

    .footer__col--brand {
        flex: unset;
    }

    .footer__bottom-inner {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;
    }
}
</style>
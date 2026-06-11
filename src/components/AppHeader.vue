<template>
    <header class="header-wrapper">
        <div class="top-bar">
            <div class="top-bar__inner">
                <div class="top-bar__social">
                    <a href="https://www.facebook.com/voluntariosfloripa/?locale=pt_BR" aria-label="Facebook"
                        class="social-link">
                        <i class="pi pi-facebook" />
                    </a>
                    <a href="https://www.instagram.com/voluntariosfloripaa/" aria-label="Instagram" class="social-link">
                        <i class="pi pi-instagram" />
                    </a>
                    <span class="top-bar__social-label">ACOMPANHE NAS REDES SOCIAIS</span>
                </div>

                <div class="top-bar__contact">
                    <a href="mailto:contato@voluntariosfloripa.com.br" class="contact-item">
                        <i class="pi pi-envelope" />
                        <span>contato@voluntariosfloripa.com.br</span>
                    </a>
                    <a href="tel:+554894452262" class="contact-item">
                        <i class="pi pi-phone" />
                        <span>+55 (48) 9 8445-2262</span>
                    </a>
                </div>
            </div>
        </div>

        <nav class="main-nav">
            <div class="main-nav__inner">
                <a href="#" class="logo" @click.prevent="scrollToSection('home')">
                    <img src="../../public/logo.svg" alt="Voluntários Floripa" class="logo__img" />
                    <span class="logo__text">
                        <span class="logo__name">Voluntários</span>
                        <span class="logo__city">Floripa</span>
                    </span>
                </a>

                <ul class="nav-links">
                    <li v-for="link in navLinks" :key="link.id">
                        <a href="#" class="nav-link" @click.prevent="scrollToSection(link.id)">
                            {{ link.label }}
                        </a>
                    </li>
                </ul>

                <RouterLink to="/doacao" class="btn-donate">
                    Quero doar
                    <i class="pi pi-heart-fill" />
                </RouterLink>

                <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Menu">
                    <i :class="menuOpen ? 'pi pi-times' : 'pi pi-bars'" />
                </button>
            </div>

            <transition name="slide-down">
                <ul v-if="menuOpen" class="mobile-menu">
                    <li v-for="link in navLinks" :key="link.id">
                        <a href="#" class="mobile-link" @click.prevent="scrollToSection(link.id)">
                            {{ link.label }}
                        </a>
                    </li>

                    <li>
                        <RouterLink to="/doacao" class="mobile-donate" @click="menuOpen = false">
                            Quero doar
                            <i class="pi pi-heart-fill" />
                        </RouterLink>
                    </li>
                </ul>
            </transition>
        </nav>
    </header>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const menuOpen = ref(false)

const navLinks = [
    { label: 'Início', id: 'home' },
    { label: 'Campanhas', id: 'campanhas' },
    { label: 'Sobre nós', id: 'sobre' },
    { label: 'Como ajudar', id: 'causas' },
    { label: 'Contato', id: 'contato' }
]

const scrollToSection = async (id) => {
    if (router.currentRoute.value.path !== '/') {
        await router.push('/')
        setTimeout(() => {
            const section = document.getElementById(id)
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        }, 300)
    } else {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    menuOpen.value = false
}
</script>

<style scoped>
/* ── Sticky header ── */
.header-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

/* ── Top Bar ── */
.top-bar {
    background-color: #6b4fa0;
    color: #f0ebf8;
    font-size: 0.72rem;
    letter-spacing: 0.04em;
}

.top-bar__inner {
    width: 100%;
    padding: 0.45rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
}

.top-bar__social {
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

.top-bar__social-label {
    text-transform: uppercase;
    opacity: 0.85;
}

.social-link {
    color: #f0ebf8;
    font-size: 0.9rem;
    transition: opacity 0.2s;
}

.social-link:hover {
    opacity: 0.7;
}

.top-bar__contact {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.contact-item {
    color: #f0ebf8;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    transition: opacity 0.2s;
}

.contact-item:hover {
    opacity: 0.75;
}

.contact-item .pi {
    font-size: 0.8rem;
}

/* ── Main Nav ── */
.main-nav {
    background: #ffffff;
    border-bottom: 0.0625rem solid #ece6f4;
    position: relative;
}

.main-nav__inner {
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;
    padding: 0.6rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    box-sizing: border-box;
}

/* Logo */
.logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    flex-shrink: 0;
}

.logo__img {
    width: 3.25rem;
    height: 3.25rem;
    object-fit: contain;
}

.logo__text {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
}

.logo__name {
    font-size: 1.05rem;
    font-weight: 700;
    color: #2d2d2d;
}

.logo__city {
    font-size: 1.05rem;
    font-weight: 700;
    color: #6b4fa0;
}

/* Nav links */
.nav-links {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    list-style: none;
    margin: 0 auto;
    padding: 0;
    flex-wrap: wrap;
}

.nav-link {
    font-size: 0.9rem;
    color: #444;
    text-decoration: none;
    padding: 0.4rem 0.75rem;
    border-radius: 0.375rem;
    transition: color 0.2s, background 0.2s;
    white-space: nowrap;
}

.nav-link:hover {
    color: #6b4fa0;
    background: #f4f0fb;
}

.nav-link--active {
    color: #6b4fa0;
    font-weight: 600;
}

/* CTA button */
.btn-donate {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #6b4fa0;
    color: #fff;
    text-decoration: none;
    padding: 0.55rem 1.2rem;
    border-radius: 999rem;
    font-size: 0.9rem;
    font-weight: 600;
    white-space: nowrap;
    flex-shrink: 0;
    transition: background 0.2s, transform 0.15s;
}

.btn-donate:hover {
    background: #5a3f8a;
    transform: translateY(-0.0625rem);
}

.btn-donate .pi {
    font-size: 0.85rem;
}

/* Hamburger */
.hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    color: #6b4fa0;
    margin-left: auto;
    padding: 0.25rem;
}

/* ── Mobile Menu ── */
.mobile-menu {
    list-style: none;
    margin: 0;
    padding: 0.5rem 1.5rem 1rem;
    background: #fff;
    border-top: 0.0625rem solid #ece6f4;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.mobile-link {
    display: block;
    padding: 0.6rem 0.5rem;
    color: #444;
    text-decoration: none;
    font-size: 0.95rem;
    border-radius: 0.375rem;
    transition: background 0.2s, color 0.2s;
}

.mobile-link:hover {
    background: #f4f0fb;
    color: #6b4fa0;
}

.mobile-donate {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    background: #6b4fa0;
    color: #fff;
    text-decoration: none;
    padding: 0.6rem 1.2rem;
    border-radius: 999rem;
    font-weight: 600;
    font-size: 0.9rem;
}

/* ── Transition ── */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.22s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-0.5rem);
}

/* ── Responsivo ── */
@media (max-width: 48rem) {
    .top-bar__contact {
        display: none;
    }

    .top-bar__social-label {
        display: none;
    }

    .nav-links {
        display: none;
    }

    .btn-donate {
        display: none;
    }

    .hamburger {
        display: block;
    }
}

@media (max-width: 64rem) and (min-width: 48.0625rem) {
    .nav-link {
        font-size: 0.82rem;
        padding: 0.4rem 0.5rem;
    }

    .btn-donate {
        padding: 0.5rem 0.9rem;
        font-size: 0.82rem;
    }

    .main-nav__inner {
        gap: 1rem;
    }
}
</style>
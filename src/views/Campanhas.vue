<template>
    <main class="page">
        <AppHeader />

        <section class="campanhas-hero">
            <div class="campanhas-hero__inner">
                <span class="eyebrow">PROJETOS</span>
                <h1 class="campanhas-hero__title">Campanhas ativas</h1>
                <p class="campanhas-hero__desc">
                    Cada campanha é uma forma concreta de ajudar famílias em Florianópolis.
                    Escolha uma causa e faça a diferença hoje.
                </p>
            </div>
        </section>

        <section class="campanhas-grid-section">
            <div class="campanhas-grid-section__inner">
                <div class="campanhas-cards">

                    <!-- Gas -->
                    <article class="campanha-card">
                        <div class="card-art card-art--gas">
                            <div class="gas-botijao">
                                <div class="gas-botijao__body"></div>
                                <div class="gas-botijao__neck"></div>
                                <div class="gas-botijao__top"></div>
                                <div class="gas-botijao__flame">
                                    <div class="flame flame--l"></div>
                                    <div class="flame flame--c"></div>
                                    <div class="flame flame--r"></div>
                                </div>
                                <div class="gas-botijao__shine"></div>
                            </div>
                            <div class="gas-sparks">
                                <span></span><span></span><span></span>
                            </div>
                            <span class="card-art__badge" style="background:#f97316">Campanha ativa</span>
                        </div>
                        <div class="campanha-card__body">
                            <h2 class="campanha-card__title">Doe um gás</h2>
                            <p class="campanha-card__desc">O gás de cozinha é uma necessidade básica que muitas famílias
                                não conseguem custear. Com sua doação, garantimos que mães e crianças possam cozinhar
                                com dignidade.</p>
                            <button class="btn btn--primary" @click="activeCampanha = campanhas[0]">
                                <i class="pi pi-qrcode" /> Doe via Pix
                            </button>
                        </div>
                    </article>

                    <!-- Dia 10 -->
                    <article class="campanha-card">
                        <div class="card-art card-art--dia10">
                            <div class="dia10-circle">
                                <span class="dia10-num">10</span>
                                <span class="dia10-label">todo mês</span>
                            </div>
                            <div class="dia10-coins">
                                <span class="coin coin--a">R$</span>
                                <span class="coin coin--b">10</span>
                                <span class="coin coin--c">♥</span>
                            </div>
                            <div class="dia10-rings">
                                <span></span><span></span><span></span>
                            </div>
                            <span class="card-art__badge" style="background:#6b4fa0">Todo mês</span>
                        </div>
                        <div class="campanha-card__body">
                            <h2 class="campanha-card__title">Dia 10, doe 10</h2>
                            <p class="campanha-card__desc">Todo dia 10 do mês, te convidamos a doar R$&nbsp;10. Um gesto
                                simples que, somado a muitas pessoas, move cestas básicas, enxovais e apoio emergencial.
                            </p>
                            <button class="btn btn--primary" @click="activeCampanha = campanhas[1]">
                                <i class="pi pi-qrcode" /> Doe via Pix
                            </button>
                        </div>
                    </article>

                    <!-- Desafio -->
                    <article class="campanha-card">
                        <div class="card-art card-art--desafio">
                            <div class="desafio-hands">
                                <span class="hand hand--l">🤝</span>
                                <span class="desafio-arrow">→</span>
                                <span class="hand hand--r">🤝</span>
                            </div>
                            <div class="desafio-dots">
                                <span></span><span></span><span></span>
                                <span></span><span></span><span></span>
                            </div>
                            <span class="card-art__badge" style="background:#e91e8c">Campanha viral</span>
                        </div>
                        <div class="campanha-card__body">
                            <h2 class="campanha-card__title">Você está desafiado(a)</h2>
                            <p class="campanha-card__desc">Desafie seus amigos a doarem e compartilharem nas redes.
                                Quanto mais pessoas participam, mais famílias conseguimos alcançar. Aceita o desafio?
                            </p>
                            <button class="btn btn--primary" @click="activeCampanha = campanhas[2]">
                                <i class="pi pi-qrcode" /> Doe via Pix
                            </button>
                        </div>
                    </article>

                    <!-- Brechó -->
                    <article class="campanha-card">
                        <div class="card-art card-art--brecho">
                            <div class="brecho-hanger">
                                <div class="hanger__hook"></div>
                                <div class="hanger__bar"></div>
                                <div class="hanger__arms"></div>
                            </div>
                            <div class="brecho-tags">
                                <span class="brecho-tag brecho-tag--a">♻️</span>
                                <span class="brecho-tag brecho-tag--b">💜</span>
                                <span class="brecho-tag brecho-tag--c">✨</span>
                            </div>
                            <span class="card-art__badge" style="background:#eab308;color:#1e1e2e">Recebendo
                                doações</span>
                        </div>
                        <div class="campanha-card__body">
                            <h2 class="campanha-card__title">Doação para o brechó</h2>
                            <p class="campanha-card__desc">Nosso brechó solidário arrecada roupas e itens em bom estado.
                                A renda sustenta nossas ações sociais ao longo do ano. Doe roupas ou apoie
                                financeiramente.</p>
                            <button class="btn btn--primary" @click="activeCampanha = campanhas[3]">
                                <i class="pi pi-qrcode" /> Doe via Pix
                            </button>
                        </div>
                    </article>

                </div>
            </div>
        </section>

        <!-- Pix Modal -->
        <div v-if="activeCampanha" class="modal-overlay" @click.self="activeCampanha = null">
            <div class="modal">
                <button class="modal__close" @click="activeCampanha = null" aria-label="Fechar">
                    <i class="pi pi-times" />
                </button>
                <div class="pix-header">
                    <div class="pix-icon"><i class="pi pi-qrcode" /></div>
                    <div>
                        <h2 class="modal__title">Doe via Pix</h2>
                        <p class="modal__subtitle">{{ activeCampanha.title }}</p>
                    </div>
                </div>
                <div class="pix-qr-wrap">
                    <img :src="activeCampanha.qr" :alt="`QR Code — ${activeCampanha.title}`" class="pix-qr" />
                </div>
                <p class="pix-tip">{{ activeCampanha.pixTip }}</p>
                <p class="pix-thanks">💜 Obrigado por ajudar a transformar vidas!</p>
            </div>
        </div>

        <AppFooter />
    </main>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import { ref } from 'vue'

const QR_GAS = 'data:image/png;base64,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'
const QR_DIA10 = 'data:image/png;base64,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'

const QR_BRECHO = 'data:image/png;base64,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'

const campanhas = [
    {
        title: 'Doe um gás',
        qr: QR_GAS,
        pixTip: 'Aponte a câmera do celular para o QR Code e doe o valor que puder. Cada botijão de gás faz diferença na vida de uma família!',
    },
    {
        title: 'Dia 10, doe 10',
        qr: QR_DIA10,
        pixTip: 'Escaneie o QR Code e doe R$ 10 via Pix. Se puder fazer isso todo mês, o impacto é ainda maior!',
    },
    {
        title: 'Você está desafiado(a)',
        qr: QR_BRECHO,
        pixTip: 'Doe qualquer valor via Pix, depois marque 3 amigos nas redes sociais e desafie-os a fazer o mesmo!',
    },
    {
        title: 'Doação para o brechó',
        qr: QR_BRECHO,
        pixTip: 'Prefere apoiar em dinheiro? Escaneie o Pix. Para doar roupas ou itens, entre em contato pelo WhatsApp (48) 98445-2262.',
    },
]

const activeCampanha = ref(null)
</script>

<style scoped>
.page {
    --purple: #6b4fa0;
    --purple-dark: #5a3f8a;
    --pink: #e91e8c;
    --orange: #f97316;
    --yellow: #eab308;
    --white: #ffffff;
    --gray-50: #f9f9fb;
    --gray-100: #f0ebf8;
    --text: #1e1e2e;
    --text-muted: #64648a;
    margin-top: 5rem;
    font-family: 'Segoe UI', system-ui, sans-serif;
    overflow-x: hidden;
}

/* ── Hero ── */
.campanhas-hero {
    background: var(--purple);
    padding: 4rem 1.5rem 3.5rem;
    position: relative;
    overflow: hidden;
}

.campanhas-hero::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: var(--pink);
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
    right: -80px;
    top: -100px;
    opacity: 0.45;
}

.campanhas-hero::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: var(--yellow);
    border-radius: 50%;
    left: -40px;
    bottom: -60px;
    opacity: 0.35;
}

.campanhas-hero__inner {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
}

.eyebrow {
    display: inline-block;
    background: var(--yellow);
    color: #1e1e2e;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 0.3rem 0.9rem;
    border-radius: 999px;
    margin-bottom: 1rem;
    text-transform: uppercase;
}

.campanhas-hero__title {
    font-size: clamp(2rem, 6vw, 3rem);
    font-weight: 900;
    color: var(--white);
    line-height: 1.1;
    margin: 0 0 1rem;
}

.campanhas-hero__desc {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.7;
    max-width: 540px;
    margin: 0;
}

/* ── Grid ── */
.campanhas-grid-section {
    background: var(--gray-50);
    padding: 4rem 0 5rem;
}

.campanhas-grid-section__inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.campanhas-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
}

/* ── Card base ── */
.campanha-card {
    background: var(--white);
    border-radius: 1.25rem;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(107, 79, 160, 0.07);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s, box-shadow 0.2s;
}

.campanha-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(107, 79, 160, 0.14);
}

.campanha-card__body {
    padding: 1.5rem 1.5rem 1.75rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.75rem;
}

.campanha-card__title {
    font-size: 1.15rem;
    font-weight: 800;
    color: var(--text);
    margin: 0;
    line-height: 1.25;
}

.campanha-card__desc {
    font-size: 0.875rem;
    color: var(--text-muted);
    line-height: 1.75;
    margin: 0;
    flex: 1;
}

/* ── Card Art base ── */
.card-art {
    position: relative;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.card-art__badge {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    color: #fff;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    padding: 0.28rem 0.7rem;
    border-radius: 999px;
    text-transform: uppercase;
}

/* ════════════════════════════════
   GÁS art
════════════════════════════════ */
.card-art--gas {
    background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
}

.gas-botijao {
    position: relative;
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
}

.gas-botijao__body {
    width: 60px;
    height: 90px;
    background: linear-gradient(160deg, #ff9800 0%, #f57c00 60%, #e65100 100%);
    border-radius: 30px 30px 18px 18px;
    position: relative;
    box-shadow: inset -6px 0 12px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(245, 124, 0, 0.4);
}

.gas-botijao__neck {
    width: 22px;
    height: 14px;
    background: #bf360c;
    border-radius: 4px 4px 0 0;
    margin-top: -2px;
}

.gas-botijao__top {
    width: 30px;
    height: 8px;
    background: #78909c;
    border-radius: 4px;
}

.gas-botijao__flame {
    position: absolute;
    top: -36px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 4px;
    align-items: flex-end;
}

.flame {
    border-radius: 50% 50% 20% 20%;
    animation: flicker 1.1s ease-in-out infinite alternate;
}

.flame--l {
    width: 10px;
    height: 22px;
    background: #ffeb3b;
    animation-delay: 0.1s;
}

.flame--c {
    width: 14px;
    height: 32px;
    background: linear-gradient(to top, #ff5722, #ffeb3b);
}

.flame--r {
    width: 10px;
    height: 20px;
    background: #ff9800;
    animation-delay: 0.25s;
}

@keyframes flicker {
    from {
        transform: scaleY(1) skewX(0deg);
    }

    to {
        transform: scaleY(0.88) skewX(4deg);
    }
}

.gas-botijao__shine {
    position: absolute;
    top: 14px;
    left: 10px;
    width: 12px;
    height: 28px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    transform: rotate(-10deg);
}

.gas-sparks {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.gas-sparks span {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #ffeb3b;
    border-radius: 50%;
    animation: spark 2s ease-in-out infinite;
}

.gas-sparks span:nth-child(1) {
    top: 30%;
    left: 65%;
    animation-delay: 0s;
}

.gas-sparks span:nth-child(2) {
    top: 20%;
    left: 70%;
    width: 4px;
    height: 4px;
    animation-delay: 0.6s;
}

.gas-sparks span:nth-child(3) {
    top: 35%;
    left: 58%;
    width: 5px;
    height: 5px;
    animation-delay: 1.1s;
}

@keyframes spark {

    0%,
    100% {
        opacity: 0;
        transform: translateY(0) scale(1);
    }

    50% {
        opacity: 1;
        transform: translateY(-12px) scale(1.2);
    }
}

/* ════════════════════════════════
   DIA 10 art
════════════════════════════════ */
.card-art--dia10 {
    background: linear-gradient(135deg, #ede7f6 0%, #d1c4e9 100%);
}

.dia10-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7c4dff, #6b4fa0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 24px rgba(107, 79, 160, 0.4);
    z-index: 1;
    animation: pulse-ring 2.4s ease-in-out infinite;
}

@keyframes pulse-ring {

    0%,
    100% {
        box-shadow: 0 8px 24px rgba(107, 79, 160, 0.4), 0 0 0 0 rgba(107, 79, 160, 0.2);
    }

    50% {
        box-shadow: 0 8px 24px rgba(107, 79, 160, 0.4), 0 0 0 16px rgba(107, 79, 160, 0);
    }
}

.dia10-num {
    font-size: 2.2rem;
    font-weight: 900;
    color: #fff;
    line-height: 1;
}

.dia10-label {
    font-size: 0.6rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.dia10-coins {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.coin {
    position: absolute;
    background: #fff;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 800;
    color: #6b4fa0;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
    animation: float 3s ease-in-out infinite;
}

.coin--a {
    top: 18%;
    left: 12%;
    animation-delay: 0s;
}

.coin--b {
    top: 55%;
    right: 10%;
    animation-delay: 0.8s;
}

.coin--c {
    bottom: 14%;
    left: 22%;
    animation-delay: 1.5s;
    font-size: 1rem;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-8px);
    }
}

.dia10-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dia10-rings span {
    position: absolute;
    border-radius: 50%;
    border: 2px solid rgba(107, 79, 160, 0.15);
    animation: expand 3s ease-out infinite;
}

.dia10-rings span:nth-child(1) {
    width: 120px;
    height: 120px;
    animation-delay: 0s;
}

.dia10-rings span:nth-child(2) {
    width: 160px;
    height: 160px;
    animation-delay: 0.8s;
}

.dia10-rings span:nth-child(3) {
    width: 200px;
    height: 200px;
    animation-delay: 1.6s;
}

@keyframes expand {
    from {
        opacity: 0.6;
        transform: scale(0.8);
    }

    to {
        opacity: 0;
        transform: scale(1.1);
    }
}

/* ════════════════════════════════
   DESAFIO art
════════════════════════════════ */
.card-art--desafio {
    background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%);
}

.desafio-hands {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    z-index: 1;
}

.hand {
    font-size: 2.2rem;
    animation: shake 1.8s ease-in-out infinite;
}

.hand--l {
    animation-delay: 0s;
}

.hand--r {
    animation-delay: 0.9s;
}

@keyframes shake {

    0%,
    100% {
        transform: rotate(-8deg) scale(1);
    }

    50% {
        transform: rotate(8deg) scale(1.1);
    }
}

.desafio-arrow {
    font-size: 1.4rem;
    color: #e91e8c;
    font-weight: 900;
    animation: bounce-x 1.2s ease-in-out infinite;
}

@keyframes bounce-x {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(5px);
    }
}

.desafio-dots {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.desafio-dots span {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e91e8c;
    opacity: 0.3;
    animation: blink 2s ease-in-out infinite;
}

.desafio-dots span:nth-child(1) {
    top: 15%;
    left: 10%;
    animation-delay: 0s;
}

.desafio-dots span:nth-child(2) {
    top: 70%;
    left: 8%;
    animation-delay: 0.4s;
    background: #f06292;
}

.desafio-dots span:nth-child(3) {
    top: 20%;
    right: 10%;
    animation-delay: 0.8s;
}

.desafio-dots span:nth-child(4) {
    bottom: 15%;
    right: 12%;
    animation-delay: 1.2s;
    background: #ad1457;
}

.desafio-dots span:nth-child(5) {
    top: 45%;
    left: 5%;
    width: 5px;
    height: 5px;
    animation-delay: 1.6s;
}

.desafio-dots span:nth-child(6) {
    top: 40%;
    right: 6%;
    width: 5px;
    height: 5px;
    animation-delay: 2s;
}

@keyframes blink {

    0%,
    100% {
        opacity: 0.15;
        transform: scale(1);
    }

    50% {
        opacity: 0.5;
        transform: scale(1.4);
    }
}

/* ════════════════════════════════
   BRECHÓ art
════════════════════════════════ */
.card-art--brecho {
    background: linear-gradient(135deg, #fffde7 0%, #fff9c4 100%);
}

.brecho-hanger {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
}

.hanger__hook {
    width: 18px;
    height: 18px;
    border: 4px solid #5d4037;
    border-bottom: none;
    border-radius: 50% 50% 0 0;
    margin-bottom: -2px;
}

.hanger__bar {
    width: 90px;
    height: 5px;
    background: linear-gradient(90deg, #8d6e63, #5d4037);
    border-radius: 3px;
}

.hanger__arms {
    width: 90px;
    height: 36px;
    border: 4px solid #5d4037;
    border-top: none;
    border-radius: 0 0 24px 24px;
    background: transparent;
}

.brecho-tags {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.brecho-tag {
    position: absolute;
    background: #fff;
    border-radius: 6px;
    padding: 0.3rem 0.5rem;
    font-size: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    animation: sway 2.5s ease-in-out infinite;
}

.brecho-tag::after {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 8px;
    background: #bdbdbd;
}

.brecho-tag--a {
    top: 18%;
    left: 12%;
    animation-delay: 0s;
}

.brecho-tag--b {
    top: 22%;
    right: 14%;
    animation-delay: 0.7s;
}

.brecho-tag--c {
    bottom: 18%;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 1.4s;
}

@keyframes sway {

    0%,
    100% {
        transform: rotate(-5deg);
    }

    50% {
        transform: rotate(5deg);
    }
}

.brecho-tag--c {
    animation-name: sway-center;
}

@keyframes sway-center {

    0%,
    100% {
        transform: translateX(-50%) rotate(-5deg);
    }

    50% {
        transform: translateX(-50%) rotate(5deg);
    }
}

/* ── Buttons ── */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.65rem 1.4rem;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.88rem;
    text-decoration: none;
    cursor: pointer;
    border: none;
    transition: transform 0.15s, background 0.2s, box-shadow 0.2s;
    align-self: flex-start;
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

/* ── Modal ── */
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
    border-radius: 1.5rem;
    max-width: 28rem;
    width: 100%;
    padding: 2rem 2rem 2.25rem;
    position: relative;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);
    text-align: center;
}

.modal__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
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

.pix-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-align: left;
    margin-bottom: 1.5rem;
}

.pix-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: var(--gray-100);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: var(--purple);
    flex-shrink: 0;
}

.modal__title {
    font-size: 1.15rem;
    font-weight: 800;
    color: var(--text);
    margin: 0 0 0.15rem;
}

.modal__subtitle {
    font-size: 0.82rem;
    color: var(--text-muted);
    margin: 0;
}

.pix-qr-wrap {
    background: #f8f8f8;
    border-radius: 1rem;
    padding: 1.25rem;
    display: inline-block;
    margin: 0 auto 1.25rem;
}

.pix-qr {
    width: 180px;
    height: 180px;
    display: block;
}

.pix-tip {
    font-size: 0.83rem;
    color: var(--text-muted);
    line-height: 1.7;
    margin: 0 0 0.75rem;
}

.pix-thanks {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--purple);
    margin: 0;
}

/* ── Responsive ── */
@media (max-width: 768px) {
    .campanhas-cards {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    .page {
        margin-top: 4rem;
    }

    .campanhas-hero {
        padding: 3rem 1.25rem 2.5rem;
    }

    .campanhas-grid-section {
        padding: 2.5rem 0 3.5rem;
    }

    .campanhas-grid-section__inner {
        padding: 0 1.25rem;
    }

    .campanha-card__body {
        padding: 1.25rem;
    }

    .modal {
        padding: 1.75rem 1.5rem 2rem;
    }

    .pix-qr {
        width: 150px;
        height: 150px;
    }

    .card-art {
        height: 170px;
    }
}
</style>
<template>
    <main class="doacao">
        <AppHeader />

        <section class="doacao-hero">
            <div class="doacao-hero__inner">
                <span class="eyebrow">FAÇA A DIFERENÇA</span>
                <h1 class="doacao-hero__title">Sua doação<br>transforma vidas</h1>
                <p class="doacao-hero__sub">Toda contribuição ajuda famílias em situação de vulnerabilidade em
                    Florianópolis.</p>
            </div>
            <div class="doacao-hero__blob1"></div>
            <div class="doacao-hero__blob2"></div>
            <div class="doacao-hero__blob3"></div>
        </section>

        <section class="doacao-body">
            <div class="doacao-body__inner">

                <!-- Valores -->
                <div class="escolha-card">
                    <p class="escolha-card__label">Escolha o valor da doação</p>
                    <div class="valor-grid">
                        <button v-for="opcao in valoresSugeridos" :key="opcao.valor" class="valor-btn"
                            :class="{ 'valor-btn--ativo': valorSelecionado === opcao.valor }"
                            @click="selecionarValor(opcao.valor)">
                            <span class="valor-btn__rs">R$</span>
                            <span class="valor-btn__num">{{ opcao.valor }}</span>
                            <span v-if="opcao.tag" class="valor-btn__tag">{{ opcao.tag }}</span>
                        </button>
                    </div>
                    <p class="escolha-card__hint">
                        <i class="pi pi-lock"></i> Pagamento 100% seguro via Pix
                    </p>
                </div>

                <!-- QR / Placeholder -->
                <transition name="fade-up" mode="out-in">
                    <div v-if="pixAtual" key="qr" class="qr-card">
                        <div class="qr-card__top">
                            <div class="qr-card__check"><i class="pi pi-check"></i></div>
                            <div>
                                <p class="qr-card__label">Pix gerado</p>
                                <p class="qr-card__valor">R$ {{ valorSelecionado }},00</p>
                            </div>
                        </div>

                        <div class="qr-card__img-wrap">
                            <img :src="pixAtual.imagem" alt="QR Code PIX" class="qr-card__img" />
                        </div>

                        <p class="qr-card__ou">ou copie o código Pix</p>

                        <div class="qr-card__copia">
                            <code class="qr-card__code">{{ pixAtual.codigo }}</code>
                            <button class="qr-card__copiar" @click="copiar">
                                <i :class="copiado ? 'pi pi-check' : 'pi pi-copy'"></i>
                                {{ copiado ? 'Copiado!' : 'Copiar' }}
                            </button>
                        </div>

                        <button class="btn-nova" @click="resetar">
                            <i class="pi pi-arrow-left"></i> Escolher outro valor
                        </button>
                    </div>

                    <div v-else key="placeholder" class="qr-placeholder">
                        <div class="placeholder-art">
                            <div class="placeholder-art__ring placeholder-art__ring--1"></div>
                            <div class="placeholder-art__ring placeholder-art__ring--2"></div>
                            <div class="placeholder-art__ring placeholder-art__ring--3"></div>
                            <div class="placeholder-art__icon"><i class="pi pi-heart-fill"></i></div>
                        </div>
                        <p class="placeholder-text">Selecione um valor ao lado<br>para gerar seu QR Code Pix.</p>
                        <ul class="placeholder-list">
                            <li><i class="pi pi-bolt"></i> Confirmação instantânea</li>
                            <li><i class="pi pi-shield"></i> Transferência segura</li>
                            <li><i class="pi pi-heart-fill"></i> 100% vai para as famílias</li>
                        </ul>
                    </div>
                </transition>

            </div>
        </section>

        <AppFooter />
    </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

const pixPorValor = {
    5: {
        codigo: '00020126360014BR.GOV.BCB.PIX01144125476600018052040000530398654045.005802BR5901N6001C62230519VoluntariadoFloripa63047AB2',
        imagem: '/pix/qrcode-pix-5.png'
    },
    10: {
        codigo: '00020126360014BR.GOV.BCB.PIX011441254766000180520400005303986540510.005802BR5901N6001C62220518VoluntariosFloripa6304DFE6',
        imagem: '/pix/qrcode-pix-10.png'
    },
    15: {
        codigo: '00020126360014BR.GOV.BCB.PIX011441254766000180520400005303986540515.005802BR5901N6001C62230519VoluntariadoFloripa6304517B',
        imagem: '/pix/qrcode-pix-15.png'
    },
    20: {
        codigo: '00020126360014BR.GOV.BCB.PIX011441254766000180520400005303986540520.005802BR5901N6001C62150511Voluntarios63049F87',
        imagem: '/pix/qrcode-pix-20.png'
    }
}

const valoresSugeridos = [
    { valor: 5 },
    { valor: 10, tag: 'popular' },
    { valor: 15 },
    { valor: 20 },
]

const valorSelecionado = ref(null)
const copiado = ref(false)

const pixAtual = computed(() => {
    if (!valorSelecionado.value) return null
    return pixPorValor[valorSelecionado.value] || null
})

function selecionarValor(valor) {
    valorSelecionado.value = valor
    copiado.value = false
}

function resetar() {
    valorSelecionado.value = null
    copiado.value = false
}

async function copiar() {
    if (!pixAtual.value) return
    await navigator.clipboard.writeText(pixAtual.value.codigo)
    copiado.value = true
    setTimeout(() => { copiado.value = false }, 2000)
}
</script>

<style scoped>
.doacao {
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
    background: var(--gray-50);
    min-height: 100vh;
}

/* ── Hero ── */
.doacao-hero {
    position: relative;
    background: var(--purple);
    padding: 4.5rem 1.5rem 5rem;
    overflow: hidden;
    text-align: center;
}

.doacao-hero__blob1,
.doacao-hero__blob2,
.doacao-hero__blob3 {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
}

.doacao-hero__blob1 {
    width: 380px;
    height: 340px;
    background: var(--pink);
    right: -80px;
    top: -100px;
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
    opacity: 0.5;
}

.doacao-hero__blob2 {
    width: 200px;
    height: 200px;
    background: var(--yellow);
    left: -50px;
    bottom: -60px;
    opacity: 0.35;
}

.doacao-hero__blob3 {
    width: 160px;
    height: 150px;
    background: var(--orange);
    right: 220px;
    bottom: -40px;
    border-radius: 55% 45% 40% 60%;
    opacity: 0.4;
}

.doacao-hero__inner {
    position: relative;
    z-index: 1;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
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
    text-transform: uppercase;
}

.doacao-hero__title {
    font-size: clamp(2rem, 6vw, 3rem);
    font-weight: 900;
    color: var(--white);
    line-height: 1.1;
    margin: 0;
}

.doacao-hero__sub {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.7;
    max-width: 480px;
    margin: 0;
}

/* ── Body ── */
.doacao-body {
    padding: 3.5rem 1.5rem 5rem;
}

.doacao-body__inner {
    max-width: 860px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.75rem;
    align-items: start;
}

/* ── Escolha card ── */
.escolha-card {
    background: var(--white);
    border-radius: 1.25rem;
    padding: 2rem;
    box-shadow: 0 2px 16px rgba(107, 79, 160, 0.08);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.escolha-card__label {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text);
    margin: 0;
}

.valor-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
}

.valor-btn {
    position: relative;
    padding: 1.25rem 0.75rem;
    border: 2px solid #ddd6f5;
    border-radius: 1rem;
    background: #faf8ff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
    transition: all 0.18s;
}

.valor-btn:hover {
    border-color: var(--purple);
    background: var(--gray-100);
    transform: translateY(-2px);
}

.valor-btn--ativo {
    background: var(--purple);
    border-color: var(--purple);
    box-shadow: 0 6px 20px rgba(107, 79, 160, 0.35);
    transform: translateY(-2px);
}

.valor-btn__rs {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--text-muted);
    line-height: 1;
}

.valor-btn--ativo .valor-btn__rs {
    color: rgba(255, 255, 255, 0.7);
}

.valor-btn__num {
    font-size: 1.6rem;
    font-weight: 900;
    color: var(--purple);
    line-height: 1;
}

.valor-btn--ativo .valor-btn__num {
    color: var(--white);
}

.valor-btn__tag {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background: var(--yellow);
    color: #1e1e2e;
    font-size: 0.58rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 0.15rem 0.45rem;
    border-radius: 999px;
}

.escolha-card__hint {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.78rem;
    color: var(--text-muted);
    margin: 0;
}

.escolha-card__hint .pi {
    color: var(--purple);
    font-size: 0.82rem;
}

/* ── QR Card ── */
.qr-card {
    background: var(--white);
    border-radius: 1.25rem;
    padding: 2rem;
    box-shadow: 0 2px 16px rgba(107, 79, 160, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.1rem;
    text-align: center;
}

.qr-card__top {
    display: flex;
    align-items: center;
    gap: 1rem;
    align-self: flex-start;
    text-align: left;
}

.qr-card__check {
    width: 44px;
    height: 44px;
    background: #e8f5e9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #27ae60;
    font-size: 1.1rem;
    flex-shrink: 0;
}

.qr-card__label {
    font-size: 0.75rem;
    color: var(--text-muted);
    margin: 0;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.qr-card__valor {
    font-size: 1.6rem;
    font-weight: 900;
    color: var(--purple);
    margin: 0;
    line-height: 1;
}

.qr-card__img-wrap {
    background: var(--gray-50);
    border-radius: 1rem;
    padding: 1rem;
    border: 1px solid #ede8f9;
}

.qr-card__img {
    width: 160px;
    height: 160px;
    display: block;
}

.qr-card__ou {
    font-size: 0.78rem;
    color: var(--text-muted);
    margin: 0;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
}

.qr-card__ou::before,
.qr-card__ou::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #ede8f9;
}

.qr-card__copia {
    width: 100%;
    background: var(--gray-100);
    border-radius: 0.75rem;
    padding: 0.85rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    align-items: center;
}

.qr-card__code {
    font-size: 0.62rem;
    color: var(--purple-dark);
    word-break: break-all;
    line-height: 1.6;
}

.qr-card__copiar {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: var(--purple);
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: 0.45rem 1.2rem;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
}

.qr-card__copiar:hover {
    background: var(--purple-dark);
    transform: translateY(-1px);
}

.btn-nova {
    background: none;
    border: 1.5px solid #ddd6f5;
    color: var(--purple);
    border-radius: 999px;
    padding: 0.45rem 1.2rem;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: background 0.2s;
}

.btn-nova:hover {
    background: var(--gray-100);
}

/* ── Placeholder ── */
.qr-placeholder {
    background: var(--white);
    border-radius: 1.25rem;
    border: 2px dashed #ddd6f5;
    padding: 2.5rem 1.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    text-align: center;
}

.placeholder-art {
    position: relative;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.placeholder-art__ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid rgba(107, 79, 160, 0.15);
    animation: expand-ring 3s ease-out infinite;
}

.placeholder-art__ring--1 {
    width: 90px;
    height: 90px;
    animation-delay: 0s;
}

.placeholder-art__ring--2 {
    width: 110px;
    height: 110px;
    animation-delay: 0.6s;
}

.placeholder-art__ring--3 {
    width: 130px;
    height: 130px;
    animation-delay: 1.2s;
}

@keyframes expand-ring {
    from {
        opacity: 0.5;
        transform: scale(0.85);
    }

    to {
        opacity: 0;
        transform: scale(1.05);
    }
}

.placeholder-art__icon {
    width: 64px;
    height: 64px;
    background: var(--gray-100);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.placeholder-art__icon .pi {
    font-size: 1.6rem;
    color: var(--purple);
}

.placeholder-text {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin: 0;
}

.placeholder-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    width: 100%;
}

.placeholder-list li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--text-muted);
    background: var(--gray-50);
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
}

.placeholder-list .pi {
    color: var(--purple);
    font-size: 0.85rem;
}

/* ── Transitions ── */
.fade-up-enter-active,
.fade-up-leave-active {
    transition: all 0.28s ease;
}

.fade-up-enter-from {
    opacity: 0;
    transform: translateY(12px);
}

.fade-up-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}

/* ── Responsive ── */
@media (max-width: 680px) {
    .doacao-body__inner {
        grid-template-columns: 1fr;
    }

    .doacao {
        margin-top: 4rem;
    }

    .doacao-hero {
        padding: 3rem 1.25rem 4rem;
    }

    .doacao-body {
        padding: 2.5rem 1.25rem 4rem;
    }
}
</style>
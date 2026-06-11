<template>
    <main class="doacao">
        <AppHeader />
        <div class="doacao__inner">

            <!-- Header da página -->
            <div class="doacao__hero">
                <span class="doacao__eyebrow">FAÇA A DIFERENÇA</span>
                <h1 class="doacao__title">Sua doação transforma vidas</h1>
                <p class="doacao__sub">
                    Toda contribuição ajuda famílias em situação de vulnerabilidade em Florianópolis.
                </p>
            </div>

            <div class="doacao__layout">

                <!-- Formulário -->
                <div class="doacao__form-col">
                    <div class="form-card">
                        <h2 class="form-card__title">Escolha o valor</h2>

                        <!-- Valores rápidos -->
                        <div class="valor-grid">
                            <button v-for="opcao in valoresSugeridos" :key="opcao.valor" class="valor-btn"
                                :class="{ 'valor-btn--ativo': valorSelecionado === opcao.valor }"
                                @click="selecionarValor(opcao.valor)">
                                R$ {{ opcao.valor }}
                            </button>
                        </div>

                        <p v-if="!valorSelecionado" class="form-erro form-erro--info">
                            Selecione um valor para gerar o QR Code PIX.
                        </p>
                    </div>
                </div>

                <!-- QR Code -->
                <div class="doacao__qr-col">
                    <transition name="fade-up">
                        <div v-if="pixAtual" class="qr-card">
                            <div class="qr-card__check">
                                <i class="pi pi-check-circle" />
                            </div>
                            <h3 class="qr-card__title">PIX gerado com sucesso!</h3>
                            <p class="qr-card__valor">R$ {{ valorSelecionado }}</p>

                            <img :src="pixAtual.imagem" alt="QR Code PIX" class="qr-card__img" />

                            <p class="qr-card__instrucao">Ou copie o código abaixo e cole no seu banco:</p>

                            <div class="qr-card__copia">
                                <code class="qr-card__code">{{ pixAtual.codigo }}</code>
                                <button class="qr-card__copiar" @click="copiar">
                                    <i :class="copiado ? 'pi pi-check' : 'pi pi-copy'" />
                                    {{ copiado ? 'Copiado!' : 'Copiar' }}
                                </button>
                            </div>

                            <button class="btn-nova" @click="resetar">
                                <i class="pi pi-refresh" /> Escolher outro valor
                            </button>
                        </div>

                        <div v-else class="qr-placeholder">
                            <div class="qr-placeholder__icon">
                                <i class="pi pi-heart" />
                            </div>
                            <p>Seu QR Code PIX aparecerá aqui depois de escolher o valor.</p>
                            <div class="qr-placeholder__info">
                                <div class="info-item">
                                    <i class="pi pi-shield" />
                                    <span>Pagamento 100% seguro via PIX</span>
                                </div>
                                <div class="info-item">
                                    <i class="pi pi-bolt" />
                                    <span>Confirmação instantânea</span>
                                </div>
                                <div class="info-item">
                                    <i class="pi pi-heart-fill" />
                                    <span>Toda doação vai direto para as famílias</span>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>

            </div>
        </div>
    </main>
    <AppFooter />
</template>

<script setup>
import { ref, computed } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

// QR Codes PIX gerados previamente para cada valor (estáticos, sem backend)
const pixPorValor = {
    5: {
        codigo: '00020126360014BR.GOV.BCB.PIX0114+554898445226252040000530398654045.005802BR5920Voluntariado Floripa6013Florianopolis62070503***63040C8C',
        imagem: '../../public/pix/qrcode-pix-5.png'
    },
    10: {
        codigo: '00020126360014BR.GOV.BCB.PIX0114+5548984452262520400005303986540510.005802BR5920Voluntariado Floripa6013Florianopolis62070503***6304A147',
        imagem: '../../public/pix/qrcode-pix-10.png'
    },
    15: {
        codigo: '00020126360014BR.GOV.BCB.PIX0114+5548984452262520400005303986540515.005802BR5920Voluntariado Floripa6013Florianopolis62070503***6304CF85',
        imagem: '../../public/pix/qrcode-pix-15.png'
    },
    20: {
        codigo: '00020126360014BR.GOV.BCB.PIX0114+5548984452262520400005303986540520.005802BR5920Voluntariado Floripa6013Florianopolis62070503***63049B9F',
        imagem: '/pix/qrcode-pix-20.png'
    }
}

const valoresSugeridos = [
    { valor: 5 },
    { valor: 10 },
    { valor: 15 },
    { valor: 20 }
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

    setTimeout(() => {
        copiado.value = false
    }, 2000)
}
</script>

<style scoped>
.doacao {
    background: #f7f5fc;
    min-height: 100vh;
    padding: 4rem 0 6rem;
    margin-top: 5rem; /* Para compensar o header fixo */
}

.doacao__inner {
    width: 90%;
    max-width: 72rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

/* Hero */
.doacao__hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.75rem;
}

.doacao__eyebrow {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: #6b4fa0;
    text-transform: uppercase;
}

.doacao__title {
    font-size: 2.25rem;
    font-weight: 800;
    color: #1a1a1a;
    margin: 0;
    line-height: 1.2;
}

.doacao__sub {
    font-size: 1rem;
    color: #666;
    margin: 0;
    max-width: 36rem;
}

/* Layout em coluna */
.doacao__layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: stretch;
}

.doacao__form-col {
    flex: 1 1 0;
    min-width: 0;
}

.doacao__qr-col {
    flex: 1 1 0;
    min-width: 0;
}

/* Form card */
.form-card {
    background: #fff;
    border-radius: 1.25rem;
    border: 0.0625rem solid #e8e0f7;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.form-card__title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
}

/* Valores */
.valor-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.valor-btn {
    flex: 1 1 4rem;
    padding: 0.65rem 0;
    border: 0.125rem solid #ddd6f5;
    border-radius: 0.75rem;
    background: #faf8ff;
    color: #5a3f8a;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s;
}

.valor-btn:hover {
    border-color: #6b4fa0;
    background: #f0ebfb;
}

.valor-btn--ativo {
    background: #6b4fa0;
    border-color: #6b4fa0;
    color: #fff;
}

.form-erro {
    color: #c0392b;
    font-size: 0.82rem;
    margin: 0;
    text-align: center;
}

.form-erro--info {
    color: #888;
}

/* QR Card */
.qr-card {
    background: #fff;
    border-radius: 1.25rem;
    border: 0.0625rem solid #e8e0f7;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
}

.qr-card__check .pi {
    font-size: 2.5rem;
    color: #27ae60;
}

.qr-card__title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
}

.qr-card__valor {
    font-size: 2rem;
    font-weight: 800;
    color: #6b4fa0;
    margin: 0;
}

.qr-card__img {
    width: 70%;
    max-width: 14rem;
    border-radius: 0.75rem;
    border: 0.0625rem solid #ede8f9;
}

.qr-card__instrucao {
    font-size: 0.82rem;
    color: #888;
    margin: 0;
}

.qr-card__copia {
    width: 100%;
    background: #f4f0fb;
    border-radius: 0.75rem;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
}

.qr-card__code {
    font-size: 0.65rem;
    color: #5a3f8a;
    word-break: break-all;
    line-height: 1.5;
}

.qr-card__copiar {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: #6b4fa0;
    color: #fff;
    border: none;
    border-radius: 999rem;
    padding: 0.45rem 1.25rem;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}

.qr-card__copiar:hover {
    background: #5a3f8a;
}

.btn-nova {
    background: none;
    border: 0.0625rem solid #ddd6f5;
    color: #6b4fa0;
    border-radius: 999rem;
    padding: 0.45rem 1.25rem;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: background 0.2s;
}

.btn-nova:hover {
    background: #f4f0fb;
}

/* QR Placeholder */
.qr-placeholder {
    background: #fff;
    border-radius: 1.25rem;
    border: 0.125rem dashed #ddd6f5;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    text-align: center;
    color: #888;
    font-size: 0.9rem;
}

.qr-placeholder__icon {
    width: 5rem;
    height: 5rem;
    background: #f4f0fb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.qr-placeholder__icon .pi {
    font-size: 2.25rem;
    color: #c5b8e8;
}

.qr-placeholder__info {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    width: 100%;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.82rem;
    color: #666;
}

.info-item .pi {
    color: #6b4fa0;
    font-size: 0.9rem;
}

/* Transition */
.fade-up-enter-active,
.fade-up-leave-active {
    transition: all 0.3s ease;
}

.fade-up-enter-from {
    opacity: 0;
    transform: translateY(1rem);
}

.fade-up-leave-to {
    opacity: 0;
}

/* Responsivo */
@media (max-width: 48rem) {
    .doacao__title {
        font-size: 1.6rem;
    }

    .qr-card__img {
        width: 85%;
    }
}
</style>
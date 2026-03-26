"use client";
import styles from "./page.module.css";
import Header from "../components/Header/Header.jsx";
import CardComponent from "../components/Card/Card.jsx";
import { Carousel } from "antd";
import { Playfair_Display, Montserrat, Lora } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const lora = Lora({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Carousel arrows infinite={false} className={styles.carousel}>
        <div>
          <h3 className={`${styles.carouselItem} ${playfair.className}`}>
            Quando a solidariedade se move, a cidade inteira respira esperanca.
          </h3>
        </div>
        <div>
          <h3 className={`${styles.carouselItem} ${montserrat.className}`}>
            Cada mao estendida hoje vira futuro para alguem amanha.
          </h3>
        </div>
        <div>
          <h3 className={`${styles.carouselItem} ${lora.className}`}>
            Florianopolis fica mais forte quando coracoes escolhem servir juntos.
          </h3>
        </div>
      </Carousel>
      <section className={styles.cardsGrid}>
        <CardComponent
          title="Nossa 3ª Ação Social de Natal"
          description="https://www.instagram.com/voluntariosfloripaa/"
          imageSrc="/images/foto1.jpg"
          imageAlt="Logo da ONG Voluntarios Florianopolis"
          marginTop="0"
        />
        <CardComponent
          title="Europe Street beat"
          description="www.instagram.com"
          imageSrc="/images/foto2.jpg"
          imageAlt="Logo da ONG Voluntarios Florianopolis"
          marginTop="0"
        />
        <CardComponent
          title="Europe Street beat"
          description="www.instagram.com"
          imageSrc="/images/foto3.jpg"
          imageAlt="Logo da ONG Voluntarios Florianopolis"
          marginTop="0"
        />
        <CardComponent
          title="Europe Street beat"
          description="www.instagram.com"
          imageSrc="/images/foto4.jpg"
          imageAlt="Logo da ONG Voluntarios Florianopolis"
          marginTop="0"
        />
        <CardComponent
          title="Europe Street beat"
          description="www.instagram.com"
          imageSrc="/images/foto5.jpg"
          imageAlt="Logo da ONG Voluntarios Florianopolis"
          marginTop="0"
        />
        <CardComponent
          title="Europe Street beat"
          description="www.instagram.com"
          imageSrc="/images/foto6.jpg"
          imageAlt="Logo da ONG Voluntarios Florianopolis"
          marginTop="0"
        />
      </section>
    </div>
  );
}

import styles from "./Header.module.css";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                src="/logo.png"
                alt="Logo da ONG Voluntários Florianopólis"
                width={130}
                height={100}
                className={styles.logo}
            />
            <nav className={styles.navHeader}>
                <ul className={styles.navList}>
                    <li><a className={styles.navItem} href="">Início</a></li>
                    <li><a className={styles.navItem} href="/sobre">Sobre Nós</a></li>
                    <li><a className={styles.navItem} href="/projetos">Projetos</a></li>
                    <li><a className={styles.navItem} href="/contato">Contato</a></li>
                </ul>
            </nav>
            <AiOutlineMenu />
        </header>
    );
}

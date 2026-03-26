"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.sideLeft}>
                <Image
                    src="/logo.png"
                    alt="Logo da ONG Voluntários Florianopólis"
                    width={130}
                    height={100}
                    className={styles.logo}
                />
            </div>
            <nav className={styles.navHeader}>
                <ul className={styles.navList}>
                    <li><a className={styles.navItem} href="">Início</a></li>
                    <li><a className={styles.navItem} href="/sobre">Sobre Nós</a></li>
                    <li><a className={styles.navItem} href="/projetos">Projetos</a></li>
                </ul>
            </nav>
            <div className={styles.sideRight}>
                <button
                    type="button"
                    className={styles.menuButton}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <AiOutlineClose className={styles.menuIcon} />
                    ) : (
                        <AiOutlineMenu className={styles.menuIcon} />
                    )}
                </button>
                <a 
                    href="https://wa.me/554884452262" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.whatsappLink}
                    aria-label="Contato via WhatsApp"
                >
                    <FaWhatsapp className={styles.whatsappIcon} />
                </a>
                {isMenuOpen && (
                    <div className={styles.menuPanel}>
                        <Link href="/doacao" className={styles.menuLink} onClick={closeMenu}>
                            Doacao
                        </Link>
                        <Link href="/contato" className={styles.menuLink} onClick={closeMenu}>
                            Contato
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

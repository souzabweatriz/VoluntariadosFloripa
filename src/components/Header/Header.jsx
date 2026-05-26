"use client";

import Link from "next/link";
import Image from "next/image";
import {
    AiOutlineDown,
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineYoutube,
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineClockCircle,
} from "react-icons/ai";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.topBar}>
                <div className={styles.socialLinks}>
                    <div className={styles.socialItem}>
                        <AiOutlineFacebook className={styles.socialIcon} />
                    </div>
                    <div className={styles.socialItem}>
                        <AiOutlineInstagram className={styles.socialIcon} />
                    </div>
                    <div className={styles.socialItem}>
                        <AiOutlineTwitter className={styles.socialIcon} />
                    </div>
                    <div className={styles.socialItem}>
                        <AiOutlineYoutube className={styles.socialIcon} />
                    </div>
                    <div className={styles.socialItem}>
                        <AiOutlineLinkedin className={styles.socialIcon} />
                    </div>
                </div>

                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <div className={styles.contactIconWrapper}>
                            <AiOutlineMail className={styles.contactIcon} />
                        </div>
                        <p className={styles.contactText}>contato@voluntariosfloripa.com.br</p>
                    </div>
                    <div className={styles.contactItem}>
                        <div className={styles.contactIconWrapper}>
                            <AiOutlinePhone className={styles.contactIcon} />
                        </div>
                        <p className={styles.contactText}>+55 11-46558404</p>
                    </div>
                    <div className={styles.contactItem}>
                        <div className={styles.contactIconWrapper}>
                            <AiOutlineClockCircle className={styles.contactIcon} />
                        </div>
                        <p className={styles.contactText}>9:30 AM – 5:30 PM</p>
                    </div>
                </div>
            </div>

            <div className={styles.mainBar}>

                <div className={styles.containerLogo}>
                    <Link href="/" className={styles.logoLink}>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/images/logo.webp"
                                alt="Logo Voluntários Florianópolis"
                                width={36}
                                height={36}
                                className={styles.logo}
                            />
                        </div>
                    </Link>
                    <div className={styles.brandName}>
                        <p className={styles.titleLogo}>Voluntários</p>
                        <p className={styles.titleLogo}>Florianópolis</p>
                    </div>
                </div>

                <nav className={styles.nav}>
                    <Link href="/" className={styles.navItem}>
                        <p className={styles.navLabel}>Início</p>
                    </Link>
                    <Link href="/sobre" className={styles.navItem}>
                        <p className={styles.navLabel}>Sobre Nós</p>
                        <div className={styles.chevronWrapper}>
                            <AiOutlineDown className={styles.chevron} />
                        </div>
                    </Link>
                    <Link href="/acoes" className={styles.navItem}>
                        <p className={styles.navLabel}>Ações Sociais</p>
                        <div className={styles.chevronWrapper}>
                            <AiOutlineDown className={styles.chevron} />
                        </div>
                    </Link>
                </nav>

                <div className={styles.rightArea}>
                    <div className={styles.apoioBlock}>
                        <div className={styles.apoioIconWrapper}>
                            <Image
                                src="/images/maobtn.png"
                                alt="Apoie"
                                width={32}
                                height={32}
                                className={styles.apoioIcon}
                            />
                        </div>
                        <div className={styles.apoioText}>
                            <p className={styles.apoioSub}>Junte-se à causa</p>
                            <p className={styles.apoioTitle}>Apoie!</p>
                        </div>
                    </div>

                    <button className={styles.btnDoacao}>
                        <div className={styles.btnDoacaoContent}>
                            <p className={styles.btnDoacaoLabel}>Realizar doação</p>
                            <div className={styles.btnIconWrapper}>
                                <Image
                                    src="/images/doacaobtn.png"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className={styles.btnIcon}
                                />
                            </div>
                        </div>
                    </button>
                </div>

            </div>
        </header>
    );
}
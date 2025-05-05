"use client";
import { useLang } from "@/hooks/useLang";
import styles from "./Header.module.css";
import Logo from "@/components/elements/Logo/Logo";
import burgerImg from "../../../images/burger.svg";
import cartImg from "../../../images/header/cart.svg";
import likeImg from "../../../images/header/like.svg";
import profileImg from "../../../images/header/profile.svg";
import addImg from "../../../images/header/add.svg";
import searchImg from "../../../images/header/search.svg";
import Image from "next/image";

function Header() {
  const { lang, t, setLang } = useLang();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          {/* <button onClick={() => setLang(lang === "ru" ? "en" : "ru")}>
          Switch
        </button> */}
          <button className={styles.menu}>
            <Image src={burgerImg} alt="" /> {t[lang].header.menu__btn}
          </button>
          <div className={styles.logo}>
            <Logo />
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Image src={searchImg} alt="search" />
            </li>
            <li className={styles.link}>
              <Image src={likeImg} alt="search" />
            </li>
            <li className={styles.link}>
              <Image src={addImg} alt="search" />
            </li>
            <li className={styles.link}>
              <Image src={cartImg} alt="search" />
            </li>
            <li className={styles.link}>
              <Image src={profileImg} alt="search" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { useModals } from "@/hooks/useModals";
import styles from "./Menu.module.css";
import Logo from "@/components/elements/Logo/Logo";
import { useLang } from "@/hooks/useLang";
import Image from "next/image";
import { useState } from "react";
import SwitchLanguage from "../SwitchLanguage/SwitchLanguage";
import DropItems from "../DropItems/DropItems";
import backImg from "../../../../images/menu-background.png";
import lineImg from "../../../../images/menu/line.svg";

function Menu() {
  const [showCatalogList, setShowCatalogList] = useState(false);
  const [showBuyersList, setShowBuyersList] = useState(false);
  const [showContactsList, setShowContactsList] = useState(false);

  const { openMenu, setOpenMenu } = useModals();
  const { lang, t } = useLang();

  const handleCloseMenu = () => {
    setOpenMenu(() => false);
  };

  const catalogHover = () => {
    setShowCatalogList(true);
    setShowBuyersList(false);
    setShowContactsList(false);
  };

  const clothLinks = [
    {
      id: 1,
      text: t[lang].comparison["t-shirts"],
      href: "/catalog/cloth?offset=0&type=t-shirts",
    },
    {
      id: 2,
      text: t[lang].comparison["long-sleeves"],
      href: "/catalog/cloth?offset=0&type=long-sleeves",
    },
    {
      id: 3,
      text: t[lang].comparison.hoodie,
      href: "/catalog/cloth?offset=0&type=hoodie",
    },
    {
      id: 4,
      text: t[lang].comparison.outerwear,
      href: "/catalog/cloth?offset=0&type=outerwear",
    },
  ];

  const accessoriesLinks = [
    {
      id: 1,
      text: t[lang].comparison.bags,
      href: "/catalog/accessories?offset=0&type=bags",
    },
    {
      id: 2,
      text: t[lang].comparison.headdress,
      href: "/catalog/accessories?offset=0&type=headdress",
    },
    {
      id: 3,
      text: t[lang].comparison.umbrella,
      href: "/catalog/accessories?offset=0&type=umbrella",
    },
  ];

  const souvenirsLinks = [
    {
      id: 1,
      text: t[lang].comparison["business-souvenirs"],
      href: "/catalog/souvenirs?offset=0&type=business-souvenirs",
    },
    {
      id: 2,
      text: t[lang].comparison["promotional-souvenirs"],
      href: "/catalog/souvenirs?offset=0&type=promotional-souvenirs",
    },
  ];

  const officeLinks = [
    {
      id: 1,
      text: t[lang].comparison.notebook,
      href: "/catalog/office?offset=0&type=notebook",
    },
    {
      id: 2,
      text: t[lang].comparison.pen,
      href: "/catalog/office?offset=0&type=pen",
    },
  ];
  return (
    <nav className={`${styles.menu} ${openMenu && styles.open}`}>
      <Image className={styles.back__img} src={backImg} alt="" />
      <div className="container">
        <div className={styles.inner}>
          <div>
            <Logo />
          </div>
          <SwitchLanguage />
          <button className={styles.close} onClick={handleCloseMenu} />
          <div className={styles.row}>
            <ul className={styles.links}>
              <li className={styles.link}>
                <button onMouseEnter={catalogHover}>
                  {t[lang].main_menu.catalog}
                </button>
              </li>
              <li className={styles.link}>
                <button>{t[lang].main_menu.buyers}</button>
              </li>
              <li className={styles.link}>
                <button>{t[lang].main_menu.contacts}</button>
              </li>
            </ul>
            {showCatalogList && (
              <div className={styles.items}>
                <Image className={styles.catalog__img} src={lineImg} alt="" />
                <DropItems title={t[lang].main_menu.cloth} items={clothLinks} />
                <DropItems
                  title={t[lang].main_menu.accessories}
                  items={accessoriesLinks}
                />
                <DropItems
                  title={t[lang].main_menu.souvenirs}
                  items={souvenirsLinks}
                />
                <DropItems
                  title={t[lang].main_menu.office}
                  items={officeLinks}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;

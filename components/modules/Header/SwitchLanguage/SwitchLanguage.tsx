import { EnumLang } from "@/contexts/LanguageContext";
import styles from "./SwitchLanguage.module.css";
import { useLang } from "@/hooks/useLang";

function SwitchLanguage() {
  const { lang, setLang } = useLang();

  return (
    <div className={styles.lang}>
      <button
        onClick={() => {
          localStorage.setItem("lang", EnumLang.RU);
          setLang(EnumLang.RU);
        }}
        className={`${styles.lang__btn} ${
          lang === EnumLang.RU && styles.active__lang
        }`}
      >
        Ru
      </button>
      <button
        onClick={() => {
          localStorage.setItem("lang", EnumLang.EN);
          setLang(EnumLang.EN);
        }}
        className={`${styles.lang__btn} ${
          lang === EnumLang.EN && styles.active__lang
        }`}
      >
        En
      </button>
    </div>
  );
}

export default SwitchLanguage;

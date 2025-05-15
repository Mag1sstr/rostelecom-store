"use client";
import { ILinks } from "@/types/modules";
import styles from "./DropItems.module.css";
import { useState } from "react";

interface IProps {
  items: ILinks[];
  title: string;
}

function DropItems({ items, title }: IProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.links__drop} ${open && styles.open}`}>
      <p onClick={() => setOpen(!open)}>{title}</p>
      {open && (
        <div className={`${styles.hidden__links} ${open && styles.open}`}>
          {items?.map((item) => (
            <p key={item.id} className={styles.link}>
              {item.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropItems;

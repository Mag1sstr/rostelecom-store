import Image from "next/image";
import logoImg from "../../../images/logo.svg";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image src={logoImg} alt="" />
    </Link>
  );
}

export default Logo;

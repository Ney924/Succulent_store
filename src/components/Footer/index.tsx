import { logo } from "../../assets";
import {
  calling,
  message,
  location,
  facebook,
  twitter,
  instagram,
  linkedin,
} from "../../assets/footer";
import s from "./Footer.module.scss";

export function Footer() {
  const infoItem = [
    { name: "Профсоюзная улица, д.19", logo: location },
    { name: "ohuennyeZvety@pushka.ru", logo: message },
    { name: "8 999 831 28 22", logo: calling },
  ];

  const socialList = [
    { name: "facebook", logo: facebook },
    { name: "twitter", logo: twitter },
    { name: "instagram", logo: instagram },
    { name: "linkedin", logo: linkedin },
  ];

  return (
    <div className={s.root}>
      <div className={s.logoWrap}>
        <img src={logo} />
        <div className={s.logoFooter}>Succulent store</div>
      </div>
      <div className={s.infoBlock}>
        {infoItem.map((info) => (
          <div className={s.logoWrap}>
            <img src={info.logo} />
            <div className={s.logo}>{info.name}</div>
          </div>
        ))}
      </div>
      <div className={s.social}>
        {socialList.map((social) => (
          <div className={s.socialLogoWrap}>
            <img src={social.logo} className={s.socialLogo} />
          </div>
        ))}
      </div>
    </div>
  );
}

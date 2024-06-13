import { basket, logo, search, login } from "../../assets";
import { ButtonProject } from "../ButtonProject";
import s from "./header.module.scss";
// import SVG from "react-inlinesvg";

export function Header() {
  return (
    <div className={s.root}>
      {/* <SVG src={logo} height={20} width={20} /> //todo разобраться с свг */}
      <div className={s.logoWrap}>
        <img src={logo} />
        <div className={s.logo}>Succulent store</div>
      </div>

      <div className={s.sideBar}>
        <div className={s.sideBar_item}>home</div>
        <div className={s.sideBar_item}>shop</div>
        <div className={s.sideBar_item}>plant care</div>
        <div className={s.sideBar_item}>blogs</div>
      </div>

      <div className={s.userBlock}>
        <div className={s.search}>
          <img src={search} />
        </div>
        <div className={s.basket}>
          <img src={basket} />
        </div>

        <div className={s.loginButton}>
          <ButtonProject name="Вход" icon={login} />
        </div>
      </div>
    </div>
  );
}

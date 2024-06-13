import { ButtonProject } from "../ButtonProject";
import s from "./MainWidget.module.scss";
import {plant1, plant2} from './../../assets/index'

export function MainWidget() {
  return (
    <div className={s.root}>
      <div className={s.leftPart}>
        <div className={s.smallTitle}>Добро подаловать в Succulent store</div>
        <div className={s.bigTitle}>
          Создай свой уголок <span className={s.greenText}>природы</span>
        </div>
        <div className={s.description}>
          Мы — интернет-магазин растений, предлагающий широкий выбор недорогих и
          модных растений. Используйте наши растения, чтобы создать уникальные
          городские джунгли. Заказывайте любимые растения!
        </div>
        <ButtonProject name={"Начать покупки"} />
      </div>
      <div className={s.rightPart}>
        <img src={plant1} alt="" className={s.picture}/>
        <img src={plant2} alt="" className={s.pictureMini}/>
      </div>
    </div>
  );
}

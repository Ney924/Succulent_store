import s from "./ButtonProject.module.scss";
import clsx from 'clsx'

interface IButtonProject {
  name: string;
  icon?: string;
}

export function ButtonProject({ name, icon }: IButtonProject) {
  return (
    <button className={clsx(s.root, icon && s.withIcon)}>
      {icon && <img src={icon} />}
      {name}
    </button>
  );
}

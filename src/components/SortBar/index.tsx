import s from "./SortBar.module.scss";
import { sections } from "./constans";
import clsx from "clsx";

export function SortBar() {
  return (
    <div className={s.root}>
      {sections.map((section) => (
        <div key={section.name}>
          <div className={s.sections}>{section.name}</div>
          {section.name === "Категории" && (
            <div className={s.categories}>
              {section.data?.map((category) => (
                <div
                  className={clsx(s.category, category.isActive && s.isActive)}
                  key={category.name + category.value}
                >
                  <div>{category.name}</div>
                  <div>{`(${category.value})`}</div>
                </div>
              ))}
            </div>
          )}
          {/* {section.name === "Размер" && (
            <div style={{height: '300px'}}></div>
          )} */}
          {section.name === "Размер" && (
            <div className={s.categories}>
              {section.data?.map((size) => (
                <div
                  className={clsx(s.category, size.isActive && s.isActive)}
                  key={size.name}
                >
                  <div>{size.name}</div>
                  <div>{`(${size.value})`}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

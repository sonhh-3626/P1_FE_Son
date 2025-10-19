import DropdownToggle from "../../../common/DropdownToggle";
import ToggleItem from "../../../common/ToggleItem";
import MenuItem from "./MenuItem";
import { useTranslation } from "react-i18next";

import styles from "./MenuBar.module.css";
import { MENU_ITEMS_LEFT, type MenuItemType } from "../../../../constants/header/menuItems";


export default function MenuBar() {
  const { t } = useTranslation();

  const menuItemsRight: MenuItemType[] = [
    {
      type: "dropdown",
      label: t("trending_products"),
      items: [
        { label: t("hot_deals"), path: "/trending/hot" },
        { label: t("new_arrivals"), path: "/trending/new" },
      ],
    },
    {
      type: "dropdown",
      label: (
        <>
          {t("almost_finished")}
          <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-sm">
            SALE
          </span>
        </>
      ),
      items: [
        { label: t("hot_deals"), path: "/almost_finished/hot" },
        { label: t("new_arrivals"), path: "/almost_finished/new" },
      ],
    },
  ];

  return (
    <div className={styles.menuBar}>
      <div className={styles.menuBarContainer}>
        <div className={styles.menuBarSection}>
          <div className={styles.menuBarNav}>
            {MENU_ITEMS_LEFT.map((item, index) =>
              item.type === "dropdown" ? (
                <DropdownToggle
                  key={index}
                  label={typeof item.label === "string" ? t(item.label) : item.label}
                >
                  {item.items.map((subItem, subIndex) => (
                    <ToggleItem
                      key={subIndex}
                      label={t(subItem.label)}
                      path={subItem.path}
                    />
                  ))}
                </DropdownToggle>
              ) : (
                <MenuItem
                  key={index}
                  path={item.path}
                  label={t(item.label)}
                />
              )
            )}
          </div>
        </div>

        <div className={styles.menuBarRight}>
          {menuItemsRight.map((item, index) =>
            item.type === "dropdown" ? (
              <DropdownToggle
                key={index}
                label={item.label}
                color={index > 0 ? "danger" : "default"}
              >
                {item.items.map((subItem, subIndex) => (
                    <ToggleItem
                        key={subIndex}
                        label={t(subItem.label)}
                        path={subItem.path}
                    />
                ))}
              </DropdownToggle>
            ) : (
                <MenuItem key={index} path={item.path as string} label={item.label as string} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

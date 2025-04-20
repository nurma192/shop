import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "../container";
import { useLanguage } from "../../hooks/useLanguage";
import { useEffect } from "react";

export type NavItem = {
  labelKey: string;
  path: string;
};

export const NavBar = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  const navItems: NavItem[] = [
    { labelKey: "nav.shop", path: "/shop" },
    { labelKey: "nav.accounts", path: "/accounts" },
    { labelKey: "nav.deposits", path: "/deposits" },
    { labelKey: "nav.redAndCredit", path: "/red-and-credit" },
    { labelKey: "nav.installments", path: "/installments" },
    { labelKey: "nav.messages", path: "/messages" },
  ];

  useEffect(() => {
    console.log(currentLanguage);
  }, [currentLanguage]);

  return (
    <div className="bg-background">
      <Container>
        <nav className="flex w-full px-2">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm py-3 font-semibold px-4 ${isActive ? "text-secondary border-b-2 border-secondary" : "text-text-secondary hover:text-secondary"}`
              }
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
        </nav>
      </Container>
    </div>
  );
};

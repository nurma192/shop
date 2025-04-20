import React from "react";
import AccountCard from "../account_card";
import Button from "../ui/button";
import { useAppSelector } from "../../store/store";
import { Container } from "../container";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const user = useAppSelector(state => state.user.profile);
  const { t } = useTranslation();

  return (
    <div className="w-full bg-background-base py-6">
      <Container>
        <div className="w-full flex justify-between">
          {user && <AccountCard user={user} />}

          <div className="flex items-start gap-3">
            <Button className="hover:bg-background ">
              <i className="bx bx-cog"></i>
              {t("settings")}
            </Button>
            <Button className="bg-primary hover:bg-primary-dark text-white">{t("chooseTheme")}</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;

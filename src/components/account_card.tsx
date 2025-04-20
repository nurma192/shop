import type React from "react";
import type UserProfile from "../types/user";
import { useTranslation } from "react-i18next";
import { LanguageCode } from "../types/language";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setLanguage } from "../store/slices/app_slice";

type AccountCardProps = {
  user: UserProfile;
};

const AccountCard: React.FC<AccountCardProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-3xl p-4">
      <div className="flex">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
          <i className="bx bx-user text-md text-text-secondary text-2xl"></i>
        </div>

        <div className="flex px-3">
          <div className="flex flex-col justify-between">
            <h2 className="text-lg font-bold text-gray-800">
              {user.firstName} {user.lastName}
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
              <div className="flex items-center">
                <span>{user.dateOfBirth}</span>
              </div>

              <div className="flex items-center">
                <span>{user.city}</span>
              </div>

              <div className="flex items-center">
                <i className="bx bx-user-x text-gray-400 mr-1 text-xl"></i>
                <span>{user.isActive ? "Активен" : "Не активен"}</span>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex rounded-full overflow-hidden">
              <button className="px-4 py-1 text-md font-medium text-gray-700"></button>
              <LanguageButton language={LanguageCode.KZ} />
              <LanguageButton language={LanguageCode.RU} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type LanguageButtonProps = {
  language: LanguageCode;
};

const LanguageButton: React.FC<LanguageButtonProps> = ({ language }) => {
  const { t } = useTranslation();
  const app_state = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();
  return (
    <button
      className={`px-4 py-1 cursor-pointer text-md rounded-full font-medium ${app_state.language === language && "border border-secondary text-secondary"}`}
      onClick={() => {
        dispatch(setLanguage(language));
      }}
    >
      {t(`language.${language}`)}
    </button>
  );
};

export default AccountCard;

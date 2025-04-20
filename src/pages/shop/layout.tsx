import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Container } from "../../components/container";
import CustomSelect from "../../components/ui/custom_select";
import { NavItem } from "../../components/layout/navbar";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setSelectedShop } from "../../store/slices/shop_slice";

export default function ShopLayout() {
  const { t } = useTranslation();
  const location = useLocation();
  const user = useAppSelector(state => state.user.profile);
  const selectedShopId = useAppSelector(state => state.shop.selectedShopId);
  const dispatch = useAppDispatch();

  const navItems: NavItem[] = [
    { labelKey: "nav.main", path: "/shop" },
    { labelKey: "nav.orders", path: "/shop/orders" },
    { labelKey: "nav.my_delivery", path: "/shop/delivery" },
    { labelKey: "nav.products", path: "/shop/products" },
  ];

  if (!user) return null;

  const onShopChange = (val: string) => {
    dispatch(setSelectedShop(val));
  };

  return (
    <div className="flex gap-2">
      <Container>
        <div className="w-full flex mt-4">
          <div className="w-[200px]">
            <CustomSelect
              defaultValue={selectedShopId || ""}
              options={user.shops.map(shop => ({
                value: shop.id,
                label: shop.name,
              }))}
              onChange={onShopChange}
            />
            <div className="flex flex-col gap-2 py-4">
              {navItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold py-1 ${location.pathname === item.path ? "text-secondary" : "text-text-secondary hover:text-secondary"}`}
                >
                  {t(item.labelKey)}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="ml-5">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
}

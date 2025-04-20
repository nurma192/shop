import { useTranslation } from "react-i18next";
import { Card } from "../../components/ui/card";
import { StatusEnum } from "../../types/statuses";
import { useState } from "react";
import { useAppSelector } from "../../store/store";

export const ShopOverview = () => {
  const [orderId, setOrderId] = useState<string>("");
  const shopId = useAppSelector(state => state.shop.selectedShopId);
  const user = useAppSelector(state => state.user.profile);
  const selectedShop = user?.shops.find(shop => shop.id === shopId);

  const { t } = useTranslation();

  const filteredOrders = selectedShop?.orders.filter(order => {
    const query = orderId.trim().toLowerCase();
    if (!query) return true;
    return order.id.toLowerCase().includes(query) || order.name.toLowerCase().includes(query);
  });

  return (
    <div className="flex flex-col ">
      <div className="flex flex-wrap gap-4">
        <Card className="w-[250px]">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm ">{t("nav.shop")}</h4>
            <div className="rounded-full hover:bg-background-base p-1  flex items-center justify-center cursor-pointer">
              <i className="bx bx-cog text-text-secondary"></i>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <div className="flex justify-between items-start">
              <h5 className="font-semibold text-[12px]">{selectedShop?.name}</h5>
              <StatusBadge status={StatusEnum.Active} />
            </div>
            <div className="flex justify-between items-start">
              <h5 className="font-semibold text-[12px]">Касса</h5>
              <StatusBadge status={selectedShop?.cashRegister || StatusEnum.Inactive} />
            </div>
          </div>
        </Card>

        <Card className="w-[250px]">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm">{t("metricsCard.title")}</h4>
          </div>
          <div className="flex gap-6 mt-3">
            <div className="">
              <div className="flex">
                <h2 className="font-bold text-2xl">{selectedShop?.grade}</h2>
                {selectedShop?.grade === 5 ? <i className="bx bxs-star text-secondary"></i> : <i className="bx bxs-star-half text-secondary"></i>}
              </div>
              <p className="text-text-secondary text-xs">{selectedShop?.gradeCount}</p>
            </div>
            <div className="">
              <div className="flex">
                <h2 className="font-bold text-2xl">{selectedShop?.percent}</h2>
                <p className="font-bold text-secondary">%</p>
              </div>
              <p className="text-text-secondary text-xs">Доля отмен</p>
            </div>
          </div>
        </Card>

        <Card className="w-[250px]">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm">{t("deliveryCard.title")}</h4>
          </div>
          <div className="flex flex-col gap- mt-1">
            {selectedShop?.deliveryOptions.map(option => (option.enabled ? <p className="text-text-secondary text-xs">{option.label}</p> : null))}
          </div>
        </Card>
      </div>
      <Card className="mt-4">
        <div className="">
          <h3 className="font-bold">{t("ordersSection.title")}</h3>
          <div className="flex gap-2 items-center bg-background-base rounded-xl p-3">
            <i className="bx bx-search-alt-2 text-text-secondary"></i>
            <div className="w-full">
              <input type="text" value={orderId} onChange={e => setOrderId(e.target.value)} className="w-full focus-visible:outline-none" />
            </div>
          </div>
          <div className="flex flex-col">
            {filteredOrders && filteredOrders.length > 0 ? (
              filteredOrders.map(order => (
                <div key={order.id} className="flex justify-between items-center border-b border-background-base py-2">
                  <div className="flex flex-col items-start">
                    <h4 className="text-sm">{order.name}</h4>
                    <StatusBadge status={order.status} />
                  </div>
                </div>
              ))
            ) : (
              <p className="py-4 text-center text-text-secondary text-sm">Нет заказов по этому запросу</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <StatusBadge status={StatusEnum.Active} />
          <StatusBadge status={StatusEnum.Inactive} />
          <StatusBadge status={StatusEnum.Delivered} />
          <StatusBadge status={StatusEnum.Disconnected} />
          <StatusBadge status={StatusEnum.Cancelled} />
          <StatusBadge status={StatusEnum.Issued} />
          <StatusBadge status={StatusEnum.Pending} />
          <StatusBadge status={StatusEnum.Shipped} />
        </div>
      </Card>
    </div>
  );
};

export const STATUS_STYLES = {
  [StatusEnum.Active]: {
    wrapper: "bg-green-700/20",
    dot: "bg-green-700",
    text: "text-green-700",
    label: "statusActive",
  },
  [StatusEnum.Inactive]: {
    wrapper: "bg-red-500/25",
    dot: "bg-red-500/50",
    text: "text-red-500",
    label: "statusInactive",
  },
  [StatusEnum.Connected]: {
    wrapper: "bg-green-700/20",
    dot: "bg-green-700",
    text: "text-green-700",
    label: "statusConnected",
  },
  [StatusEnum.Disconnected]: {
    wrapper: "bg-red-500/25",
    dot: "bg-red-500/50",
    text: "text-red-500",
    label: "Не подключен",
  },
  [StatusEnum.Pending]: {
    wrapper: "bg-yellow-500/25",
    dot: "bg-yellow-500/50",
    text: "text-yellow-500",
    label: "statusPending ожидании",
  },
  [StatusEnum.Delivered]: {
    wrapper: "bg-blue-500/25",
    dot: "bg-blue-500/50",
    text: "text-blue-500",
    label: "statusDelivered",
  },
  [StatusEnum.Issued]: {
    wrapper: "bg-blue-500/25",
    dot: "bg-blue-500/50",
    text: "text-blue-500",
    label: "statusIssued",
  },
  [StatusEnum.Shipped]: {
    wrapper: "bg-blue-500/25",
    dot: "bg-blue-500/50",
    text: "text-blue-500",
    label: "statusShipped",
  },
  [StatusEnum.Cancelled]: {
    wrapper: "bg-red-500/25",
    dot: "bg-red-500/50",
    text: "text-red-500",
    label: "statusCancelled",
  },
} as const;

type StatusBadgeProps = {
  status: StatusEnum;
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  // Fallback to Pending if an unknown status is passed
  const { wrapper, dot, text, label } = STATUS_STYLES[status] || STATUS_STYLES[StatusEnum.Pending];
  const { t } = useTranslation();

  return (
    <div className={wrapper + " inline-flex items-center gap-2 px-1 rounded"}>
      <span className={dot + " block w-1 h-1 rounded-full"} />
      <span className={"text-xs " + text}>{t(`orderItem.${label}`)}</span>
    </div>
  );
};

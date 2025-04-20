import { DeliveryMethod, DeliveryOption } from "./delivery";
import { Order, orders1, orders2, orders3 } from "./order";
import { StatusEnum } from "./statuses";

export interface StoreInfo {
  id: string;
  name: string;
  status: StatusEnum;
  cashRegister: StatusEnum;
  orders: Order[];
  deliveryOptions: DeliveryOption[];
  grade: number;
  gradeCount: number;
  percent: number;
}

export const storeInfos: StoreInfo[] = [
  {
    id: "store1",
    name: "Kaspi Shop #1",
    status: StatusEnum.Active,
    cashRegister: StatusEnum.Connected,
    orders: orders1,
    deliveryOptions: [
      {
        method: DeliveryMethod.Pickup,
        label: "Самовывоз",
        enabled: true,
      },
      {
        method: DeliveryMethod.OwnCourier,
        label: "Свой курьер",
        enabled: true,
      },
      {
        method: DeliveryMethod.Express,
        label: "Экспресс доставка",
        enabled: true,
      },
    ],
    grade: 5,
    gradeCount: 40,
    percent: 3.9,
  },
  {
    id: "store3",
    name: "Kaspi Shop #3",
    status: StatusEnum.Active,
    cashRegister: StatusEnum.Connected,
    orders: orders3,
    deliveryOptions: [
      {
        method: DeliveryMethod.Pickup,
        label: "Самовывоз",
        enabled: true,
      },
      {
        method: DeliveryMethod.OwnCourier,
        label: "Свой курьер",
        enabled: false,
      },
      {
        method: DeliveryMethod.Express,
        label: "Экспресс доставка",
        enabled: true,
      },
    ],
    grade: 4.5,
    gradeCount: 140,
    percent: 4.5,
  },
  {
    id: "store2",
    name: "Kaspi Shop #2",
    status: StatusEnum.Inactive,
    cashRegister: StatusEnum.Disconnected,
    orders: orders2,
    deliveryOptions: [
      {
        method: DeliveryMethod.Pickup,
        label: "Самовывоз",
        enabled: true,
      },
      {
        method: DeliveryMethod.OwnCourier,
        label: "Свой курьер",
        enabled: true,
      },
      {
        method: DeliveryMethod.Express,
        label: "Экспресс доставка",
        enabled: false,
      },
    ],
    grade: 4,
    gradeCount: 44,
    percent: 5.7,
  },
];

import { StatusEnum } from "./statuses";

export interface OrderItem {
  id: string;
  name: string;
  color?: string;
  quantity?: number;
}

export interface Order {
  id: string;
  orderNumber: string;

  name: string;
  items: OrderItem[];
  status: StatusEnum;
  createdAt?: string;
}

export const orders1: Order[] = [
  {
    id: "1",
    orderNumber: "100000001",
    name: "SteelSeries Arctis 7 беспроводная гарнитура",
    items: [{ id: "i1", name: "Arctis 7", quantity: 1 }],
    status: StatusEnum.Delivered,
    createdAt: "2025-04-10T09:15:00Z",
  },
  {
    id: "2",
    orderNumber: "100000002",
    name: "Advanti T05-65 универсальный красный, черный",
    items: [{ id: "i3", name: "Product C", quantity: 4 }],
    status: StatusEnum.Shipped,
    createdAt: "2025-04-14T14:45:00Z",
  },
  {
    id: "3",
    orderNumber: "100000003",
    name: "Michelin Pilot Sport 4 летняя шина",
    items: [{ id: "i4", name: "Pilot Sport 4", quantity: 2 }],
    status: StatusEnum.Pending,
    createdAt: "2025-04-16T12:30:00Z",
  },
  {
    id: "4",
    orderNumber: "100000004",
    name: "Logitech MX Master 3 мышь Bluetooth",
    items: [{ id: "i5", name: "MX Master 3", quantity: 1 }],
    status: StatusEnum.Issued,
    createdAt: "2025-04-18T08:20:00Z",
  },
  {
    id: "5",
    orderNumber: "100000005",
    name: "Samsung Galaxy Tab S8 планшет",
    items: [{ id: "i6", name: "Galaxy Tab S8", quantity: 1 }],
    status: StatusEnum.Cancelled,
    createdAt: "2025-04-19T17:05:00Z",
  },
];

export const orders2: Order[] = [
  {
    id: "101",
    orderNumber: "200000101",
    name: "Apple AirPods Pro 2 беспроводные",
    items: [{ id: "i101", name: "AirPods Pro 2", quantity: 1 }],
    status: StatusEnum.Delivered,
    createdAt: "2025-04-11T10:20:00Z",
  },
  {
    id: "102",
    orderNumber: "200000102",
    name: "Sony WH-1000XM5 активные шумоподавляющие",
    items: [{ id: "i102", name: "WH-1000XM5", quantity: 1 }],
    status: StatusEnum.Shipped,
    createdAt: "2025-04-12T14:50:00Z",
  },
  {
    id: "103",
    orderNumber: "200000103",
    name: "Xiaomi Mi Band 7 фитнес‑браслет",
    items: [{ id: "i103", name: "Mi Band 7", quantity: 2 }],
    status: StatusEnum.Pending,
    createdAt: "2025-04-15T09:00:00Z",
  },
  {
    id: "104",
    orderNumber: "200000104",
    name: "HP Envy 13 ноутбук",
    items: [{ id: "i104", name: "Envy 13", quantity: 1 }],
    status: StatusEnum.Issued,
    createdAt: "2025-04-17T16:30:00Z",
  },
  {
    id: "105",
    orderNumber: "200000105",
    name: "GoPro HERO11 Black экшн‑камера",
    items: [{ id: "i105", name: "HERO11 Black", quantity: 1 }],
    status: StatusEnum.Cancelled,
    createdAt: "2025-04-18T11:15:00Z",
  },
];

export const orders3: Order[] = [
  {
    id: "201",
    orderNumber: "300000201",
    name: "Dell UltraSharp U2723QE монитор",
    items: [{ id: "i201", name: "U2723QE", quantity: 1 }],
    status: StatusEnum.Active,
    createdAt: "2025-04-10T08:45:00Z",
  },
  {
    id: "202",
    orderNumber: "300000202",
    name: "Logitech G502 HERO игровая мышь",
    items: [{ id: "i202", name: "G502 HERO", quantity: 1 }],
    status: StatusEnum.Connected,
    createdAt: "2025-04-13T12:10:00Z",
  },
  {
    id: "203",
    orderNumber: "300000203",
    name: "Razer BlackWidow V4 механическая клавиатура",
    items: [{ id: "i203", name: "BlackWidow V4", quantity: 1 }],
    status: StatusEnum.Pending,
    createdAt: "2025-04-16T14:00:00Z",
  },
  {
    id: "204",
    orderNumber: "300000204",
    name: "Samsung T7 Portable SSD 1TB",
    items: [{ id: "i204", name: "T7 SSD 1TB", quantity: 1 }],
    status: StatusEnum.Issued,
    createdAt: "2025-04-18T09:30:00Z",
  },
  {
    id: "205",
    orderNumber: "300000205",
    name: "Canon EOS R50 беззеркальный фотоаппарат",
    items: [{ id: "i205", name: "EOS R50", quantity: 1 }],
    status: StatusEnum.Disconnected,
    createdAt: "2025-04-19T15:20:00Z",
  },
];

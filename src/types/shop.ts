import { StoreInfo } from "./store";
import { QualityMetrics } from "./metrics";
import { DeliveryOption } from "./delivery";
import { Order } from "./order";

export interface ShopPageData {
  store: StoreInfo;
  metrics: QualityMetrics;
  deliveryOptions: DeliveryOption[];
  orders: Order[];
}

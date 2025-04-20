export enum DeliveryMethod {
  Pickup = "pickup",
  OwnCourier = "ownCourier",
  Express = "express",
}

export interface DeliveryOption {
  method: DeliveryMethod;
  label: string;
  enabled: boolean;
}

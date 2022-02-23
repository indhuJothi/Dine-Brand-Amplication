import { FreedomPay as TFreedomPay } from "../api/freedomPay/FreedomPay";

export const FREEDOMPAY_TITLE_FIELD = "id";

export const FreedomPayTitle = (record: TFreedomPay): string => {
  return record.id || record.id;
};

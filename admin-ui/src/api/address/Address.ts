import { FreedomPay } from "../freedomPay/FreedomPay";

export type Address = {
  address?: Address | null;
  addresses?: Array<Address>;
  createdAt: Date;
  freedomPays?: Array<FreedomPay>;
  id: string;
  location: string | null;
  pinCode: string | null;
  updatedAt: Date;
};

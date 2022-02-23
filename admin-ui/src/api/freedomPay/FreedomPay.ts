import { Address } from "../address/Address";
import { Homepage } from "../homepage/Homepage";

export type FreedomPay = {
  address?: Address | null;
  createdAt: Date;
  freedomOfPay?: "Yes" | "No" | null;
  homepages?: Array<Homepage>;
  id: string;
  updatedAt: Date;
};

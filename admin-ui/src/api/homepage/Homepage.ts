import { FreedomPay } from "../freedomPay/FreedomPay";

export type Homepage = {
  createdAt: Date;
  email: string | null;
  freedomPay?: FreedomPay | null;
  id: string;
  mobileNumber: string | null;
  password: string | null;
  updatedAt: Date;
  username: string;
};

import { FreedomPayWhereUniqueInput } from "../freedomPay/FreedomPayWhereUniqueInput";

export type HomepageUpdateInput = {
  email?: string | null;
  freedomPay?: FreedomPayWhereUniqueInput | null;
  mobileNumber?: string | null;
  password?: string | null;
  username?: string;
};

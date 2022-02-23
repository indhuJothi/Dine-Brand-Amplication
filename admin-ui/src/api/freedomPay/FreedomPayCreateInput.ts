import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type FreedomPayCreateInput = {
  address?: AddressWhereUniqueInput | null;
  freedomOfPay?: "Yes" | "No" | null;
};

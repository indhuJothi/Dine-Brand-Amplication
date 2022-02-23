import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type FreedomPayUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  freedomOfPay?: "Yes" | "No" | null;
};

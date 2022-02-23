import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FreedomPayWhereInput = {
  address?: AddressWhereUniqueInput;
  freedomOfPay?: "Yes" | "No";
  id?: StringFilter;
};

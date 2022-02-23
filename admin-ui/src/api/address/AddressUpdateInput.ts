import { AddressWhereUniqueInput } from "./AddressWhereUniqueInput";

export type AddressUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  location?: string | null;
  pinCode?: string | null;
};

import { AddressWhereUniqueInput } from "./AddressWhereUniqueInput";

export type AddressCreateInput = {
  address?: AddressWhereUniqueInput | null;
  location?: string | null;
  pinCode?: string | null;
};

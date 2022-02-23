import { AddressWhereUniqueInput } from "./AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AddressWhereInput = {
  address?: AddressWhereUniqueInput;
  id?: StringFilter;
  location?: StringNullableFilter;
  pinCode?: StringNullableFilter;
};

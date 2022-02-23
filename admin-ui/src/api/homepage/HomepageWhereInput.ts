import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FreedomPayWhereUniqueInput } from "../freedomPay/FreedomPayWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type HomepageWhereInput = {
  email?: StringNullableFilter;
  freedomPay?: FreedomPayWhereUniqueInput;
  id?: StringFilter;
  mobileNumber?: StringNullableFilter;
  password?: StringNullableFilter;
  username?: StringFilter;
};
